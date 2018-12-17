import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtForm, AtInput, AtButton,AtMessage } from 'taro-ui'
import api from '../../services/login'
import './index.less'

export default class Index extends Component {
  constructor() {
    super(...arguments)
    this.state = {
      name: '',
      phone: '',
      validate: false,
      errMeg: '请留下您的联系方式，稍后会有客服人员联系'
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

  changeInput = (k, v) => {
    this.setState({
      [k]: v
    }, () => {
      this.validates()
    })
  }

  validates = () => {
    const { name, phone } = this.state
    const v = new RegExp('^((13[0-9])|(14[5,7])|(15[0-3,5-9])|(17[0,3,5-8])|(18[0-9])|166|198|199|(147))\\d{8}$').test(phone)
    this.setState({
      validate: (name && v ) ? true : false
    })
  }

  onSubmit = () => {
    const { name, phone } = this.state
    const p = {
      name: name,
      phone: phone
    }
    api.joinUs(p).then(res=>{
      if(!res.flag) {
        this.setState({
          validate: false,
          errMeg: res.message
        })
      } else {
        Taro.atMessage({
          message: '增加成功',
          type: 'success',
        })
      }
    }).catch(err=>{
      console.log(err)
    })
  }

  render() {
    return (
      <View className='joinUs'>
        <AtMessage />
        <AtForm
          onSubmit={this.onSubmit}
        >
          <AtInput
            name='value'
            type='text'
            placeholder='机构名称'
            value={this.state.name}
            onChange={this.changeInput.bind(this, 'name')}
          />
          <AtInput
            name='value'
            type='text'
            placeholder='联系电话'
            value={this.state.phone}
            onChange={this.changeInput.bind(this, 'phone')}
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
      </View>
    )
  }
}

