import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { AboutPage } from './AboutPage'
import { HomePage } from './HomePage'
import { LoginPage } from './LoginPage'
import { NavBar } from './NavBar'

export const AppRouter = () => {

    return (
        <Router>
            <div>

                <NavBar />
                <div className="container">
                    <Switch>
                        <Route exact  path="/" component={ HomePage }/>

                        <Route exact path="/login" component={ LoginPage }/>
                        <Route exact path="/about" component={ AboutPage }/>

                        <Route component={ HomePage } />
                    </Switch>
                </div>
            </div>
        </Router>
    )
}
