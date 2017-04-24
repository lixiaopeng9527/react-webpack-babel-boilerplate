
/**
 * Created by April on 2017/4/24.
 */
var path = require('path');
var webpack = require('webpack');
module.exports = {
     entry:['./src/index'],
    output:{
        path: path.join(__dirname, 'dist'),
        filename:'bundle.js',
        publicPath:'/static/'
    }
};