// books.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    books: []
  },
  rebuiltbooks() {
    console.log('rebuiltbooks')
    this.setData({
      books: (wx.getStorageSync('books') || [])
    })
    console.log(this.data.books)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.rebuiltbooks()
  },

  onShow: function () {
    this.rebuiltbooks()
  },

  newbook(event){
    wx.navigateTo({
      url: '../bookinfo/bookinfo?id=' + '-1'
    });
  },

  modifybook(event) {
    var that = this;
    console.debug(event)
    wx.navigateTo({
      url: '../bookinfo/bookinfo?id=' + event.currentTarget.id + '&caption="" '
    });
  },
    // 查看详情 
  showDetail(event) {
    var that = this;
    wx.navigateTo({
      url: '../bookdetails/bookdetails?id=' + that.data.books[event.currentTarget.id].bookid 
      + '&caption=' + that.data.books[event.currentTarget.id].bookcaption
    });
  }
})