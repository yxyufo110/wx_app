import Http from '../utils/http'

const http = new Http()

const login = (data) => http.post('/login', data)

export default { login }

