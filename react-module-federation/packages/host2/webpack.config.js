const HtmlWebPackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const PORT = 5800;
const { dependencies, name } = require("./package.json");

module.exports = {
  output: {
    publicPath: `http://localhost:${PORT}/`,
  },

  resolve: {
    extensions: [".jsx", ".js", ".json"],
  },

  devServer: {
    port: PORT,
  },

  module: {
    rules: [
      {
        test: /\.m?js/,
        type: "javascript/auto",
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },

  plugins: [
    new ModuleFederationPlugin({
      name,
      remotes: {
        remote: `remote@http://localhost:5600/remoteEntry.js`
      }
    }),
    new HtmlWebPackPlugin({
      template: "./src/index.html",
    }),
  ],
};
