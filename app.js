// app.js
App({
  onLaunch() {
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    wx.login({
      success: res => {
        // Your login logic here
      }
    })
  },
  globalData: {
    userInfo: null,
    // 📦 All products (used for filtering)
    allProducts: [
      // 🥘 Meals
      { id: 1, category: 'meals', name: 'Burger Straight', price: 38, image: 'https://i.ibb.co/3yWyjxF9/Burger-straight-active.webp' },
      { id: 2, category: 'meals', name: 'Blue Toaster With Bread', price: 20, image: 'https://i.ibb.co/9H78vPnV/Blue-toaster-with-bread-active.webp' },
      { id: 3, category: 'meals', name: 'Bowl With Yogurt Berries And Cereal', price: 22, image: 'https://i.ibb.co/sG34YRC/Bowl-with-yogurt-berries-and-cereal-active.webp' },
      { id: 4, category: 'meals', name: 'Hot Dog', price: 25, image: 'https://i.ibb.co/JRD2jDTV/Hot-dog-active.webp' },
      { id: 5, category: 'meals', name: 'Piece Of Yellow Cheese', price: 18, image: 'https://i.ibb.co/ns4znprV/Piece-of-yellow-cheese-active.webp' },
      { id: 6, category: 'meals', name: 'Pink Ketchup Bottle', price: 12, image: 'https://i.ibb.co/DHPqJQk1/Pink-ketchup-bottle-active.webp' },
      { id: 7, category: 'meals', name: 'Pink Meat Steak', price: 50, image: 'https://i.ibb.co/N265qPLB/Pink-meat-steak-active.webp' },
      { id: 8, category: 'meals', name: 'Pink Salmon Steak', price: 52, image: 'https://i.ibb.co/gMmz3GmY/Pink-salmon-steak-active.webp' },
      { id: 9, category: 'meals', name: 'Pink Shrimp', price: 40, image: 'https://i.ibb.co/zW5hn2KV/Pink-shrimp-active.webp' },
      { id: 10, category: 'meals', name: 'Sesame Bun', price: 15, image: 'https://i.ibb.co/tp24SNSr/Sesame-bun-active.webp' },
      { id: 11, category: 'meals', name: 'Sliced Toast Bread', price: 18, image: 'https://i.ibb.co/YFNPjcvx/Sliced-toast-bread-active.webp' },
      { id: 12, category: 'meals', name: 'Turkey On A Platter', price: 48, image: 'https://i.ibb.co/n8VfbPW7/Turkey-on-a-platter-active.webp' },
      //{ id: 13, category: 'meals', name: 'Two White Eggs', price: 20, image: 'https://i.ibb.co/Q723SnCm/Two-white-eggs-active.webp' },
      { id: 14, category: 'meals', name: 'Yellow Baguette', price: 15, image: 'https://i.ibb.co/0RJYH8yM/Yellow-baguette-active.webp' },
      { id: 15, category: 'meals', name: 'Yellow Bread', price: 15, image: 'https://i.ibb.co/0wV6NQ7/Yellow-bread-active.webp' },
    
      // 🧃 Drinks
      { id: 16, category: 'drinks', name: 'Blue Milk Carton', price: 14, image: 'https://i.ibb.co/RTVJ8xhq/Blue-milk-carton-active.webp' },
      //{ id: 17, category: 'drinks', name: 'Chemex Coffee Set With Barista Kettle', price: 30, image: 'https://i.ibb.co/XfDwpKyV/Chemex-coffee-set-with-barista-kettle-active.webp' },
      { id: 18, category: 'drinks', name: 'Chemex With Coffee Bag And Cup', price: 32, image: 'https://i.ibb.co/1xbjRQQ/Chemex-with-coffee-bag-and-cup-active.webp' },
      { id: 19, category: 'drinks', name: 'Coke Bottle', price: 10, image: 'https://i.ibb.co/5Xqp4Vr3/Coke-bottle-active.webp' },
      { id: 20, category: 'drinks', name: 'Kettle With Tea Cup', price: 28, image: 'https://i.ibb.co/8gHKKdTt/Kettle-with-tea-cup-active.webp' },
      { id: 21, category: 'drinks', name: 'Milk Bottle', price: 12, image: 'https://i.ibb.co/sdh4BDmD/Milk-bottle-active.webp' },
      { id: 22, category: 'drinks', name: 'Pink Soda Can', price: 11, image: 'https://i.ibb.co/6J7Yrf4B/Pink-soda-can-active.webp' },
      { id: 23, category: 'drinks', name: 'Soda Cup With Straw', price: 10, image: 'https://i.ibb.co/PKwz1M6/Soda-cup-with-straw-active.webp' },
      { id: 24, category: 'drinks', name: 'Water Bottle', price: 8, image: 'https://i.ibb.co/BHzZLKK5/Water-bottle-active.webp' },
    
      // 🥗 Healthy
      { id: 25, category: 'healthy', name: 'Blueberry', price: 15, image: 'https://i.ibb.co/hwTHfTC/Blueberry-active.webp' },
      { id: 26, category: 'healthy', name: 'Butternut Squash', price: 18, image: 'https://i.ibb.co/F4dPwk0f/Butternut-squash-active.webp' },
      { id: 27, category: 'healthy', name: 'Carrot', price: 12, image: 'https://i.ibb.co/Xf9VFnLx/Carrot-active.webp' },
      { id: 28, category: 'healthy', name: 'Cut Watermelon', price: 26, image: 'https://i.ibb.co/twpnYtP5/Cut-watermelon-active.webp' },
      { id: 29, category: 'healthy', name: 'Golden Apple', price: 9, image: 'https://i.ibb.co/TV8j9RZ/Golden-apple-active.webp' },
      { id: 30, category: 'healthy', name: 'Green Cucumber', price: 10, image: 'https://i.ibb.co/PvxXhHw7/Green-cucumber-active.webp' },
      { id: 31, category: 'healthy', name: 'Green Grape', price: 14, image: 'https://i.ibb.co/tPbQ1PK6/Green-grape-active.webp' },
      //{ id: 32, category: 'healthy', name: 'Green Pear', price: 13, image: '' },
      { id: 33, category: 'healthy', name: 'Half Of Avocado', price: 19, image: 'https://i.ibb.co/kgbRQsyZ/Half-of-avocado-active.webp' },
      { id: 34, category: 'healthy', name: 'Orange And Half Of Orange', price: 15, image: 'https://i.ibb.co/KjsW07rF/Orange-and-half-of-orange-active.webp' },
      { id: 35, category: 'healthy', name: 'Pink Bell Pepper', price: 16, image: 'https://i.ibb.co/20C7jhw5/Pink-bell-pepper-active.webp' },
      { id: 36, category: 'healthy', name: 'Pink Cherry', price: 14, image: 'https://i.ibb.co/HDKWh5YH/Pink-cherry-active.webp' },
      { id: 37, category: 'healthy', name: 'Pink Peach', price: 15, image: 'https://i.ibb.co/0pPHYjsJ/Pink-peach-active.webp' },
      { id: 38, category: 'healthy', name: 'Pink Pomegranate', price: 18, image: 'https://i.ibb.co/23N2FSP6/Pink-pomegranate-active.webp' },
      { id: 39, category: 'healthy', name: 'Pink Raspberries', price: 17, image: 'https://i.ibb.co/xtTVjqCL/Pink-raspberries-active.webp' },
      { id: 40, category: 'healthy', name: 'Pink Strawberry', price: 16, image: 'https://i.ibb.co/VF3Y6cK/Pink-tomato-active.webp' },
      { id: 41, category: 'healthy', name: 'Pink Tomato', price: 12, image: 'https://i.ibb.co/VF3Y6cK/Pink-tomato-active.webp' },
      { id: 42, category: 'healthy', name: 'Pumpkin', price: 20, image: 'https://i.ibb.co/93rfzv8K/Pumpkin-active.webp' },
      { id: 43, category: 'healthy', name: 'Two Yellow Bananas', price: 14, image: 'https://i.ibb.co/pvtpsBGn/Two-yellow-bananas-active.webp' },
      { id: 44, category: 'healthy', name: 'White Champignons', price: 18, image: 'https://i.ibb.co/s968t8Qj/White-champignons-active.webp' },
      { id: 45, category: 'healthy', name: 'Yellow Lemon With Leaf', price: 15, image: 'https://i.ibb.co/fdb0xtV6/Yellow-lemon-with-leaf-active.webp' },
      { id: 46, category: 'healthy', name: 'Yellow Mango With Leaf', price: 17, image: 'https://i.ibb.co/ZR0z0f1D/Yellow-mango-with-leaf-active.webp' },
      { id: 47, category: 'healthy', name: 'Yellow Onion', price: 12, image: 'https://i.ibb.co/TDnjcbgs/Yellow-onion-active.webp' },
    
      // 🍩 Snacks
      { id: 48, category: 'snacks', name: 'Birthday Cake Small', price: 20, image: 'https://i.ibb.co/BK645Sfg/Birthday-cake-small-active.webp' },
      //{ id: 49, category: 'snacks', name: 'Blueberry And Raspberry Pancakes', price: 22, image: 'https://i.ibb.co/sp0LR70y/Blueberry-and-raspberry-pancakes-active.webp' },
      { id: 50, category: 'snacks', name: 'Chocolate Ice Cream Cone Mokup', price: 18, image: 'https://i.ibb.co/5hq9sMFc/Chocolate-ice-cream-cone-mokup-active.webp' },
      { id: 51, category: 'snacks', name: 'Christmas Deer Cookie Yellow', price: 14, image: 'https://i.ibb.co/q3hMZTtb/Christmas-deer-cookie-yellow-active.webp' },
      { id: 52, category: 'snacks', name: 'Donut With Pink Icing', price: 15, image: 'https://i.ibb.co/xqjzpzqQ/Donut-with-pink-icing-active.webp' },
      { id: 53, category: 'snacks', name: 'Eye Candy', price: 13, image: 'https://i.ibb.co/XxLj5GXr/Eye-candy-active.webp' },
      { id: 54, category: 'snacks', name: 'French Fries', price: 14, image: 'https://i.ibb.co/4np27RJ9/French-fries-active.webp' },
      { id: 55, category: 'snacks', name: 'Gingerbread Man Cookie Yellow', price: 16, image: 'https://i.ibb.co/gFHgDMyZ/Gingerbread-man-cookie-yellow-active.webp' },
      { id: 56, category: 'snacks', name: 'Ice Cream Jar Mokup With Wooden Spoon', price: 17, image: 'https://i.ibb.co/ZpGthg8q/Ice-cream-jar-mokup-with-wooden-spoon-active.webp' },
      { id: 57, category: 'snacks', name: 'Mint Ice Cream Cup Mokup With Plastic Spoon', price: 16, image: 'https://i.ibb.co/zHVKVswT/Mint-ice-cream-cup-mokup-with-plastic-spoon-active.webp' },
      { id: 58, category: 'snacks', name: 'Pink Candy', price: 12, image: 'https://i.ibb.co/LXcCvZ2C/Pink-candy-active.webp' },
      { id: 59, category: 'snacks', name: 'Pink Candy Cane', price: 14, image: 'https://i.ibb.co/b56LJ9K2/Pink-candy-cane-active.webp' },
      { id: 60, category: 'snacks', name: 'Popcorn Bowl', price: 13, image: 'https://i.ibb.co/jZHx6bfZ/Popcorn-bowl-active.webp' },
      { id: 61, category: 'snacks', name: 'Snowman Cookie Yellow', price: 15, image: 'https://i.ibb.co/VckGnS7P/Snowman-cookie-yellow-active.webp' },
      { id: 62, category: 'snacks', name: 'Strawberry Ice Cream Mokup', price: 16, image: 'https://i.ibb.co/Sw0DvJ6B/Strawberry-ice-cream-mokup-active.webp' },
    ]
  }
})
