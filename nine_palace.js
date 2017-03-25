window.onload=function(){
	var node=[];
	var class_node=[];
	class_node=document.getElementsByClassName('row');
	for(var i=0;i<class_node.length;i++){
		for(var n=0;n<class_node[i].children.length;n++)
		{
             node[node.length]=class_node[i].children[n];
		}
	}
	console.log(node);
}