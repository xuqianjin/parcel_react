import React, {Component} from "react"
import ReactDOM from 'react-dom'
import makeRoutes from './routes'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import {Provider} from 'react-redux'
import configureStore from './redux/configureStore'
import Root from './containers/Root'

const routes = makeRoutes()
const initialState = window.__INITIAL_STATE__
const store = configureStore(initialState)

ReactDOM.render(<Root routes={routes} store={store}></Root>, document.getElementById('root'));
