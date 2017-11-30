const fs = require("fs");
const forceCaseSensitivity = require("force-case-sensitivity-webpack-plugin");
const webpack = require("webpack");

if (fs.existsSync("./dist") && fs.statSync("./dist").isDirectory()) {
    const dir = require("path").resolve(__dirname, "dist");
    require("child_process").execSync(`rm -r ${dir}`);
}

// (function() {
//   const env = process.env
//   Object.keys(env).forEach(key => {
//     console.log(key, env[key])
//   })
// }())

module.exports = {
    watch: true,
    entry: {
        app: ["./src/index.js"]
    },
    output: {
        filename: "./dist/[name].js"
    },
    resolve: {
        extensions: [".js", ".jsx"]
    },
    plugins: [
        new forceCaseSensitivity(),
        new webpack.DefinePlugin({
            "process.env.NAME": JSON.stringify(process.env.NAME)
        })
    ],
    module: {
        rules: [{
                test: /\.(t|j)sx?$/,
                use: [{
                    loader: "babel-loader"
                }]
            },
            {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader"
            },
            {
                test: /\.scss$/,
                use: [{
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader",
                        options: {
                            module: true,
                            localIdentName: "[local]-[hash:base64:5]"
                        }
                    },
                    {
                        loader: "sass-loader"
                    }
                ]
            }
        ]
    },

    externals: {
        yisec: "window.Yisec"
    },
    // addition - add source-map support
    devtool: "source-map"
};
