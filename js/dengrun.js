var use = document.getElementById("u");
var pwd = document.getElementById("p");
var go = document.getElementById("go");
var qq=/^\d{5,10}$/; 
var sj=/^1[3|4|5|8] \d{9}$/;
var yx=/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
var mm=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{4,8}$/;

go.onclick = function () {
				if (use.value == "") {
					use.setCustomValidity("您还没有输入账号");
				}else{
					if (qq.test(use.value)||sj.test(use.value)||yx.test(use.value)) {
						use.setCustomValidity("");
					} else{
						use.setCustomValidity("账号格式不正确")
					}
				}
				
				if (pwd.value == "") {
					pwd.setCustomValidity("您还没有输入密码");
			    }else{
				    if (mm.test(pwd.value)) {
						pwd.setCustomValidity("");
				    }else{
				    	pwd.setCustomValidity("密码格式不正确");
				    }
				}
			}
