// bookinfo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    modify : false,
    bookid : '',
    bookcaption : '',
    books : []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    this.setData({
      books: (wx.getStorageSync('books') || [])
    })
    var id = options["id"]
    if (id == '-1') {
      that.setData({
        bookid: '',
        bookcaption : ''
      })
    }
    else {
      that.setData({
        modify : true,
        bookid: id,
        bookcaption: that.data.books[id].bookcaption
      })
    }
  },

  bindKeyInput: function(e) {
    this.setData({
      bookcaption: e.detail.value
    })
  },

 save : function(e){
   if (this.data.bookcaption ==''){
       wx.showModal({
         content: '名称不可为空',
         showCancel: false,
         success: function (res) {
           if (res.confirm) {
             console.log('用户点击确定')
           }
         }
       })
   }
   else{
     this.data.books.push(this.makelist(Date.now(), this.data.bookcaption));
     wx.setStorageSync('books', this.data.books)
     wx.navigateBack();
   }
 }
,
  deletebook : function(e){
    this.data.books.splice(this.data.bookid,1)
    wx.setStorageSync('books', this.data.books)
    wx.navigateBack();
},
update : function(e){
  this.data.books[this.data.bookid].bookcaption = this.data.bookcaption;
  wx.setStorageSync('books', this.data.books)
  wx.navigateBack();
},
 makelist(id, bookcaption) {
   return {
     bookid: id,
     bookcaption: bookcaption
   };
 },
})