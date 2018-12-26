import Taro from '@tarojs/taro'
import apiConfig from './apiConfig'


const contentType = 'application/json'

 class Http {

  get(url, data) {
    return this.commonHttp('GET', url, data)
  }
  put(url, data) {
    return this.commonHttp('PUT', url, data)
  }
  delete(url, data) {
    return this.commonHttp('DELETE', url, data)
  }
  patch(url, data) {
    return this.commonHttp('PATCH', url, data)
  }
  post(url, data) {
    return this.commonHttp('POST', url, data)
  }

  async commonHttp(method, url, data) {
    return new Promise(async (resolve, reject) => {
      Taro.showNavigationBarLoading()
      const token = Taro.getStorageSync('token')
      try {
        const res = await Taro.request({
          url: `${apiConfig.baseUrl}${url}`,
          method,
          data,
          header: {
            'content-type': contentType,
            'Authorization': token || ''
          }
        })
        Taro.hideNavigationBarLoading()
        switch (res.statusCode) {
          case 200:
            if(!res.data.flag && res.data.code === 40001) {
              Taro.removeStorageSync('token')
              return Taro.redirectTo({
                url: '/pages/login/index'
              })
            }
            if(!res.data.flag) {
              return Taro.showToast({
                title: res.data.message,
                icon: 'none',
                duration: 2000
              })
            }
            return resolve(res.data)
          default:
            reject(new Error(res.data.msg))
        }
      } catch (error) {
        Taro.hideNavigationBarLoading()
        return Taro.showToast({
          title: '网络请求出错',
          icon: 'none',
          duration: 2000
        })
        // reject(new Error('网络请求出错'))
      }
    })
  }
}

const http = new Http();

export default http
