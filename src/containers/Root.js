import React from 'react'
import {Provider} from 'react-redux'
import {BrowserRouter} from 'react-router-dom'
import PropTypes from 'prop-types';

export default class Root extends React.Component {
  get content() {
    return (<BrowserRouter>
      {this.props.routes}
    </BrowserRouter>)
  }

  get devTools() { //redux工具会报 babel错误..暂不建议开启
    // if (true) {
    //   if (__DEBUG_NEW_WINDOW__) {
    //     if (!window.devToolsExtension) {
    //       require('../redux/utils/createDevToolsWindow').default(this.props.store)
    //     } else {
    //       window.devToolsExtension.open()
    //     }
    //   } else if (!window.devToolsExtension) {
    //     const DevTools = require('./DevTools').default
    //     return <DevTools/>
    //   }
    // }
  }

  render() {
    return (<Provider store={this.props.store}>
      <div>
        {this.content}
        {this.devTools}
      </div>
    </Provider>)
  }
}
Root.propTypes = {
  routes: PropTypes.element.isRequired,
  store: PropTypes.object.isRequired
};
