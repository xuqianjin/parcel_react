import React, {Component} from "react"
import {connect} from "react-redux"
import classNames from "classnames"
import {getCatRoot, getCatProduct} from '../redux/modules/AboutProductReducer'
import {history} from 'react-router-dom'
import styles from './styles.scss'
import Child from './Child'
@connect(state => ({AboutProductReducer: state.AboutProductReducer}), {getCatRoot, getCatProduct})
export default class Homeview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 1
    }
    this.a = 3
  }
  componentWillMount() {}
  componentDidMount() {
    console.log(process.env.DB_PASS);
  }
  componentWillReceiveProps(nextProps) {}
  componentDidUpdate() {}
  componentWillUnmount() {}
  _handleClick = (a) => {
    this.props.history.push('user')
  }
  onPress = () => {
    console.log(this.a);
  }
  render() {
    return (<div>
      <button className={styles.button} onClick={this._handleClick.bind(this)}>下一页{this.state.text}</button>
      <Child onClick={this.onPress.bind({a: 1})}></Child>
    </div>)
  }
}
