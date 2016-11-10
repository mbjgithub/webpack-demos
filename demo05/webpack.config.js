var webpack=require("webpack");
var path=require("path");

module.exports={
	entry:{
		pageA:__dirname+"/app/pageA.js",
		pageB:__dirname+"/app/pageB.js"
	},
	output:{
		path:path.join(__dirname,"public"),
		filename:"[name].bundle.js",
		chunkFilename:"[id].chunk.js"
	},
	plugins:[
	 new webpack.optimize.CommonsChunkPlugin({
	 	filename:"commons.js",
	 	name:"commons"
	 }),
	 new webpack.optimize.UglifyJsPlugin()
	]
}