module.exports={
	entry:__dirname+"/app/entry.js",   //入口文件
	output:{                           
		path:__dirname+"/public",      //输出文件的存放位置
		filename:"bundle.js"           //输出文件的名称
	},
	module:{
		loaders:[
		 {
		 	test:/\.json$/,   //正则表达式，告诉loader应该加载以.json结尾的文件
		 	loader:"json"
		 },
		 {
		 	test:/\.css$/,
		 	loader:"style!css"  //对css的处理需要style和css两个loader来处理,！用于连接两个loader
		 }
		]
	} 
}