//点击事件
var icon_nav = document.getElementsByClassName("icon_nav")[0];
var mod_nanv_list = document.getElementsByClassName("mod_nav_list")[0];
icon_nav.onclick = function() {
	if(mod_nanv_list.style.display == "block") {
		mod_nanv_list.style.display = "none";
	} else {
		mod_nanv_list.style.display = "block";
	}
}

//音频
var pl = document.getElementsByClassName("icon_play_red")[0];
var st = document.getElementsByClassName("icon_stop_red")[0];
var btn = document.getElementsByClassName("btn_control")[0];
var audio1 = document.getElementById("player");
pl.addEventListener("click", play, false);
st.addEventListener("click", pause, false);

function play() {
	audio1.play();
	pl.style.display = "none";
	st.style.display = "block";
}

function pause() {
	audio1.pause();
	pl.style.display = "block";
	st.style.display = "none";
}

//弹幕
var on = document.getElementsByClassName("icon_barrage_on")[0];
var up = document.getElementsByClassName("icon_barrage_up")[0];
var mu = document.getElementsByClassName("play_barrage")[0];
on.addEventListener("click", kai, false);
up.addEventListener("click", guan, false);

function kai() {
	if(mu.style.display = "block") {
		on.style.display = "none";
		up.style.display = "block"
		mu.style.display = "none"
	}
}

function guan() {
	if(mu.style.display = "none") {
		on.style.display = "block";
		up.style.display = "none"
		mu.style.display = "block";
	}
}

//进度条
audio1.addEventListener("canplay", canplay1, false);
var duration;
function canplay1() {
	duration = audio1.duration;
}
var load = document.getElementsByClassName("play_progress_load")[0];
var time = document.getElementsByClassName("play_control_time")[0];
pl.addEventListener("click",jd,false);

function jd() {
	var x = 0;
	var y = 320/duration;
	setInterval(function() {
		x += y;
		if(x > 320) {
			x = y;
		}else{
			load.style.width = x + "px";
			console.log(load.style.width)
		}
	}, 1000)
}

