import Taro from '@tarojs/taro'
import apiConfig from './apiConfig'


// 后端是否支持json格式
// const contentType = 'application/x-www-form-urlencoded'
const contentType = 'application/json'

export default class Http {

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
      try {
        const res = await Taro.request({
          url: `${apiConfig.baseUrl}${url}`,
          method,
          data,
          header: {
            'content-type': contentType
          }
        })
        Taro.hideNavigationBarLoading()
        switch (res.statusCode) {
          case 200:
            return resolve(res.data)
          default:
            reject(new Error(res.data.msg))
        }
      } catch (error) {
        Taro.hideNavigationBarLoading()
        reject(new Error('网络请求出错'))
      }
    })
  }
}
