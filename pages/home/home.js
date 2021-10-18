// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      titles:['衣服','裤子','鞋子']
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

  handleItemClick(event){
    console.log(event)
    const dataset = event.currentTarget.dataset;
    const title = dataset.item;
    const index = dataset.index;
    console.log(title,index);
  },


  /**
   * 事件捕获和冒泡
   * 
   */
  handlerCaptureView1(){
    console.log('handlerCaptureView1')
  },
  handleBindView1(){
    console.log('handleBindView1')

  },
  handlerCaptureView2(){
    console.log('handlerCaptureView2')

  },
  handleBindView2(){
    console.log('handleBindView2')

  },
  handlerCaptureView3(){
    console.log('handlerCaptureView3')

  },
  handleBindView3(){
    console.log('handleBindView3')

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