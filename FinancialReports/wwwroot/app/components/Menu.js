import React from 'react';
import ReactRouter from 'react-router';
import{Link} from 'react-router';

export default function Menu (){
  return (
    <nav className="navbar navbar-default">
      <div className="container-fluid">
        <ul className="nav navbar-nav">
          <li><Link to="weeklyReport"> Weekly Report </Link></li>
          <li><Link to="monthlyReport"> Monthly Report </Link></li>
          <li><Link to="quarterlyReport"> Quarterly Report </Link></li>
          <li><Link to="customerRevenueReport"> Customer Revenue Report </Link></li>
          <li><Link to="productRevenueReport"> Product Revenue Report </Link></li>
        </ul>
      </div>
    </nav>
  )
}