// pages/home/home.js
//getApp()获取App()产生的示例对象
const app = getApp()
const name = app.globalData.name
const age = app.globalData.age
//注册一个页面
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: '忽然你',
    age: 23,
    movies: ['a', 'b', 'c', 'd'],
    students: [{
        id: 110,
        name: 'a',
        age: 12
      },
      {
        id: 110,
        name: 'b',
        age: 13
      }
    ],
    counter: 0,
    list:''
  },
  //获取用户授权
  handleGetUserInfo(event) {
    console.log(event)
  },
  handleBtnClick() {
    // this.data.counter+=1;
    // console.log('按钮发生了点击');
    // console.log(this.data.counter);

    /**
     * 下面是正确的写法
     */

    this.setData({
      counter: this.data.counter += 1
    });
  },
  handlerSubtraction() {
    this.setData({
      counter: this.data.counter - 1
    });
  },
  /**
   * 滚动监听
   * @param  obj 
   */
  onPageScroll(obj){
    console.log(obj)
  },
  



  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      console.log("onLoad")
      wx.request({
        url: 'http://localhost:21999/extinguisher/dDeviceFire/deviceDetails?mac=046b68a1df7c',
        success:(res)=>{
          console.log(res)
          console.log(res.data.data.gpsLocation)
          const data = res.data.data
          this.setData({
            list:data
          })
        }
      })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
      console.log("onReady")
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
      console.log("监听用户下拉动作")
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log("页面滚动到底部")
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  /**
   * 点击tabbar时触发
   */
  onTabItemTap(){

  }
})