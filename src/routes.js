import React from 'react';

import { Route, Switch, Redirect } from 'react-router-dom';

// Pages
import New from './pages/New';
import Feed from './pages/Feed';

function Routes() {
    return (
        <Switch>
            <Route exact path="/feed" component={Feed} />
            <Route exact path="/new" component={New} />
            <Redirect from="*" to="/feed" />
        </Switch>
    );
}

export default Routes;