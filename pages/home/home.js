// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  handleBtnClick(){
    console.log('按钮发生点击')
  },
  handleTouchStart(){
      console.log("手指触摸");
  },
  hanldeTouchMove(){
    console.log("手指移动");

  },
  handleTouchEnd(){
    console.log("手指离开");

  },
  handleLongPress(){
      console.log("手指停留")
  },
  handleTap(){
      console.log("handleTap")
  },
  handleEventClick(event){
    console.log(event)
 console.log("handleEventClick");
  },
  handlebindtouchendEventClick(event){
    console.log(event)
  },

  handleInner(event){
  console.log(event)
  },
  handleOuter(event){
 console.log(event)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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