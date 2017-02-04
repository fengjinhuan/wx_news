// pages/list/list.js
var app = getApp()
Page({
  data:{
    zz:[],
    bb:'',
    cc:''
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    var listid=options.id
    var that=this;
    wx.request({
      url: 'http://news-at.zhihu.com/api/4/theme/'+listid, //仅为示例，并非真实的接口地址
      header: {
          'content-type': 'application/json'
      },
      success: function(res) {
        var aa=res.data.stories;
        var bb=res.data.description;
        var cc=res.data.background;
         that.setData({
          zz:aa,
          bb:bb,
          cc:cc
          })
          console.log(that.data.cc)
      }   
    })
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
})