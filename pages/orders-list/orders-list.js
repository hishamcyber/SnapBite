Page({
  data: {
    orders: [],
    noOrdersMessage: '',
  },

  // Called every time tab becomes visible
  onShow() {
    this.loadOrders();
  },

  loadOrders() {
    const orders = wx.getStorageSync('orders') || [];
    if (orders.length === 0) {
      this.setData({ orders: [], noOrdersMessage: 'No orders found.' });
      return;
    }
    this.setData({ orders, noOrdersMessage: '' });
  },

  goBack() {
    wx.navigateBack();
  }
});
