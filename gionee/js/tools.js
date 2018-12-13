

window.onload = function(){
	black();
	showImg();
}

//轮播图
function showImg(){
	let count = 0;
	setInterval(function(){
		let num = count;
		count++;
		if(count>1){
			count=0;
		}
		//循环所有的图片
		$("#banner img").each(function(){
			$("#banner img").css("display","none")
		})
		//对两张图片进行
		$("#banner img").eq(num).fadeOut("fast","swing");
        $("#banner img").eq(count).fadeIn("fast","swing");

	},2000)
}

//显示隐藏
function black(){
	$("#JmNavMobile").mouseover(function(){
		$(".menu-box").css("display","block")
	})
	$("#JmNavMobile").mouseout(function(){
		$(".menu-box").css("display","none")
	})
}








