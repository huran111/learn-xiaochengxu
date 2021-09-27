//创建app实例的代码以及一些全局相关的内容  全局共享 单例
new App({

  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function () {
    //网络请求 获取用户信息
    wx.getUserInfo({
      success: function (res) {
        console.log(res.userInfo.nickName)
        console.log(res)
      }
    })

    console.log('小程序完成了初始化')
  },

  /**
   * 当小程序启动，或从后台进入前台显示，会触发多次 onShow
   */
  onShow: function (options) {
    console.log("当小程序启动，或从后台进入前台显示，会触发")
    console.log(options)
    switch (options.scene) {
      case 1001:
        console.log("1001");
      default:
        console.log("============");
    }
    wx.getUserInfo({
      success: function(res){
        console.log(res)
      }
    })
  },

  /**
   * 当小程序从前台进入后台，会触发 onHide
   * 后台存货2个小时
   */
  onHide: function () {
    console.log('当小程序从前台进入后台，会触发');
  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function (msg) {
    console.log('当小程序发生脚本错误，或者')
  },
  /**
   * 全局的数据
   */
  globalData:{
    name:'huran',
    age:18
  }
})