Component({
    //定义组件的配置选项
    options:{
      multipleSlots:true
    },
    //外界给组件传入额外的样式
    externalClasses:[],

    observers:{
      counter:function(newVal){
          console.log(newVal)
      }
    },
    //可以监听属性的改变

    //传入定义的属性  可以给组件传入数据
    properties:{ 
          title:{
            type:String,
            value:'',
            observer:function(newVal,oldVal){

            }
          }
    },
    //定义组件内部初始化数据
    data:{
        counter:0
    },
    //定义组件内部的函数
    methods:{

    },
    
    //组件的声明周期
    //1监听页面的声明周期
    pageLifetimes:{
        show(){
          console.log("组件所在页面显示出来")
        },
        hide(){
          console.log('组件所在页面隐藏起来')
        },
        resize(){
          console.log("监听页面尺寸改变")
        }
    },
    //2监听组件本身声明周期
    lifetimes:{
      created(){
        console.log("组件创建")
      },
      attached(){
        console.log("组件添加到页面")

      },
      ready(){
        console.log("组件渲染")
      },
      moved(){
          console.log("组件移动")
      },
      detached(){
        console.log("组件删除")
      }
    }
})