const path = require ('path')
const creatExpoWebpackConfig = require ('@expo/webpack-config')

module.exports = async function (env, argv) {
    const config = await creatExpoWebpackConfig (env, argv)
    config.module.rules.push ({
        test: /\.js$/,
        loader: 'babel-loader',
        include:[
            path.join(__dirname, 'node_modules'),

        ]
    })
}