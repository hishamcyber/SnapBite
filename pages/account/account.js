// pages/account/account.js
Page({
  goToLogin() {
    wx.navigateTo({ url: '/pages/login/login' });
  },

  goToRegister() {
    wx.navigateTo({ url: '/pages/register/register' });
  },
});
