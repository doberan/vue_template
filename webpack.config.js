const path = require('path')

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
    }
}