import * as React from 'react';
import {Route} from "react-router";
import Counter from "./Counter";
import FetchData from "./FetchData";

export default () => (
    <React.Fragment>
        <Route exact path='/' component={Counter} />
        <Route path='/counter' component={Counter} />
        <Route path='/fetch-data/:startDateIndex?' component={FetchData} />
    </React.Fragment>
);
