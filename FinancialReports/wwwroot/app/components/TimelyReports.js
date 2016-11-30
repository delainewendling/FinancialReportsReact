import React, {PropTypes} from 'react';
import ReportRow from './ReportRow';
import Menu from './Menu';

const TimelyReport = ({header, products})=>{
    return ( 
      <div>
        <Menu />
        <h1> {header} </h1>
        <table className="table">
          <thead>
            <tr>
              <th> Product </th>
              <th> Price </th>
            </tr>
          </thead>
          <tbody>
          {products.length > 0 && products.map((product, index) =>
            <ReportRow key={index} product={product}/>
          )}
          {products.length === 0 && <td> There are no products in this report </td>}
          </tbody>
        </table>
      </div>
    )
}

TimelyReport.propTypes = {
  products: PropTypes.array.isRequired,
  header: PropTypes.string.isRequired
}

export default TimelyReport;