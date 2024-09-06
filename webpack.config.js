const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.tsx', // TypeScript 진입점 파일
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true, // 이전 빌드 파일 삭제
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx'], // 파일 확장자 설정
    alias: { // 절대경로 설정
      components: path.resolve(__dirname, 'src/components/'),
      pages: path.resolve(__dirname, 'src/pages/'),
      assets: path.resolve(__dirname, 'src/assets/'),
      apis: path.resolve(__dirname, 'src/apis/'),
      styles: path.resolve(__dirname, 'src/styles/'),
      hooks: path.resolve(__dirname, 'src/hooks/'),
    }
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: 'ts-loader', // TypeScript를 직접 컴파일
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        type: 'asset/resource',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html', // HTML 템플릿 파일
    }),
  ],
  devServer: {
    static: path.resolve(__dirname, 'dist'),
    compress: true,
    port: 9000,
  },
  mode: 'development', // 또는 'production'
};
