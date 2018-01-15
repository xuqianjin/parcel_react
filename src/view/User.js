import React, {Component} from "react"
import {connect} from "react-redux"
import classNames from "classnames"

export default class User extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  componentWillMount() {
  console.log(process.env.DB_PASS);
}
  componentDidMount() {}
  componentWillReceiveProps(nextProps) {}
  componentDidUpdate() {}
  componentWillUnmount() {}
  onclick = (a) => {
    console.log(this.props);
  }
  render() {
    return (<div>
      这是user
      <button onClick={this.onclick}>下一页</button>
    </div>)
  }
}
