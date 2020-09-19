import React from 'react';
import { Router } from '@reach/router';
import Main from './containers/Main';
import Update from './containers/Update'
import Create from './containers/Create'
import Detail from './containers/Detail'


export default () => {
    return (
        <div>
            <Router>
                <Main path="/" />
                <Create path="/new" />
                <Update path="/edit/:id" />
                <Detail path="/:id" />
            </Router>
        </div>
    );
}
