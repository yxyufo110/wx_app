import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.less'

export default class Index extends Component {
  constructor() {
    super(...arguments)
    this.state = {
      c: this.props.count,
    }
  }
  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  press = () => {
    this.setState({
      c:this.state.c + 1
    })
    this.props.onPressMe('我是News组件')
  }

  render () {
    const { name } = this.props
    return (
      <View className='index' onClick={this.press}>
        <Text>Hello,{name}</Text>
        <Text>你是第{this.state.c}次点击我</Text>
      </View>
    )
  }
}

