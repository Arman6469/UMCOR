import React from 'react';
import {Switch, Route} from 'react-router-dom'
import HomePage from '../pages/Home/HomePage'
import Header from '../components/Header/Header';


export default function AppRouter() {
    return (
        <div>
            <Header />
            <Switch>
                <Route path='/' component={HomePage} />
            </Switch>
        </div>
    )
}
