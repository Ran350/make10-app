# Make10 Puzzle App
- Make10 Puzzle の解答を全列挙する Web アプリ
- [Ran350/make10](https://github.com/Ran350/make10) を git submodule として使用

## 準備
```sh
git clone <this repo>
cd calculator-app
yarn install
cd src/lib && git clone https://github.com/Ran350/make10.git && git install && cd ../../
```

## コマンド
[package.json](https://github.com/Ran350/make10-app/blob/main/package.json) の scripts を参照してください． 
- start : `yarn start`
- build : `yarn build`
- deploy :  `yarn deploy`
