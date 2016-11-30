import React, { PropTypes } from 'react';

const ReportRow = ({ product }) => {
    return ( <
        tr >
        <
        td > { product.name } < /td> <
        td > ${ product.price.toFixed(2) } < /td> <
        /tr>
    );
};

ReportRow.propTypes = {
    product: PropTypes.object.isRequired
}

export default ReportRow;