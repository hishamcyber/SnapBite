// pages/home/home.js
Page({
  data: {
    banners: [
      { image: 'https://i.ibb.co/21yN8d3j/banner1.jpg' },
      { image: 'https://i.ibb.co/g1JsytS/banner2.jpg' },
    ],

    categories: [
      { id: 'meals', name: 'Meals', icon: 'https://i.ibb.co/VptYDTZD/noodles.png' },
      { id: 'snacks', name: 'Snacks', icon: 'https://i.ibb.co/Vprtggrr/ice-cream-cone.png' },
      { id: 'healthy', name: 'Healthy', icon: 'https://i.ibb.co/TDyXcrC3/rice-bowl.png' },
      { id: 'drinks', name: 'Drinks', icon: 'https://i.ibb.co/DH9hCBpY/lemonade.png' },
    ],

    featuredProductIds: [4, 9, 10, 19, 24, 58, 29, 27],
    featuredProducts: [],
    allProducts: [],
    
    selectedCategoryId: 'meals',
    selectedCategoryName: 'Meals',
    filteredProducts: [],
    
    // Search related data
    searchQuery: '',
    isSearching: false,
    searchResults: []
  },

  onLoad() {
    const app = getApp();
    const allProducts = app.globalData.allProducts || [];
    const featuredIds = this.data.featuredProductIds;

    // Get full featured products by ID
    const featuredProducts = featuredIds.map(id => 
      allProducts.find(p => p.id === id)
    ).filter(product => product !== undefined);

    // Filter by default selected category
    const selectedId = this.data.selectedCategoryId;
    const selectedCat = this.data.categories.find(c => c.id === selectedId);
    const filtered = allProducts.filter(p => p.category === selectedId);

    this.setData({
      allProducts: allProducts,
      featuredProducts: featuredProducts,
      selectedCategoryName: selectedCat ? selectedCat.name : '',
      filteredProducts: filtered
    });
  },

  updateFilteredProducts() {
    const selectedId = this.data.selectedCategoryId;
    const selectedCat = this.data.categories.find(cat => cat.id === selectedId);
    const filtered = this.data.allProducts.filter(prod => prod.category === selectedId);

    this.setData({
      selectedCategoryName: selectedCat ? selectedCat.name : '',
      filteredProducts: filtered
    });
  },

  onCategoryTap(e) {
    const categoryId = e.currentTarget.dataset.id;
    this.setData({ 
      selectedCategoryId: categoryId,
      searchQuery: '', // Clear search when changing category
      isSearching: false // Exit search mode
    }, () => {
      this.updateFilteredProducts();
    });
  },

  onProductTap(e) {
    const productId = e.currentTarget.dataset.id;
    const product = this.data.allProducts.find(p => p.id === productId);
    if (!product) {
      wx.showToast({ title: 'Product not found', icon: 'error' });
      return;
    }
    wx.navigateTo({
      url: '/pages/details/details?product=' + encodeURIComponent(JSON.stringify(product))
    });
  },

  goToCart() {
    wx.navigateTo({
      url: '/pages/cart/cart'
    });
  },

  // Handle search input
  onSearchInput(e) {
    this.setData({ searchQuery: e.detail.value });
  },

  // Handle search button click
  onSearch() {
    const query = this.data.searchQuery.trim().toLowerCase();
    
    if (!query) {
      wx.showToast({
        title: 'Please enter a search term',
        icon: 'none'
      });
      return;
    }
    
    // Get the latest products from app.js
    const app = getApp();
    const allProducts = app.globalData.allProducts || [];
    
    // Search through all products from app.js
    const results = allProducts.filter(product => 
      product.name.toLowerCase().includes(query)
    );
    
    this.setData({
      isSearching: true,
      searchResults: results,
      allProducts: allProducts // Update local copy of products
    });
  },
  
  // Handle cancel search
  onCancelSearch() {
    this.setData({
      isSearching: false,
      searchQuery: '',
      searchResults: []
    });
  }
});