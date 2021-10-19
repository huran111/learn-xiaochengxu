Component({
 
 properties:{
   titles:{
     type:Array,
     value:[]
   }
 },
 data:{
    currentIndex:0
 },
 methods:{
  handleItemClick(event){
    console.log(event)
    const index =event.currentTarget.dataset.index;
    this.setData({
      currentIndex:index
    })
    //通知页面内部的点击事件
    this.triggerEvent('itemClick',{index,title:this.properties.titles[index]},{})
  }

 }
})