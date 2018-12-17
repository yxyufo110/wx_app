import http from '../utils/http'

const getAllCourse = () => http.get('/education-org/schedule/findByOid')

const addCourse = (params) => http.post('/education-org/classes',params)

export default { getAllCourse,addCourse }

