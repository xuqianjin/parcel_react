import React, {Component} from "react"
import {connect} from "react-redux"
import classNames from "classnames"
import {getCatRoot, getCatProduct} from '../redux/modules/AboutProductReducer'
import {history} from 'react-router-dom'
import styles from './styles.scss'
@connect(state => ({AboutProductReducer: state.AboutProductReducer}), {getCatRoot, getCatProduct})
export default class Homeview extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  componentWillMount() {}
  componentDidMount() {
    console.log(process.env.DB_PASS);
  }
  componentWillReceiveProps(nextProps) {}
  componentDidUpdate() {}
  componentWillUnmount() {}
  onclick = (a) => {
    this.props.history.push('user')
  }
  render() {
    return (<div>
      <button className={styles.button} onClick={this.onclick}>下一页</button>
    </div>)
  }
}
