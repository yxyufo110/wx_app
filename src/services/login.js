import http from '../utils/http'

const orgLogin = (params) => http.post('/education-user/user/login',params)
const joinUs = (params) => http.post('/education-org/org/add',params)

export default { orgLogin, joinUs }

