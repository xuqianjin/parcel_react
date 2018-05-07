import React, {Component} from "react"
import {connect} from "react-redux"
import classNames from "classnames"

export default class Child extends React.PureComponent {
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
    console.log('childrender')
    return (<div {...this.props}>ssss</div>)
  }
}
