const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/main.tsx', 
  output: {
    filename: 'bundle.js', 
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/, // .ts와 .tsx 파일을 대상으로
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/preset-env', // 최신 JS 문법을 변환해요
                '@babel/preset-react', // JSX를 변환해요
                '@babel/preset-typescript' // 타입스크립트를 변환해요
              ]
            }
          }
        ],
        exclude: /node_modules/
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i, // 이미지 파일 확장자
        type: 'asset', // Asset Modules 사용
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i, // 폰트 파일 확장자
        type: 'asset/resource', // 폰트는 항상 별도 파일로 내보내요
        generator: {
          filename: 'assets/[name][ext]' // 원하는 폴더와 이름 형태로 설정
        }
      },
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'] /// 파일을 import할 때 확장자를 생략할 수 있어요. TypeScript와 JavaScript를 혼용하는 프로젝트에서 설정해두면 좋아요.
  }
};