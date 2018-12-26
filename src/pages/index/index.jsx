import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import './index.less'

export default class Index extends Component {

  config = {
    navigationBarTitleText: ''
  }


  componentWillMount() {
    const a = Taro.getStorageSync('token')
    Taro.redirectTo({
        url: a ? '/pages/classManage/index' : '/pages/login/index'
    })
   }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }


  render() {
    return (
      <View className='index'>
      </View>
    )
  }
}

