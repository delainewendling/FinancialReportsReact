import React from 'react';
import {Route, IndexRoute } from 'react-router';
import Main from './components/Main';
import Menu from './components/Menu';
import GetTimelyReports from './containers/TimelyReportContainer'

export default ( 
    <Route path ="/" component = { Main } >
        <IndexRoute component = { Menu }/> 
        <Route path="weeklyReport" days="7" header="Weekly Report" component={GetTimelyReports}/>
        <Route path="monthlyReport" days="30" header="Monthly Report" component={GetTimelyReports}/>
        <Route path="quarterlyReport" days="90" header="Quarterly Report" component={GetTimelyReports}/>
    </Route > 
)
