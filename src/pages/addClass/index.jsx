import Taro, { Component } from '@tarojs/taro'
import { View, Picker, Text, Button } from '@tarojs/components'
import { AtInput, AtIcon, AtTextarea } from 'taro-ui'
import api from '../../services/classManager'
import './index.less'

export default class Index extends Component {
  constructor() {
    super(...arguments)
    this.state = {
      name: '',
      remark: '',
      selector: [{
        name: 'xx',
        id: 1,
      }, {
        id: 2,
        name: 'yy'
      }],
      selectorChecked: '',
    }
  }

  config = {
    navigationBarTitleText: '添加班级',
  }


  componentWillMount() {
    api.getAllCourse().then(res => {
      this.setState({
        selector: res.data
      })
    })
  }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  changeInput = (k, v) => {
    this.setState({
      [k]: v
    })
  }
  changeClass = (e) => {
    this.setState({
      selectorChecked: this.state.selector[e.detail.value]
    })
  }

  addCourse = () => {
    const { cname, selectorChecked, remark } = this.state
    if (!cname || !selectorChecked.id || !remark) {
      return Taro.showToast({
        title: '请输入完整信息',
        icon: 'none',
        duration: 2000
      })
    }
    api.addCourse({
      name: cname,
      cid: selectorChecked.id,
      remark: remark
    }).then(() => {
      this.pressModal()
      Taro.showToast({
        title: '添加成功',
        icon: 'success',
        duration: 2000
      })
    })
  }
  addClass = () => {
    Taro.navigateTo({
      url: '/pages/addClass/index'
    })
  }
  render() {
    const { name, selectorChecked, remark } = this.state
    return (
      <View className='addClass'>
        <AtInput
          name='name'
          title='班级名称'
          type='text'
          placeholder='请输入班级名称'
          value={name}
          onChange={this.handleChange.bind(this, 'name')}
        />

        <Picker mode='selector' range={this.state.selector} onChange={this.changeClass} rangeKey='name'>
          <View className='picker'>
            <Text className='lb'>选择课程</Text>
            <AtIcon customStyle={{
              float: 'right',
              marginLeft: '10Px'
            }} value='chevron-down' size='24' color='#2A2A2A'
            ></AtIcon>
            <Text className='result'>{selectorChecked.name || '请选择'}</Text>
          </View>
        </Picker>
        <View className='remark'>
          <View>备注</View>
          <AtTextarea
            value={remark}
            onChange={this.handleChange.bind(this, 'remark')}
            placeholder='请填写备注'
          ></AtTextarea>
        </View>
        <Button className='save' onClick={this.addCourse}>保存</Button>
      </View>
    )
  }
}

