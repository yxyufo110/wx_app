import http from '../utils/http'

const orgLogin = (params) => http.post('/user/login',params)

export default { orgLogin }

