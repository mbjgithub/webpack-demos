function insertDom(content){
	var ele=document.createElement("div");
	ele.innerHTML=content;
	return ele;
}
module.exports=insertDom;