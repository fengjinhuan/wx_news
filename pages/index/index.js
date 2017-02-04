//index.js
var app = getApp()
Page({
  data: {
    lenx:0,
    leny:0,
    ox:0,
    oy:0,
    show:false,
    imgUrls: [
    
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 2000,
    duration: 500,
    title:[],
    con:[],
    top:[]
  },
  start:function(event){
    var lenx=event.changedTouches[0].clientX-event.currentTarget.offsetLeft;
    var leny=event.changedTouches[0].clientY-event.currentTarget.offsetTop;
    this.setData({
      lenx:lenx,
      leny:leny
    })
  },  
  onReady: function() {
    var that=this;
    wx.request({
      url: 'http://news-at.zhihu.com/api/4/themes', //仅为示例，并非真实的接口地址
      header: {
          'content-type': 'application/json'
      },
      success: function(res) {
        
        var arr1=res.data;
        that.setData({
          title:arr1.others
          })
      }
    }),
    wx.request({
      url: 'http://news-at.zhihu.com/api/4/news/latest', //仅为示例，并非真实的接口地址
      header: {
          'content-type': 'application/json'
      },
      success: function(res) {
       
        var cons=res.data.stories;
        var top=res.data.top_stories;
        console.log(top)
        that.setData({
          con:cons,
          top:top,
          imgUrls:top
          })
            console.log(that.data.imgUrls)
      }
    
    })
  },
  move:function(event){ 
    var ox=event.changedTouches[0].clientX-this.data.lenx;
    var oy=event.changedTouches[0].clientY-this.data.leny;
    if(ox<0){ox=0}
    if(oy<0){oy=0}
    this.setData({
      ox:ox,
      oy:oy
    }) 
  },
  showbtn:function(){
    var f=!this.data.show
      this.setData({
        show:f
      })
   },
   inshow:function(){
     wx.navigateTo({
        url: '../logs/logs'
      })
   }
})



