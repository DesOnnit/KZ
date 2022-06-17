import { create } from 'apisauce'

const api = create({
  baseURL: 'https://lzone.secret-agents.ru/api/v2'
})
export const auth = (email, password) => {
  return api.post('/auth/sign_in', { email, password })
}
export const news = () => {
  return api.get('/news')
}
export const oneNews = (id) => {
  return api.get(`/news/${id}`)
}
export const requestTransform = (data) => {
  if (data) {
    api.addRequestTransform(request => {
      request.headers['access-token'] = data.accessToken
      request.headers['client'] = data.client
      request.headers['uid'] = data.uid
    })
  }
}
