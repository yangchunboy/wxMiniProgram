import { HOST } from './config'

const request = ({ route, params, method }) => {
  const url = `${HOST}/api/${route}`
  return wx.request({
    url,
    method,
    data: params,
    header: { 'Content-Type': 'application/json' }
  })
}

export const get = async (route, params) => {
  const result = await request({ route, params, method: 'GET' })
  return result
}

export const post = async (route, params) => {
  const result = await request({ route, params, method: 'POST' })
  return result
}