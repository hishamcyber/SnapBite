Page({
  data: {
    order: null,
    noOrderMessage: ''
  },

  onLoad() {
    const latestOrder = wx.getStorageSync('latestOrder');
    if (latestOrder) {
      this.setData({ order: latestOrder });

      // ✅ Remove the order so it doesn't persist
      wx.removeStorageSync('latestOrder');
    } else {
      this.setData({ noOrderMessage: 'No recent order found.' });
    }
  },

  goBack() {
    wx.navigateBack();
  }
});
