import React, {Fragment, useState} from 'react';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import Auth from 'routes/Auth';
import Home from 'routes/Home';
import Profile from 'routes/Profile';
import Navigation from 'component/Navigation';
import Maps from 'component/Map';
import Twitt from 'routes/Twitt';

const AppRouter = ({isLoggedIn, userObj}) => {
    return(
        <Router>
            {isLoggedIn && <Navigation />}
            <Switch>
                {isLoggedIn ? (
                <>
                    <Route exact path="/">
                        <Home />
                        <Twitt userObj={userObj} />
                        <Maps>
                        
                        </ Maps>
                    </Route>
                    <Route exact path="/profile">
                        <Profile />
                    </Route>
                </>
                ) : (
                <Route exact path ="/">
                    <Auth/>
                    </Route>
                    )}
            </Switch>
        </Router>
    );
}
export default AppRouter;