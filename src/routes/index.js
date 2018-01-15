import React, {Component} from "react"
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import Homeview from '../view/Homeview'
import User from '../view/User'
import App from '../view/App'

export default() => (
<App>
    <Switch>
      <Route exact path="/" component={Homeview}/>
      <Route path="/user" component={User}/>
    </Switch>
</App>
)
