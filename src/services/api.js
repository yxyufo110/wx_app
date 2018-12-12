import Http from '../utils/http'

const http = new Http()

const authorization = (param) => http.get(`/user/authorization/${param}`)

const updateUserInfo = (param) => http.post('/user/updateUserInfo', param)

export default { authorization,updateUserInfo }

