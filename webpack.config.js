// const path = require('path');

// module.exports = {
//     entry: './public/index.html',
//     output: {
//         path: path.resolve(__dirname, 'dist'),
//         //filename: 'index.html',
//     },
//     resolve: {
//         extensions: ['.js']
//     }
// }

////////////////////////////

// const path = require('path');
// const basePath = __dirname;
// const distPath = "dist";

// module.exports = {
//     //mode - modo de funcionamiento
//     mode: "production",
//     //entry point
//     entry: {
//         app: "./src/index.js",
//     },
//     module: {
//         rules: [
//             {
//               test: /\.js/,
//               exclude: /node_modules/,
//               use: ["babel-laoder"],  
//             },
//         ],
//     },
//     //output point
//     output: {
//         path: path.join(basePath, distPath),
//         filename: "index.js",
//     }
// }

////////////////////////////

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'index_bundle.js',
  },

  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: './public/index.html',
      filename: './index.html',
    }),

    new MiniCssExtractPlugin(),
  ],

  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },

  optimization: {
    minimizer: [
      // For webpack@5 you can use the `...` syntax to extend existing minimizers (i.e. `terser-webpack-plugin`), uncomment the next line
      // `...`,
      new CssMinimizerPlugin(),
    ],
  },
};