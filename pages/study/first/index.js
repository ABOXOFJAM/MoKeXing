// pages/First/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    video_list:[
      { image:"",
        text:"静夜思",
        url:"https://vd4.bdstatic.com/mda-nc4dactz2g996u5i/hd/cae_h264_delogo/1646472327192875366/mda-nc4dactz2g996u5i.mp4?v_from_s=hkapp-haokan-nanjing&auth_key=1646625934-0-0-752bf0e2086bc6ca6b4b53a3e2efab3e&bcevod_channel=searchbox_feed&pd=1&cd=0&pt=3&logid=2134886622&vid=1423824285598663288&abtest=100815_2-17451_2&klogid=2134886622"}
      ]
  },
  /**
   * 跳转到视频页
   */
  toVideo(e){
    console.log(e.currentTarget.dataset.url)
    const URL = e.currentTarget.dataset.url
    wx.navigateTo({
      url: '../second/index?url='+URL
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   * 刷新
   */
  onReachBottom: function () {

  },

 
})