Page({
  data: {
    product: null,
    quantity: 1,
    totalPrice: 0
  },

  onLoad(options) {
    let product = null;

    if (options.product) {
      try {
        product = JSON.parse(decodeURIComponent(options.product));
      } catch (e) {
        console.error("Failed to parse product from options:", e);
      }
    }

    if (!product) {
      wx.showToast({
        title: 'Product not found',
        icon: 'error',
        duration: 1500
      });
      wx.navigateBack();
      return;
    }

    const totalPrice = (product.price * this.data.quantity).toFixed(2);

    this.setData({
      product,
      totalPrice
    });
  },

  increaseQty() {
    this.updateQuantity(this.data.quantity + 1);
  },

  decreaseQty() {
    const newQty = Math.max(1, this.data.quantity - 1);
    this.updateQuantity(newQty);
  },

  updateQuantity(newQty) {
    const totalPrice = (this.data.product.price * newQty).toFixed(2);
    this.setData({
      quantity: newQty,
      totalPrice
    });
  },

  addToCart() {
    const { product, quantity } = this.data;
    const cart = wx.getStorageSync('cart') || [];

    const index = cart.findIndex(item => item.id === product.id);
    if (index !== -1) {
      cart[index].quantity += quantity;
    } else {
      cart.push({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        quantity
      });
    }

    wx.setStorageSync('cart', cart);

    wx.showToast({
      title: 'Added to cart',
      icon: 'success',
      duration: 1500
    });

  },

  goToCart() {
    wx.switchTab({
      url: '/pages/cart/cart'
    });
  }
});
