const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
    // エントリポイント
    entry: './src/index.js',
    output: {
        // 出力先ファイル
        path: path.resolve(__dirname, './dist'),
        // 出力ファイル名
        filename: 'bundle.js'
    },
    devServer:{
        // 静的ファイル
        contentBase: path.resolve(__dirname, 'public')
    },
    module: {
        rules: [
            {
                test: /\.vue$/,         // ファイルが.vueで終われば
                loader: 'vue-loader'    // vue-loaderを使う
            },
            {
                test: /\.js$/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: ['vue-style-loader', 'css-loader']
            }
        ]
    },
    resolve: {
        // import時、拡張子を省略できる
        extensions: ['.js', '.vue'],
        alias: {
            // vue-template-compilerでコンパイルする用
            vue$: 'vue/dist/vue.esm.js'
        }
    },
    plugins: [new VueLoaderPlugin()]
}