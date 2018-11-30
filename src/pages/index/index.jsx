import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import News from '../../components/news/index'
import api from '../../services/api'
import './index.less'

export default class Index extends Component {
  constructor() {
    super(...arguments)
    this.state = {
      num: 0,
      c: 0
    }
  }

  config = {
    navigationBarTitleText: '首页'
  }


  componentWillMount () {
  }

  componentDidMount () {
    api.login({
      id:1
    }).then(res=>{
      console.log('res',res)
    }).catch(err=>{
      console.log('err',err)
    })
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  pressNews = (e) => {
    console.log(e)
  }

  noComponents = () => {
    this.setState({
      c: this.state.c + 1
    })
  }

  render () {
    const { num,c } = this.state
    const name = '小伙子'
    return (
      <View className='index'>
        {/* 子父组件通讯 */}
        <News name={name} count={num} onPressMe={this.pressNews}></News>
        <View onClick={this.noComponents}>
          普通事件处理,点击次数{c}
        </View>
      </View>
    )
  }
}

