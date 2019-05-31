Component({

  behaviors: [],

  // 属性定义（详情参见下文）
  properties: {
    product: {
      type: Object,
    }
  },

  data: {}, // 私有数据，可用于模板渲染

  lifetimes: {
    // 生命周期函数，可以为函数，或一个在methods段中定义的方法名
    created() {
      console.log(this)
    },
    attached() { },
    ready() {},
    moved() { },
    detached() { },
    error() { }
  },

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
    }
  }

})
