Page({
  data: {
    cart: [],
    totalPrice: "0.00",
  },

  onShow() {
    this.loadCart();
  },

  loadCart() {
    const cart = wx.getStorageSync('cart') || [];

    if (cart.length === 0) {
      this.setData({ cart: [], totalPrice: "0.00" });
      return;
    }

    cart.forEach(item => {
      item.totalPriceFormatted = (item.price * item.quantity).toFixed(2);
    });

    const totalPrice = cart
      .reduce((sum, item) => sum + item.price * item.quantity, 0)
      .toFixed(2);

    this.setData({ cart, totalPrice });
  },

  handlePayment() {
    if (this.data.cart.length === 0) {
      wx.showToast({
        title: 'Cart is empty',
        icon: 'error',
        duration: 1500,
      });
      return;
    }
  
    wx.showLoading({ title: 'Processing Payment...' });
  
    setTimeout(() => {
      wx.hideLoading();
  
      const newOrder = {
        id: Date.now().toString(),
        date: new Date().toLocaleString(),
        items: this.data.cart,
        totalPrice: this.data.totalPrice,
      };
  
      // Save full order list for history (optional)
      const orders = wx.getStorageSync('orders') || [];
      orders.push(newOrder);
      wx.setStorageSync('orders', orders);
  
      // Temporarily save latest order for redirection
      wx.setStorageSync('latestOrder', newOrder);
  
      // Clear the cart storage now
      wx.setStorageSync('cart', []);
  
      wx.showToast({
        title: 'Payment Successful',
        icon: 'success',
        duration: 1500,
        success: () => {
          // Redirect only after toast success, to avoid interrupting UI updates
          wx.navigateTo({
            url: '/pages/orders/orders',
            success() { console.log('Redirected to orders page successfully'); },
            fail(err) { console.error('Redirect to orders failed:', err); }
          });
        }
      });
  
    }, 1500);
  },
  
  goToOrders(){
    wx.navigateTo({
      url: '/pages/orders/orders',
    })
  }
});
