
import request from '../../services/network.js'
Page({

  handleShowToast(){
    wx.showToast({
      title: '你好啊',
      duration: 3000,
      icon:'loading',
      mask:true,
      success:function(){
        console.log('展示弹窗成功')
      },
      fail:function(){
        console.log("展示弹窗失败")
      },
      complete:function(){
        console.log("完成函数的调用");
      }
    })
  },
  handleShowModal(){
    wx.showModal({
      title: 'cancelColor',
      content:'我是内容',
      // showCancel:false,
      cancelText:'退出',
      cancelColor:'red',
      success:function(res){
        console.log(res)
        if(res.cancel){
          console.log('用户点击了取消按钮')
        }
        if(res.confirm){
          console.log('用户点击了确定按钮')
        }
      }
    })
  },
  handleShowLoading(){
    wx.showLoading({
      title: '加载ing',
      duration:1000,
      mask:true
    })
    setTimeout(() => {
      wx.hideLoading({
        success: (res) => {
          console.log(res)
        },
      })
    }, 1000);
   
  },
  handleShowAction(){
wx.showActionSheet({
  itemList: ['相册','拍照'],
  itemColor:'red',
  success:function(res){
    console.log(res)

  }
})
  },

 
  /**
   * 页面的初始数据
   */
  data: {
    title:'哈哈哈'
  },
  handlePushDetails(){
    wx.navigateTo({
      url: '/pages/details/details',
    })
    
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      //发送网络请求
      // wx.request({
      //   url: 'https://extinguisher.seawayos.com:8079/extinguisher/dDeviceFire/deviceDetails',
      //   method: 'GET',
      //   data:{
      //     mac:"d06a68a1df7c"
      //   },

      //   success:function(res){
      //     console.log(res.data.data.mac)
      //     console.log(res)
      //   },
      //   fail:function(err){
      //     console.log('-------------')
      //     console.log(err)
      //   }
        
      // })

        request({
          url:'https://extinguisher.seawayos.com:8079/extinguisher/dDeviceFire/deviceDetails',
          method:'GET',
          data:{
            mac:"d06a68a1df7c"
          }

        }).then(res=>{
            console.log(res)
        }).catch(err=>{
          console.log(err)
        })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },
  getUserInfo: function(e) {
  
    let that = this;
    // console.log(e)
    // 获取用户信息
    wx.getSetting({
      success(res) {
        // console.log("res", res)
        if (res.authSetting['scope.userInfo']) {
          console.log("已授权=====")
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称
          wx.getUserInfo({
            success(res) {
              console.log("获取用户信息成功", res)
              that.setData({
                name: res.userInfo.nickName
              })
            },
            fail(res) {
              console.log("获取用户信息失败", res)
            }
          })
        } else {
          console.log("未授权=====")
          that.showSettingToast("请授权")
        }
      }
    })
  },
  /**
   * 用户点击右上角分享
   */
  /**
   * 分享
   */
  onShareAppMessage:function(options){
    return {
      title:'你好啊',
      path:'/pages/home/home',
      imageUrl:'https://file02.16sucai.com/d/file/2014/0829/372edfeb74c3119b666237bd4af92be5.jpg'
    }
}
})