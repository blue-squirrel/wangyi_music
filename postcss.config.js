module.exports = {
  plugins: {
    autoprefixer: {},
    'postcss-pxtorem': {
      rootValue: 100, // 根元素的字体大小
      // propList: ['width', 'height']
      propList: ['*']
    }
  }
}
