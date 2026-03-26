// pages/register/register.js
Page({
  data: {
    email: '',
    password: '',
    confirmPassword: ''
  },

  onEmailInput(e) {
    this.setData({ email: e.detail.value });
  },

  onPasswordInput(e) {
    this.setData({ password: e.detail.value });
  },

  onConfirmPasswordInput(e) {
    this.setData({ confirmPassword: e.detail.value });
  },

  handleRegister() {
    const { email, password, confirmPassword } = this.data;
    if (!email || !password || !confirmPassword) {
      wx.showToast({ title: 'Please fill all fields', icon: 'error' });
      return;
    }
    if (password !== confirmPassword) {
      wx.showToast({ title: 'Passwords do not match', icon: 'error' });
      return;
    }
    // TODO: Add registration logic here
    wx.showToast({ title: 'Registering...', icon: 'loading' });
    setTimeout(() => {
      wx.showToast({ title: 'Registration successful!', icon: 'success' });
      wx.navigateBack(); // Or navigate to login
    }, 1500);
  },

  goToLogin() {
    wx.navigateBack();
  }
});
