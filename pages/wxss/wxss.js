// pages/wxss/wxss.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    age:23,
    nowTime:new Date().toLocaleString(),
    isActive:false,
    isShow:false,
    score:45,
    movies:['a','b'],
    nums:[
      [1,2,3,4,5],
      [6,7,8,9,0],
      [1,2,3,4,5]
    ],
    letters:['a','b','c','d'],
    price:"23.6"
  },
  handleSwitchColor(){
    console.log("====")
    this.setData({
      isActive: !this.data.isActive
    })
  },
  handleSwitchColor2(){
    console.log("====")
    this.setData({
      isShow: !this.data.isShow
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
        setInterval(() => {
            this.setData({
              nowTime:new Date().toLocaleString()
            })
        }, 1000);
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

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})