/**
 * Created by April on 2017/4/24.
 */
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config.js');
var server  = new WebpackDevServer(webpack(config),{publicPath:config.output.publicPath});
server.listen(3000,'localhost',function(err,result){
    if(err){
        return console.log(err);
    }
    return console.log('listening at localhost:3000');
});