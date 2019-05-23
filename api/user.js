import { get, post } from '../common/request'

const getUserInfo = params => get('user/getUserInfo', params)

const updateUserInfo = params => post('users/updateUserInfo', params)

export default {
  getUserInfo,
  updateUserInfo
}