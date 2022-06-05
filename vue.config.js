const CompressionPlugin = require('compression-webpack-plugin')
const FileManagerPlugin = require('filemanager-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const glob = require('glob')

const PAGES = {};
glob.sync('src/pages/**/main.js').forEach(path => {
    const item = path.split('/')[2]
    PAGES[item.toLowerCase()] = {
        entry: `./src/pages/${item}/main.js`,
        template: `public/index.html`,
        chunks: ['chunk-vendors', 'chunk-common', item.toLowerCase()]
    }
})
module.exports = {
    // 基本路径
    // 输出文件目录
    outputDir: 'dist',
    publicPath: '',
    filenameHashing: true,
    pages: PAGES,
    // eslint-loader 是否在保存的时候检查
    lintOnSave: true,
    // use the full build with in-browser compiler
    // webpack配置
    // see https://github.com/vuejs/vue-cli/blob/dev/docs/webpack.md
    chainWebpack: (config) => {
        config.plugins.delete('prefetch')
        // 移除 preload 插件，避免加载多余的资源
        config.plugins.delete('preload')
        // config
        // .plugin('webpack-bundle-analyzer')
        // .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin);
        config.module
            .rule('fonts')
            .use('url-loader')
            .loader('url-loader')
            .tap(options => {
                return {
                    ...options,
                    limit: 10000
                }
            })
            .end()
    },
    configureWebpack: (config) => {
        const build = process.argv[2] && 'build' === process.argv[2]
        build && config.plugins.push(new FileManagerPlugin({
            events: {
                onEnd: {
                    delete: [
                        './dist.zip'
                    ],
                    archive: [
                        {
                            source: './dist',
                            destination: './dist.zip'
                        }
                    ]
                }
            }
        }))
        config.plugins.push(new CompressionPlugin({
            test: /\.js$|\.html$|\.less$|\.css$|\.jpg$|\.jpeg$|\.png$|\.svg$/, // 需要压缩的文件类型
            threshold: 10240, // 归档需要进行压缩的文件大小最小值，我这个是10K以上的进行压缩
            deleteOriginalAssets: false // 是否删除原文件
        }))
        build && config.plugins.push(
            new UglifyJsPlugin({
                uglifyOptions: {
                    output: {
                        comments: false
                    },
                    compress: {
                        drop_debugger: true,
                        drop_console: true,
                        pure_funcs: ['console.log']
                    }
                },
                sourceMap: false,
                parallel: true
            })
        )
        build && (config.output.filename = `js/[name].[contenthash].js`)
        build && (config.output.chunkFilename = `js/[name].[contenthash].js`)
    },
    // 生产环境是否生成 sourceMap 文件
    productionSourceMap: false,
    // css相关配置
    css: {
        // 是否使用css分离插件 ExtractTextPlugin
        extract: process.env.NODE_ENV !== 'dev', // 环境变量控制
        // 开启 CSS source maps?
        sourceMap: false
    },
    // use thread-loader for babel & TS in production build
    // enabled by default if the machine has more than 1 core
    parallel: require('os').cpus().length > 1,
    // webpack-dev-server 相关配置
    devServer: {
        host: '0.0.0.0',
        port: 8080,
        https: false,
        hotOnly: false,
        proxy: {
            '/fast-cut': {
                target: process.env.NODE_ENV === 'dev' ? 'http://127.0.0.1:9002/fast-cut' : 'http://hiai001.com/fast-cut',
                changeOrigin: true, // 是否跨域
                pathRewrite: {
                    '^/fast-cut': '' // 需要rewrite的,
                }
            }
        }
    },
    // 第三方插件配置
    pluginOptions: {}
}
