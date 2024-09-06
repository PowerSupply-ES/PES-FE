const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.tsx", // TypeScript 진입점 파일
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true, // 이전 빌드 파일 삭제
  },
  resolve: {
    extensions: [".js", ".ts", ".tsx", ".jsx", ".css", ".scss"], // 파일 확장자 설정
    alias: {
      // 절대경로 설정
      components: path.resolve(__dirname, "src/components/"),
      pages: path.resolve(__dirname, "src/pages/"),
      assets: path.resolve(__dirname, "src/assets/"),
      apis: path.resolve(__dirname, "src/apis/"),
      styles: path.resolve(__dirname, "src/styles/"),
      hooks: path.resolve(__dirname, "src/hooks/"),
    },
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: [
                "@babel/preset-env",
                "@babel/preset-react",
                "@babel/preset-typescript",
              ], // Babel, TypeScript 프리셋
            },
          },
          //'ts-loader' // TypeScript를 처리하기 위해 ts-loader 사용
        ],
        exclude: /node_modules/,
      }, 
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'images/[name].[hash:8].[ext]', // images 폴더 아래에 저장
              esModule: false, // CommonJS 모듈을 사용
            },
          },
        ],
        //type: "asset/resource",
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public", "index.html"), // 절대 경로로 수정
    }),
  ],
  devServer: {
    static: path.resolve(__dirname, "dist"),
    compress: true,
    port: 9000,
  },
  mode: "development", // 또는 'production'
};
