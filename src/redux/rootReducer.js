import {
  combineReducers
} from 'redux'
import {
  routerReducer as router
} from 'react-router-redux'


// import MyReducer from './modules/MyReducer'
import AboutProductReducer from './modules/AboutProductReducer'

export default combineReducers({
  router,
  AboutProductReducer,
})
