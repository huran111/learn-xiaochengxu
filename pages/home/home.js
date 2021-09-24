// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
        name:'忽然你',
        age:23,
        movies:['a','b','c','d'],
        students:[
          {id:110,name:'a',age:12},
          {id:110,name:'b',age:13}
        ],
        counter:0
  },
 
  handleBtnClick(){
      // this.data.counter+=1;
      // console.log('按钮发生了点击');
      // console.log(this.data.counter);

      /**
       * 下面是正确的写法
       */
   
      this.setData({
        counter:this.data.counter+=1
      });
  },
  handlerSubtraction(){
    this.setData({
      counter:this.data.counter-1
    });
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