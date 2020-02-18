import * as React from 'react';
import { Route } from 'react-router';
import Layout from './views/Layout';
import Home from './views/Login';
import Counter from './views/authed/Counter';
import FetchData from './views/authed/FetchData';

import './custom.css'

export default () => (
    <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/counter' component={Counter} />
        <Route path='/fetch-data/:startDateIndex?' component={FetchData} />
    </Layout>
);
