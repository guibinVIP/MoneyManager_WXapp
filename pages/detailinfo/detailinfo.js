// detailinfo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    modify: false,
    detail:[],
    detail_id : '',
    detail_caption : ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    var id = options["id"]
    if (id == '-1') {
      that.setData({
        detail_id: Date.now(),
        detail_caption: ''
      })
    }
    else {
      that.setData({
        modify: true,
        detail_id: id,
        detail_caption: that.data.detail[id].detail_caption
      })
    }
  },
  bindKeyInput: function (e) {
    this.setData({
      bookcaption: e.detail.value
    })
  },

  save: function (e) {
    if (this.data.bookcaption == '') {

    }
    else {
      this.data.books.push(this.makelist(Date.now(), this.data.bookcaption));
      wx.setStorageSync('books', this.data.books)
      wx.navigateBack();
    }
  }
  ,
  makelist(id, bookcaption) {
    return {
      bookid: id,
      bookcaption: bookcaption
    };
  },
})