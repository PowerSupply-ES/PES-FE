const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  externals: { // react, react-dom, axios를 CDN에서 로드
    react: "React",
    "react-dom": "ReactDOM",
    axios: "axios", // axios를 CDN에서 로드
  },
  entry: "./src/index.tsx", // TypeScript 진입점 파일
  output: {
    filename: "[name].[contenthash].js", // 각 청크에 고유한 이름을 부여
    path: path.resolve(__dirname, "dist"),
    clean: true, // 이전 빌드 파일 삭제
    publicPath: "/", // 새로고침을 했을 때도 파일이 정상적으로 참조
    chunkFilename: "[name].[contenthash].js", // 동적 로드되는 청크에 고유한 이름 부여
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
      libs: path.resolve(__dirname, "src/libs/"),
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
        test: /\.webp$/i, // Webp확장자 이미지만 처리
        type: "asset/resource",
        generator: {
          filename: "images/[name].[hash:8][ext]", // 이미지 파일의 경로 및 이름 설정
        },
        // 이미지 최적화
        use: [
          {
            loader: "image-webpack-loader",
            options: {
              webp: {
                quality: 30, // WebP 변환 품질 설정 (높을수록 품질이 좋으나 용량이 큼)
              }
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  // 임시로 오류메시지 차단
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public", "index.html"), // 절대 경로로 수정
    }),
    // new BundleAnalyzerPlugin({
    //   analyzerMode: "server",
    //   openAnalyzer: true,
    // }),
  ],
  // 개발 서버를 제공하여 실시간으로 애플리케이션을 빌드하고 업데이트할
  devServer: {
    host: "localhost",
    port: 3000, // 기본포트는 9000
    //server: 'https',
    proxy: [
      {
        // TODO: 배포환경은 proxy 사용x (process.env.NODE_ENV사용)
        context: ["/api", "/api2"], // 프록시 적용할 경로
        target: "https://pes23.com/", // 외부 API 서버 도메인
        changeOrigin: true, // CORS 문제 해결을 위해 필요
        secure: false, // HTTPS 인증서 오류 무시
        onProxyReq: (proxyReq, req, res) => {
          console.log(`Proxying request to: ${proxyReq.path}`);
        },
      },
    ],
    historyApiFallback: true, // 잘못된 URL 요청을 기본 HTML로 리디렉션
    static: path.resolve(__dirname, "dist"),
    compress: true,
  },
  mode: "production", // production모드에서 자동으로 트리쉐이킹(by TerserPlugin)
  optimization: {
    splitChunks: {
      chunks: "all", // 모든 청크에 대해 코드 분할 적용
      maxInitialRequests: 20, // 초기 로딩 시 한 번에 로드할 수 있는 파일 수 제한
      minSize: 50000, // 최소 청크 크기
      maxSize: 200000, // 최대 청크 크기 (200 KiB 이하로 제한)
      cacheGroups: {
        defaultVendors: {
          test: /[\\/]node_modules[\\/]/, // node_modules의 모든 모듈을 분리
          name: "vendors",
          chunks: "all",
          enforce: true, // 무조건 적용
          priority: -10,
          reuseExistingChunk: true, // 기존 청크를 재사용하여 중복 제거
        },
        default: {
          minChunks: 2, // 적어도 2번 이상 재사용되는 모듈만 분리
          priority: -20,
          reuseExistingChunk: true, // 이미 분리된 청크 재사용
        },
      },
    },
    usedExports: true, // Tree shaking 활성화
    //minimize: true, // 코드 최소화
    runtimeChunk: "single", // 런타임 청크 분리
  },
};
