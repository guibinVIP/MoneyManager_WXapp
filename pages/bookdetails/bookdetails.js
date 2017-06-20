// bookdetails.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
     detail_id : '',
     details : []
  },
  rebuiltdetail() {
    console.log('rebuiltdetail')
    this.setData({
      details: (wx.getStorageSync(this.data.detail_id) || [])
    })
    console.log(this.data.details)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var id = options["id"]
    this.setData({
      detail_id : id
    })
    //修改标题
    wx.setNavigationBarTitle({
      title: options["caption"],
      success: function () {
        console.log('setNavigationBarTitle success')
      },
      fail: function (err) {
        console.log('setNavigationBarTitle fail, err is', err)
      }
    })
    this.rebuiltdetail();
  },

  onShow: function () {
    this.rebuiltdetail();
  },

  newdetail:function(event){
    wx.navigateTo({
      url: '../detailinfo/detailinfo?id=' + '-1'
    });
  }
})