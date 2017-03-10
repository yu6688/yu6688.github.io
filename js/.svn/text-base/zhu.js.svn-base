$(function(){
	var rex=/^[a-zA-Z0-9_]{4,16}$/;
	var pas=/^[0-9]{6-16}$/;
	var boo;
	var bo;
	$("#uname").change(function(){
		if(rex.test($("#uname").val())){
			$("#uname").parent().css("border","1px solid green")
			boo=true;
		}else{
			$("#uname").parent().css("border","1px solid red")
			boo=false;
		}
	})
	$("#pass").change(function(){
		if(rex.test($("#pass").val())){
			$("#pass").parent().css("border","1px solid green")
			bo=true;
		}else{
			$("#pass").parent().css("border","1px solid red")
			bo=false;
		}
	})
	$("#passt").change(function(){
		if($("#passt").val()==$("#pass").val()){
			$("#passt").parent().css("border","1px solid green")
			b=true;
		}else{
			alert("两次密码不一致");
			b=false;
		}
	})
	$("#but").click(function(){
		if(boo==true&&bo==true&&b==true){
		$(document).ready(function() {     
	    var x = 9999999999;     
	    var y = 1000000000;     
	    var rand = parseInt(Math.random() * (x - y + 1) + y);     
	    alert("您的账号为 "+rand);
		document.cookie="password="+$("#pass").val();
		document.cookie="name="+rand;
		}) 
		}
	})
})