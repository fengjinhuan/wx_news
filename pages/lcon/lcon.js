// pages/lcon/lcon.js
var WxParse = require('../../utils/wxParse.js');
   
Page({
  data:{
    article:{}

  },
  onLoad:function(options){
    var that=this
    // 页面初始化 options为页面跳转所带来的参数
    var showid= options.id;
    console.log(showid)
      wx.request({
      url: 'http://news-at.zhihu.com/api/4/news/'+showid, //仅为示例，并非真实的接口地址
      header: {
          'content-type': 'application/json'
      },
      success: function(res) {
        var article=res.data.body;
        var kk=WxParse.wxParse('article', 'html', article, that);
        that.setData({
                article:kk
          })
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