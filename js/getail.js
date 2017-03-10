//选项卡
var btns=document.getElementById("mod-tabs-heading").getElementsByTagName("a");
		var box=document.getElementsByClassName("box");
		    for(var i=0;i<btns.length;i++){
			btns[i].index=i;
			btns[i].onclick=function(){
				for(var j=0;j<btns.length;j++){
					btns[j].className="";
					box[j].style.display="none"
				}
				this.className="one";
				box[this.index].style.display="block"
			}
		}
//排序		    
	var zjSpan=document.getElementsByClassName("zjspan");		
      function all(){
		for(var i=0;i<zjSpan.length;i++){				
           zjSpan[i].innerHTML=i+4;          
		}
	}
	all();
//上拉下载更多
 $(function (){
   $(window).scroll(function () {
      //浏览器所能看到的页面的那部分的高度
      var winH = $(window).height();
      var scrH = $(window).scrollTop();//滚动的高度
      //获取整个页面的高度 htmH为设置的滚动到的高度位置
      var htmH = $(document).height() - 400;
      var htmL=$(document).height() - 350;
           //可见高度+滚动高度 超出 设置的高度，触发方法
      if (winH + scrH >= htmH) {
        //到达底部-100的高度，触发方法
//      alert(1)
        $("#mod_loading").css("visibility","visible");
        if(winH + scrH >= htmL){
        	$("#mod_loading").css("visibility","hidden");
        }
      }
   });
})	
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