$(document).ready(function () {
	//마우스 오버
	$(".gnb>li").mouseover(function(){
		var navIdx = $(this).index();
		// console.log(navIdx);		//0,1,2,3,4,5
		$(".submenu").eq(navIdx).show();
	});
	$(".submenu").mouseover(function(){
		$(this).show();
	});
	$(".gnb>li").mouseout(function(){
		var navIdx2 = $(this).index();
		$(".submenu").eq(navIdx2).hide();
	});
	$(".submenu").mouseout(function(){
		$(this).hide();
	});

	//네비게이션 sticky효과
	var offset = $("nav>div.main-menu-area").offset();	//nav 위치 좌표파악
	
	$(window).scroll(function(){
		if ( $(document).scrollTop() > offset.top ) {
			$("nav>div.main-menu-area").addClass("sticky");
			$(".gnb").hide();
			$(".schedule ion-icon").hide();
			$(".search ion-icon").hide();
		} else {
			$("nav>div.main-menu-area").removeClass("sticky");
			$(".gnb").show();
			$(".schedule ion-icon").show();
			$(".search ion-icon").show();
		}
	});

	//햄버거버튼 토글
	$("li.menu-outline ion-icon").click(function(){
		$(".gnb").toggle();
		$(".schedule ion-icon").toggle();
		$(".search ion-icon").toggle();
	});

	// top버튼 스크롤 올리기
	$(window).scroll(function(){
		if ( $(this).scrollTop() > 300 ) {
			$(".top-btn").fadeIn(300);
		} else {
			$(".top-btn").fadeOut(300);
		}
	});

	$(".top-btn").click(function(){
		$("html, body").animate({scrollTop:0},500);
		return false;
	});


	// .navi 메뉴 클릭 시 제어
	$('.navi li').on('click',function(){
		$('.navi li').removeClass('on');
		$('article').removeClass('on');

		$(this).addClass('on');
		var idx = $(this).index();
		// console.log(idx);

		if (idx == 0) {		// .navi에 있는 '전체' 누르면 sec1, sec3만 'on'
			$('article').eq(0).addClass('on');
			$('article').eq(2).addClass('on');
		} else{
			$('article').eq(idx-1).addClass('on');
		}
	});
});
