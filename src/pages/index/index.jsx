import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtForm, AtInput, AtButton } from 'taro-ui'
import './index.less'

export default class Index extends Component {
  constructor() {
    super(...arguments)
    this.state = {
      usr: '',
      pwd: '',
      validate: false,
      errMeg: ''
    }
  }

  config = {
    navigationBarTitleText: '登录'
  }


  componentWillMount() { }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  changeInput = (k,v) => {
    this.setState({
      [k]:v
    },() => {
      this.validates()
    })
  }

  validates = () => {
    const { usr,pwd } = this.state
    const v = new RegExp('^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,}$').test(pwd)
    this.setState({
      validate: (usr && pwd && v ) ? true : false
    })
  }

  onSubmit = () => {
    console.log(this.state)
  }

  render() {
    return (
      <View className='index'>
        <AtForm
          onSubmit={this.onSubmit}
        >
          <AtInput
            name='value'
            type='text'
            placeholder='账号'
            value={this.state.usr}
            onChange={this.changeInput.bind(this,'usr')}
          />
           <AtInput
             name='value'
             type='password'
             placeholder='密码'
             value={this.state.pwd}
             onChange={this.changeInput.bind(this,'pwd')}
           />
           <View className='tips'>{this.state.errMeg}</View>
          <AtButton formType='submit'
            disabled={!this.state.validate}
            customStyle={{
            color:'#FFFFFF',
            backgroundColor: '#13BF79',
            fontSize: '18Px'
          }}
          >提交</AtButton>
        </AtForm>
        <View className='organization'>
          机构入驻
        </View>
      </View>
    )
  }
}

