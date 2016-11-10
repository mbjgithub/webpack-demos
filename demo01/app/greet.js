function greet(){
	var divEle=document.createElement("div");
	divEle.innerHTML="hello,webpack";
    return divEle;
}
module.exports=greet;