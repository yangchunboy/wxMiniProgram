//index.js
//获取应用实例

Page({
  data: {
    productList: [
      {
        _id: '1',
        name: '苹果',
        descrption: '我是苹果',
        amount: 1,
        price: 9.99,
        selected: false
      },
      {
        _id: '2',
        name: '杨梅',
        descrption: '仙居杨梅',
        amount: 2,
        price: 20,
        selected: false
      }
    ],
    totalPrice: 0,
    isAllSelected: false
  },
  add(e) {
    const product = e.detail
    const { productList } = this.data
    productList.forEach((item) => {
      if (product._id === item._id) {
        item.amount = item.amount + 1
      }
    })
    this.setData({
      productList
    })
  },
  reduce(e) {
    const product = e.detail
    if (product.amount === 1){
      return wx.showToast({
        title: '不能再减啦',
        icon: 'none',
        duration: 1000
      })
      
    }
    const { productList } = this.data
    productList.forEach((item) => {
      if (product._id === item._id) {
        item.amount = item.amount - 1
      }
    })
    this.setData({
      productList
    })
  },
  select(e) {
    const product = e.detail
    const { productList } = this.data
    productList.forEach((item) => {
      if (product._id === item._id) {
        item.selected = !item.selected
      }
    })
    this.setData({
      productList
    })
  },
  selectAll(e) {
    console.log(e)
    const isSelectedAll= e.detail
    const { productList } = this.data
    let selected = false
    if (!isSelectedAll) {
      selected = true
    }
    productList.forEach((item) => {
      item.selected = selected
    })
    this.setData({
      productList
    })
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
  }
})
