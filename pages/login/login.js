// pages/login/login.js
Page({
  data: {
    email: '',
    password: '',
  },

  onEmailInput(e) {
    this.setData({ email: e.detail.value });
  },

  onPasswordInput(e) {
    this.setData({ password: e.detail.value });
  },

  handleLogin() {
    const { email, password } = this.data;
    if (!email || !password) {
      wx.showToast({ title: 'Please fill all fields', icon: 'error' });
      return;
    }
    // TODO: Add real login logic here
    wx.showToast({ title: 'Logging in...', icon: 'loading' });
    setTimeout(() => {
      wx.showToast({ title: 'Login success!', icon: 'success' });
      // Navigate to main page or dashboard
    }, 1500);
  },

  goToRegister() {
    wx.navigateTo({ url: '/pages/register/register' });
  }
});

