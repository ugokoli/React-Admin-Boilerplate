import * as React from 'react';
import {Route} from "react-router";
import Counter from "./Counter";
import FetchData from "./FetchData";
import Teller from "./teller/Teller";

export default () => (
    <React.Fragment>
        <Route exact path='/' component={Counter} />
        {/*<Route path='/dashboard' component={Dashboard} />*/}
        <Route path='/teller' component={Teller} />
        {/*<Route path='/device' component={Device} />*/}
        {/*<Route path='/branch' component={Branch} />*/}
        <Route path='/counter' component={Counter} />
        <Route path='/fetch-data/:startDateIndex?' component={FetchData} />
    </React.Fragment>
);
