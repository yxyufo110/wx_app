import Taro from '@tarojs/taro'
import api from '../../services/api'

export default class Login {
  login() {
    // 待处理
    Taro.login().then(res=>{
      console.log('res',res)
      api.authorization(res.code).then(r=>{
        console.log('r',r)
        Taro.getSetting().then(res1=>{
          console.log('res1',res1)
          if (res1.authSetting['scope.userInfo']) {
            Taro.getUserInfo().then(res2=>{
              console.log('res2',res2)
              const pa = res2.userInfo
              pa.thirdSession = r.data
              api.updateUserInfo(pa)
            }).catch(err2=>{
              console.log('err2',err2)
            })
          } else {
            Taro.authorize({
              scope:'scope.userInfo'
            }).then(res3=>{
              console.log('res3',res3)
            }).catch(err3=>{
              console.log('err3',err3)
            })
          }
        }).catch(err1=>{
          console.log('err1',err1)
        })
      }).catch(err2=>{
        console.log('err2',err2)
      })
    }).catch(err=>{
      console.log('err',err)
    })
  }

}
