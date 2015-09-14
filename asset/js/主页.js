$(document).ready(function(){
	var pid = $("#piccture-id");
	alert(pid);
	var oid = $("#point-id>li");
	for(var i=0;i<oid.length;i++){
		this.index = i;
		oid[this.index].click(function(){
			pid[i].css("marginLeft","-410-this.index*1920+\'px\'");
		})
	}
}