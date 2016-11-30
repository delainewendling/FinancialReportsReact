import React, { PropTypes } from 'react';
import * as productCalls from '../apiHelpers/productCalls';
import TimelyReport from '../components/TimelyReports';

class GetTimelyReports extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            products: []
        }
    }
    getReportInfo(days) {
        productCalls.loadTimelyReport(days)
            .then(productList => {
                console.log("products from call in container", productList);
                this.setState({
                    products: productList
                })
            })
    }
    componentDidMount() {
        return this.getReportInfo(parseInt(this.props.route.days));
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.route.days != this.props.days) {
            return this.getReportInfo(parseInt(nextProps.route.days))
        }
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.products != this.state.products) {
            console.log("updated!");
            return true;
        }
    }
    render() {
        return ( <
            TimelyReport header = { this.props.route.header }
            products = { this.state.products }
            />
        )
    }
}


export default GetTimelyReports;