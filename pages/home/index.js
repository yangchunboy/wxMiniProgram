//index.js
//获取应用实例
import Utility from '../../common/util'


Page({
  data: {
    text: '老子是首页的data',
    now: Utility.formatTime(new Date()),
    parentText: '我是从父组件传过来的值'
  },
  onLoad(options) {
    // Do some initialize when page load.
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
  goDemo() {
    wx.navigateTo({
      url: '/pages/demo/index'
    })
  }
})
