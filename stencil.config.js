const sass = require("@stencil/sass");

exports.config = {
  namespace: "stencilmobx",
  // publicPath: '/build',
  outputTargets: [
    { type: 'www' },
    { type: 'dist' }
  ],
  bundles: [
    { components: ['my-app', 'my-header','my-routes','my-name', 'my-address'] }
  ],

  plugins: [sass()],
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
}
