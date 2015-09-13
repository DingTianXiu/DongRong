$(document).ready(function(){
	var len = $("#point-id>li").length;
	var index = 0;
	$("#point-id").click(function(){
		index = $("#point-id li").index(this);
		showImg(index);
}