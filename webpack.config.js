module.exports = {
    mode: process.env.NODE_ENV ?? 'production',
    entry: './src/index.js',
    target: 'node',
    module: {
        rules: [
            {
                test: /worker\.js$/,
                use: {
                    loader: 'worker-loader',
                    options: {
                        filename: 'worker.js'
                    },
                },
            },
        ],
    },
}