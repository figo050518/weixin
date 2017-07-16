//index.js
//获取应用实例
var userList = [{ name: '梁校松', score: 4.5, like: 32, url: 'http://img0.imgtn.bdimg.com/it/u=1569549914,754506508&fm=26&gp=0.jpg' }, { name: '小吉米', score: 4.3, like: 2, url: 'http://img0.imgtn.bdimg.com/it/u=547230002,2392367038&fm=26&gp=0.jpg' }, { name: '张丹丹', score: 3.3, like: 24, url: 'http://img0.imgtn.bdimg.com/it/u=2136689372,336357562&fm=26&gp=0.jpg' }, { name: '梁校松', score: 4.5, like: 32, url: 'http://img0.imgtn.bdimg.com/it/u=1569549914,754506508&fm=26&gp=0.jpg' }, { name: '小吉米', score: 4.3, like: 2, url: 'http://img0.imgtn.bdimg.com/it/u=547230002,2392367038&fm=26&gp=0.jpg' }, { name: '张丹丹', score: 3.3, like: 24, url: 'http://img0.imgtn.bdimg.com/it/u=2136689372,336357562&fm=26&gp=0.jpg' }];

var app = getApp()
Page({
  data: {
    userList: userList,
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ]
  },
  btn_tab: function(e){
    this.setData({activeId:e.currentTarget.dataset.id});
    userList.reverse();
    this.setData({ userList: userList});
  },
  btn_mine: function(e){
    wx.navigateTo({
      url: '../mine/mine',
    })
  },
  previewImage: function (e) {
    var that=this;
    wx.previewImage({
      //当前显示下表
      current: 'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg',
      //数据源
      urls: this.data.imgUrls,
    })
  },
  onLoad: function () {
    var labs = [{ id: 1, name: '大叔' }, { id: 2, name: '不抽烟' }, { id: 3, name: '有耐心' }, { id: 4, name: '幽默风趣' }, { id: 5, name: '细节控' }, { id: 6, name: '小鲜肉' }];
    this.setData({activeId: labs[0].id,labs:labs});
  }
})
