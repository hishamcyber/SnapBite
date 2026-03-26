Page({
  data: {
    cart: [],
    totalPrice: 0 // Keep as number internally for calculation
  },

    // Triggered every time the page becomes visible
    onShow() {
      this.loadCart();
    },

    goBack() {
      wx.navigateBack();
    },
    
  loadCart() {
    const cart = wx.getStorageSync('cart') || [];
    let totalPrice = 0;
    cart.forEach(item => {
      totalPrice += item.price * item.quantity;
    });
    this.setData({
      cart,
      totalPrice: parseFloat(totalPrice.toFixed(2)) // store as number
    });
  },

  removeFromCart(e) {
    const id = e.currentTarget.dataset.id;
    let cart = this.data.cart.filter(item => item.id !== id);
    wx.setStorageSync('cart', cart);
    this.loadCart();
  },

  placeOrder() {
    const cart = this.data.cart;
    if (cart.length === 0) {
      wx.showToast({ title: 'Cart is empty', icon: 'error' });
      return;
    }
  
    const totalPrice = this.data.totalPrice;
    const orders = wx.getStorageSync('orders') || [];
  
    const newOrder = {
      id: Date.now().toString(),
      date: new Date().toLocaleString(),
      items: cart,
      totalPrice,
    };
  
    orders.push(newOrder);
    wx.setStorageSync('orders', orders);
  
    // IMPORTANT: Do NOT clear cart here!
  
    wx.showToast({ title: 'Proceed to payment', icon: 'success', duration: 1500 });
  
    wx.navigateTo({
      url: `/pages/payment/payment`,
    });
  },

});
