//app.js
import { createStore } from 'chuck-wx-redux'

App({
  onLaunch(options) {
    // Do something initial when launch.
    console.log(createStore)
  },
  onShow(options) {
    // Do something when show.
  },
  onHide() {
    // Do something when hide.
  },
  onError(msg) {
    console.log(msg)
  },
  globalData: 'I am global data'
})