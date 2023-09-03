module.exports = {
  plugins: [
    require('autoprefixer'),
    require('postcss-preset-env')({
      stage: 0,
      'nesting-rules': true,
    }),
    require('postcss-import'),
    require('postcss-size'),
    require('postcss-font-magician'),
    require('postcss-each'),
    require('postcss-for'),
    // require('postcss-nesting'),
  ],
}
