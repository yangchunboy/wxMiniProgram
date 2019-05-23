
const INIT_USER = 'user/INIT_USER'
const UPDATE_USER = 'user/UPDATE_USER'

export const userInit = (userInfo) => {
  return {
    type: INIT_USER,
    payload: userInfo
  }
}

export const userUpdate = (userInfo) => {
  return {
    type: UPDATE_USER,
    payload: userInfo
  }
}

const initState = {
  userInfo: {
    name: '张三',
    age: 18
  }
}

export default (state = initState, action) => {
  const { type, payload } = action
  switch (type) {
    case INIT_USER:
      return Object.assign({}, state, { userInfo: payload })
    case UPDATE_USER:
      return Object.assign({}, state, { userInfo: payload })
    default:
      return state
  }
}
