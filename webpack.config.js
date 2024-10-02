const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
//const CompressionPlugin = require("compression-webpack-plugin");

module.exports = {
  externals: { // react, react-dom, axios 같은 라이브러리를 CDN에서 로드
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
      ace: path.resolve(__dirname, 'src/libs/ace'),
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
        test: /\.(png|jpe?g|gif|svg|webp)$/i, // 기존 이미지 파일을 WebP로 변환
        type: "asset/resource",
        generator: {
          filename: "images/[name].[hash:8][ext]", // 이미지 파일의 경로 및 이름 설정
        },
        // 이미지 최적화
        use: [
          {
            loader: "image-webpack-loader",
            options: {
              mozjpeg: {
                progressive: true,
                quality: 40, // 품질 설정
              },
              pngquant: {
                quality: [0.5, 0.65], // PNG 품질 설정
                speed: 4,
              },
              webp: {
                quality: 50, // WebP 변환 품질 설정 (높을수록 품질이 좋으나 용량이 큼)
              }
            },
          },
        ],
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
    // new CompressionPlugin({
    //   algorithm: "gzip", // 또는 "brotliCompress"
    //   test: /\.(js|css|html|svg)$/,
    //   threshold: 10240, // 10KB 이상의 파일만 압축
    //   minRatio: 0.8, // 압축 비율
    // }),
    // new BundleAnalyzerPlugin(), // 번들 크기 분석 플러그인 추가- 테스트용
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
    static: path.resolve(__dirname, "dist"),
    compress: true,
    historyApiFallback: true, // 개발 서버에서 라우팅 경로를 처리할 때 사용
  },
  mode: "production", // production모드에서 자동을 트리쉐이킹
  optimization: {
    splitChunks: {
      chunks: "all", // 모든 청크에 대해 코드 분할 적용
      minSize: 10000, // 최소 청크 크기
      maxSize: 200000, // 최대 청크 크기 (150 KiB 이하로 제한)
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
      usedExports: true, // Tree shaking 활성화
      // minimize: true, // 코드 최소화
    },
    runtimeChunk: "single", // 런타임 청크 분리
  },
};
