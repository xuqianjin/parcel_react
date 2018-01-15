import React, {Component} from "react"
import {connect} from "react-redux"
import classNames from "classnames"
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  componentWillMount() {}
  componentDidMount() {}
  componentWillReceiveProps(nextProps) {}
  componentDidUpdate() {}
  componentWillUnmount() {}
  render() {
    return (<div>{this.props.children}</div>)
  }
}
