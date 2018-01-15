import React, {Component} from "react"
import {connect} from "react-redux"
import classNames from "classnames"
import {getCatRoot, getCatProduct} from '../redux/modules/AboutProductReducer'
import {history} from 'react-router-dom'
@connect(state => ({AboutProductReducer: state.AboutProductReducer}), {getCatRoot, getCatProduct})
export default class Homeview extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  componentWillMount() {
    this.props.getCatRoot()
  }
  componentDidMount() {}
  componentWillReceiveProps(nextProps) {}
  componentDidUpdate() {}
  componentWillUnmount() {}
  onclick = (a) => {
    this.props.history.push('user')
  }
  render() {
    return (<div>
      <button onClick={this.onclick}>下一页</button>
    </div>)
  }
}
