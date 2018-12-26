import Taro, { Component } from '@tarojs/taro'
import { View, Text, } from '@tarojs/components'
import { AtSearchBar, AtIcon, } from 'taro-ui'
// import api from '../../services/classManager'
import './index.less'

export default class Index extends Component {
  constructor() {
    super(...arguments)
    this.state = {
      searchVal: '',
    }
  }

  config = {
    navigationBarTitleText: '班级管理',
  }


  componentWillMount() {
    // api.getAllCourse().then(res=> {
    //   this.setState({
    //     selector:res.data
    //   })
    // })
  }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  changeSearch = (e) => {
    this.setState({
      searchVal: e
    })
  }
  // pressModal = () => {
  //   this.setState({
  //     showModal: !this.state.showModal
  //   })
  // }

  // changeInput = (k, v) => {
  //   this.setState({
  //     [k]: v
  //   })
  // }
  // changeClass = (e) => {
  //   this.setState({
  //     selectorChecked: this.state.selector[e.detail.value]
  //   })
  // }

  // addCourse = () => {
  //   const { cname,selectorChecked } = this.state
  //   if(!cname || !selectorChecked.id) {
  //     return Taro.showToast({
  //       title: '请输入完整信息',
  //       icon: 'none',
  //       duration: 2000
  //     })
  //   }
  //   api.addCourse({
  //     name: cname,
  //     cid: selectorChecked.id
  //   }).then(() => {
  //     this.pressModal()
  //     Taro.showToast({
  //       title: '添加成功',
  //       icon: 'success',
  //       duration: 2000
  //     })
  //   })
  // }
  addClass = () => {
    Taro.navigateTo({
      url: '/pages/addClass/index'
    })
  }
  render() {
    const { searchVal, } = this.state
    return (
      <View className='classManage'>
        <AtSearchBar
          value={searchVal}
          onChange={this.changeSearch}
          placeholder='搜索班级'
        />
        <View className='add-box'>
          <View className='add-btn' onClick={this.addClass}>
            <AtIcon value='add' size='14' color='#ffffff'></AtIcon>&nbsp;&nbsp;添加班级</View>
        </View>
        <View className='cell'>
          <View className='title'>我是班级名称</View>
          <View className='desc'>
            <Text className='count'>24个学生</Text>
            <Text className='j'>|</Text>
            <Text className='timer'>创建时间：2018-09-07</Text>
          </View>
        </View>
        {/* 弹穿 */}
        {/* <AtModal isOpened={showModal}>
          <AtModalHeader>添加班级</AtModalHeader>
          <AtModalContent>
          <AtInput
            name='class'
            type='text'
            placeholder='班级名称'
            value={cname}
            onChange={this.changeInput.bind(this, 'cname')}
            className='name'
          />
          <View>
              <Picker mode='selector' range={this.state.selector} onChange={this.changeClass} rangeKey='name'>
                <View className='picker'>
                  {selectorChecked.name || '课程'}
                </View>
              </Picker>
            </View>
          </AtModalContent>
          <AtModalAction> <Button style={{color:'#13BF79'}} onClick={this.addCourse}>确认</Button> <Button onClick={this.pressModal}>返回</Button></AtModalAction>
        </AtModal> */}
      </View>
    )
  }
}

