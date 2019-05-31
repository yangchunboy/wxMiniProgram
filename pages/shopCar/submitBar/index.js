import Big from 'big.js'

Component({

  behaviors: [],

  // 属性定义（详情参见下文）
  properties: {
    productList: {
      type: Array,      
    }
  },
  data: {
    totalPrice: 0,
    isAllSelected: false
  }, // 私有数据，可用于模板渲染
  observers: {
    'productList': function(productList) {
      let total = 0
      let selectedAmount = 0
      let isAllSelected = false
      productList.forEach((item) => {
        if (item.selected) {
          const price = new Big(item.price).times(item.amount)
          total = new Big(total).plus(price)
          selectedAmount++
        }
      })
      if (selectedAmount === productList.length) {
        isAllSelected = true
      }
      return this.setData({
        totalPrice: parseFloat(total.toFixed(2), 10) * 100,
        isAllSelected,
      })
    }
  },
  lifetimes: {
    // 生命周期函数，可以为函数，或一个在methods段中定义的方法名
    created() {
      console.log(this.properties)
    },
    attached() { },
    ready() {},
    moved() { },
    detached() { },
    error() { }
  },
  // computed: {
  //   barData() {
  //     console.log(this)
  //     const { productList } = this.properties
  //     let total = 0
  //     let selectedAmount = 0
  //     let isAllSelected = false
  //     productList.forEach((item) => {
  //       if (item.selected) {
  //         const price = new Big(item.price).times(item.amount)
  //         total = new Big(total).plus(price)
  //         selectedAmount++
  //       }
  //     })
  //     if (selectedAmount === productList.length) {
  //       isAllSelected = true
  //     }
  //     return this.setData({
  //       totalPrice: parseFloat(total.toFixed(2), 10) * 100,
  //       isSelectedAll,
  //     })
  //   }
  // },

  pageLifetimes: {
    // 组件所在页面的生命周期函数
    show() { },
    hide() { },
    resize() { },
  },

  methods: {
    add(e) {
      console.log(this)
      this.triggerEvent('add', e.currentTarget.dataset.product);
    },
    reduce(e) {
      this.triggerEvent('reduce', e.currentTarget.dataset.product);
    },
    select(e) {
      this.triggerEvent('select', e.currentTarget.dataset.product);
    },
    selectAll(e) {
      this.triggerEvent('selectAll', e.currentTarget.dataset.selected);
    }
  }

})
