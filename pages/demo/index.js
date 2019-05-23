import { userUpdate } from '../../store/index'

Page({
  data: {
    text: '这是demo页面',
    userInfo: {
      name: '李四',
      age: 12
    }
  },
  onLoad(options) {
    // Do some initialize when page load.
    console.log(wx.$store.getState())
  },
  onReady() {
    // Do something when page ready.
  },
  onShow() {
    // Do something when page show.
  },
  onHide() {
    // Do something when page hide.
  },
  onUnload() {
    // Do something when page close.
  },
  onPullDownRefresh() {
    // Do something when pull down.
  },
  onReachBottom() {
    // Do something when page reach bottom.
  },
  onShareAppMessage() {
    // return custom share data when user share.
  },
  onPageScroll() {
    // Do something when page scroll
  },
  onResize() {
    // Do something when page resize
  },
  onTabItemTap(item) {
    console.log(item.index)
    console.log(item.pagePath)
    console.log(item.text)
  },
  changeUser() {
    const userInfo = {
      name: '王五',
      age: 22
    }
    wx.$store.dispatch(
      userUpdate(userInfo)
    )
  },
  printState() {
    console.log(wx.$store.getState())
  },
  customData: {
    hi: 'MINA'
  }
})