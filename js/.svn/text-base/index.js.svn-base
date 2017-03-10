//点击事件
//var icon_nav = document.getElementsByClassName("icon_nav")[0];
//var mod_nanv_list = document.getElementsByClassName("mod_nav_list")[0];
//icon_nav.onclick = function () {
//	    if(mod_nanv_list.style.display=="block"){
//	    	mod_nanv_list.style.display = "none";
//	    }else{
//	        mod_nanv_list.style.display = "block";
//	    }
//}
$(function(){
	

$(".icon_nav").click(function(){
	$("#kkkkaaa").slideToggle(500)
});
});
//主要内容
var mod_down_show = document.getElementsByClassName("mod_down_show")[0];
var op = mod_down_show.style.opacity*100;
var w = 0.5;
setInterval(function () {
	w++;
	if (op>100){w=-w}
	if(op<0){w=0.5}
	op+=w;
//	console.log(op)
	mod_down_show.style.opacity = op/100;
	clearInterval;
}, 100);
//返回顶部
   var back =document.getElementById("back");

		back.onclick= function(){getIn()};
		
		
		function getIn(){
			var timer;
			var ost =document.documentElement.scrollTop ||document.body.scrollTop;
			if(document.documentElement.scrollTop){
				document.documentElement.scrollTop = 0;
			}else{
				document.body.scrollTop = 0;
			}
		}
		window.onscroll=function (){
			if(document.documentElement.scrollTop + document.body.scrollTop>400){
				back.style.display="block";	
			}else{
				back.style.display="none";
				
			}
		}


