//点击事件
var icon_nav = document.getElementsByClassName("icon_nav")[0];
var mod_nanv_list = document.getElementsByClassName("mod_nav_list")[0];
icon_nav.onclick = function () {
	    if(mod_nanv_list.style.display=="block"){
	    	mod_nanv_list.style.display = "none";
	    }else{
	        mod_nanv_list.style.display = "block";
	    }
}

//选项卡
var tab_item = document.getElementsByClassName("my_nav_item");
var tab_content = document.getElementsByClassName("opus_show")[0].children;

for (var i=0;i<tab_item.length;i++) {
	tab_item[i].index = i;
	tab_item[i].onclick = function () {
		for (var j=0;j<tab_item.length;j++) {
		tab_item[j].className ="my_nav_item";
		tab_content[j].style.display="none";
	  }
		this.className = "my_nav_item my_nav_item--current";
		tab_content[this.index].style.display="block";
	}
}