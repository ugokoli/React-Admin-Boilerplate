import * as React from 'react';
import { Route } from 'react-router';
import Layout from './layouts/Layout';
import LayoutAuthed from "./layouts/LayoutAuthed";
import Login from './Login';
import Counter from './authed/Counter';
import FetchData from './authed/FetchData';

import '../custom.css'
import Session from "../utils/Session";

export default () => {
    const session = new Session();

    return session.loggedIn() === true
        ? (
                <Layout>
                    <Route exact path='/' component={Login} />
                </Layout>
            )
        : (
                <LayoutAuthed>
                    <Route path='/counter' component={Counter} />
                    <Route path='/fetch-data/:startDateIndex?' component={FetchData} />
                </LayoutAuthed>
            )
};
