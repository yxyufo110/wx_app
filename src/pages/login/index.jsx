import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtForm, AtInput, AtButton, AtMessage } from 'taro-ui'
import api from '../../services/login'
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


  componentWillMount() {
  }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  changeInput = (k, v) => {
    this.setState({
      [k]: v
    }, () => {
      this.validates()
    })
  }

  validates = () => {
    const { usr, pwd } = this.state
    const v = new RegExp('^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,}$').test(pwd)
    this.setState({
      validate: (usr && pwd && v) ? true : false
    })
  }

  joinUs = () => {
    Taro.navigateTo({
      url: '/pages/joinUs/index'
    })
  }

  onSubmit = () => {
    const { usr, pwd } = this.state
    const p = {
      mobile: usr,
      password: pwd
    }
    api.orgLogin(p).then(res => {
      Taro.setStorageSync('token', res.data.token)
      Taro.atMessage({
        message: '登录成功',
        type: 'success',
      })
      Taro.redirectTo({
        url: '/pages/classManage/index'
      })
    }).catch(err => {
      console.log('err', err)
    })
  }

  render() {
    return (
      <View className='login'>
        <AtMessage />
        <AtForm
          onSubmit={this.onSubmit}
        >
          <AtInput
            name='value'
            type='text'
            placeholder='账号'
            value={this.state.usr}
            onChange={this.changeInput.bind(this, 'usr')}
          />
          <AtInput
            name='value'
            type='password'
            placeholder='密码'
            value={this.state.pwd}
            onChange={this.changeInput.bind(this, 'pwd')}
          />
          <View className='tips'>{this.state.errMeg}</View>
          <AtButton formType='submit'
            disabled={!this.state.validate}
            customStyle={{
              color: '#FFFFFF',
              backgroundColor: '#13BF79',
              fontSize: '18Px'
            }}
          >提交</AtButton>
        </AtForm>
        <View className='organization' onClick={this.joinUs}>
          机构入驻
        </View>
      </View>
    )
  }
}
