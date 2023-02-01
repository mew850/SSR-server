const path = require('path')

//这个配置文件就是一个JS文件，通过Mode中的模块操作，向外暴露一个配置对象
module.exports = {
    //手动指定入口和出口
    entry: path.join(__dirname,'./src/main.js'),//入口，表示打包哪个文件
    output:{
        path: path.join(__dirname,'./dist'),//指定打包好的文件，输入到哪个目录中
        filename: 'bundle.js'//指定输出的文件的名称
    },
    mode: 'development'//设置mode
}