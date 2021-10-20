//创建app实例的代码以及一些全局相关的内容
  App({
    globalData:{
      token:''
    },
    /**
     * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
     */
    onLaunch: function () {
       wx.checkSession({
        success: (res) => {
          console.log('处于登陆状态')
        },
        fail:(res=>{
          console.log('处于退出状态')

        })
      })
      const token = wx.getStorageSync('token')
      if (token && token.length!=0){
          //验证token是否过期
        this.check_token(token)
        
      }else{
        this.login()
      }
    
    },
    check_token(token){
      wx.request({
        url: 'url',
        method:'POST',
        header:{
          token
        },
        success:function(res){
          if(!res.data.errCode){
            this.globalData.token=token;
          }else{
              this.login();
          }
          
        },
        fail:function(err){
          console.log(err)
        }
      })
    },
    login(){
      wx.login({
        //code 五分钟有效期
        timeout: 3000,
        success:(res)=>{
           const code = res.code
           wx.request({
           
             url: 'http://localhost:21999/extinguisher/wx/findOpenId/'+code,
             success:(res)=>{
              const token =JSON.parse(res.data.data).session_key
              console.log(token)
              this.globalData.token=token
              wx.setStorageSync('token', token)
             }
           })
        }
      })
    },
  
    /**
     * 当小程序启动，或从后台进入前台显示，会触发 onShow
     */
    onShow: function (options) {
      
    },
  
    /**
     * 当小程序从前台进入后台，会触发 onHide
     */
    onHide: function () {
      
    },
  
    /**
     * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
     */
    onError: function (msg) {
      console.log(msg);
    }
  })
  