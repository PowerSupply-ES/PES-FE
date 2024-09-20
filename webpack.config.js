const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.tsx", // TypeScript 진입점 파일
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true, // 이전 빌드 파일 삭제
    publicPath: "/", // 새로고침을 했을 때도 파일이 정상적으로 참조
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
        use: "babel-loader",
        exclude: /node_modules/,
      }, 
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        type: "asset/resource",
        generator: {
          filename: 'images/[name].[hash:8][ext][query]', // 이미지 파일의 경로 및 이름 설정
        },
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
  // 개발 서버를 제공하여 실시간으로 애플리케이션을 빌드하고 업데이트할
  devServer: {
    host: "localhost",
    port: 3000,  // 기본포트는 9000
    //server: 'https',
    proxy: [
      {
       // TODO: 배포환경은 proxy 사용x (process.env.NODE_ENV사용)
        context: ['/api', '/api2'], // 프록시 적용할 경로
        target: 'https://pes23.com/',  // 외부 API 서버 도메인
        changeOrigin: true,  // CORS 문제 해결을 위해 필요
        secure: false,  // HTTPS 인증서 오류 무시 
        onProxyReq: (proxyReq, req, res) => {
          console.log(`Proxying request to: ${proxyReq.path}`);
      }
      },

      // local에서 돌릴때
      // {
      //    context: ['/api'], // 프록시 적용할 경로
      //    target: 'http://localhost:8080',  // 외부 API 서버 도메인
      //    changeOrigin: true,  // CORS 문제 해결을 위해 필요
      //    secure: true,  // HTTPS 인증서를 무시하도록 설정
      //    onProxyReq: (proxyReq, req, res) => {
      //      console.log(`Proxying request to: ${proxyReq.path}`);
      //  }
      //  },
      // {
      //   // 파이썬서버
      //   context: ['/api2'],
      //   target: 'http://localhost:8000',
      //   changeOrigin: true,
      // },
    ],
    static: path.resolve(__dirname, "dist"),
    compress: true,
    historyApiFallback: true,  // 개발 서버에서 라우팅 경로를 처리할 때 사용
  },
  mode: "development",
};
