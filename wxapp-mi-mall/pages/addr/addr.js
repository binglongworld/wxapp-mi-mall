// pages/address/address.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    receiverName: "",
    mobile: "",
    addressDetail: "",
    postCode: "",
    isDisabled: false,
    isComplete: false,
    buttonTitle: "保存"
  },
  formSubmit(e) {
    const addrInfo = e.detail.value;
    let {receiverName,mobile,addressDetail,postCode}=addrInfo;
    if(receiverName==""||mobile==""||addressDetail==""||postCode==""){
      this.data.isComplete=false;
      wx.showModal({
        title:"提示",
        content:"请完善信息",
        showCancel:false
      }); 
    }else{
      this.data.isComplete=true;
      wx.setStorageSync('addrInfo', addrInfo);
      
    }
    this.setData({
        isDisabled: true,
        isComplete: this.data.isComplete
        // buttonTitle: "修改"
      });
  },
  updateAddr(e){
    this.setData({
      isDisabled:false,
      isComplete:false,
      buttonTitle: "保存"
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // let {receiverName,mobile,addressDetail,postCode}=addrInfo;
    // wx.setStorageSync('addrInfo', {receiverName,mobile,addressDetail,postCode});
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
    let addrInfo=wx.getStorageSync("addrInfo");
    console.log(addrInfo);
    let {receiverName,mobile,addressDetail,postCode}=addrInfo;
    // // console.log(username,phone,addr);
    this.setData({
      receiverName,
      mobile,
      addressDetail,
      postCode,
      isDisabled: true,
      isComplete:true,
      buttonTitle: "修改"
    });
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
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})