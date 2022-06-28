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

	//사이드메뉴(예약, 회원가입)
	$(".side-menu li").mouseover(function(){
		$(this).stop().animate({marginLeft : "-110%"},800);
	});
	$(".side-menu li").mouseout(function(){
		$(this).stop().animate({marginLeft : "0"},500);
	});

	// 섹션2 이미지 슬라이드
	//미리 탐색 및 선언하기
	const slide = $(".content-pic ul") //전체슬라이드 컨테이너
	const slideImg = $(".content-pic li");	//슬라이드 사진
	const slideCount = slideImg.length;	//슬라이드 개수	//6개
	let currentIdx = 0;		//현재 슬라이드 index 번호
	let position = 0;	//현재 ul의 위치값

	//사진 width값(넓이)+마진값 --> 헌 번 움직일 때 이동해야할 거리
	let imgWidth = document.querySelector(".content-pic li").offsetWidth + 25;

	//**********************************************
	//오른쪽(다음) 버튼 누를 때
	$(".btn-num .right").click(function(){

		$(".left").removeClass("off");	//왼쪽버튼 비활성화 제거

		//문자를 숫자로 바꾸기(페이지 숫자올리기 위해)
		var innerText = document.querySelector(".current").innerText;	//span태그 안의 "01"문자 가져옴
		let innerNum = parseInt(innerText);	//"01"문자를 숫자1 로 변환 (현재 페이지번호)
		let enterNum = innerNum + 1;	//현재 페이지번호 + 1(다음 번호)

		if( enterNum <= slideCount){	//페이지번호06까지만 제한
			$(".current").text( "0" + enterNum + " ");	//01,02,03,04,05,06

			//사진 바꾸기
			position -= imgWidth;	//번호 끝날 때 까지 계속 왼쪽(사진크기만큼)으로 이동하기 위해,,
			$(".content-pic>ul").animate({marginLeft: position},500);	//사진 왼쪽으로 이동

			
			//컨텐츠내용 바꾸기
			$(".content-text li:visible").hide().next().show();
		}
		if( enterNum == slideCount){	//마지막 페이지면,
			$(".right").addClass("off");	//비활성화 켜기
			$(".content-pic>ul").css({marginLeft: imgWidth*slideCount/2});
		}
	});
	//**********************************************
	//왼쪽(이전) 버튼 누를 때
	$(".btn-num .left").click(function(){
		$(".right").removeClass("off");	//오른쪽버튼 비활성화 제거

		//문자를 숫자로 바꾸기(숫자내리기)
		var innerTextPrev = document.querySelector(".current").innerText;	//span태그 안의 "01"문자 가져옴
		let innerNumPrev = parseInt(innerTextPrev);	//"01"문자를 숫자1 로 변환 (현재 페이지번호)
		let enterNumPrev = innerNumPrev - 1;	//현재 페이지번호 - 1(이전 번호)

		if( enterNumPrev <= slideCount && enterNumPrev >= 1){	//페이지번호06까지만 제한
			$(".current").text( "0" + enterNumPrev + " ");	//01,02,03,04,05,06

			//사진 바꾸기
			position += imgWidth;	//번호 01 나올 때까지 다시 오른쪽(사진크기만큼)으로 이동하기 위해,,
			$(".content-pic>ul").animate({marginLeft: position},500);	//사진 오른쪽으로 이동

			
			//컨텐츠내용 바꾸기
			$(".content-text li:visible").hide().prev().show();
		}
		if( enterNumPrev == 1){	//첫번째 페이지면,
			$(".left").addClass("off");	//비활성화 켜기
		}
	});



	// 섹션3 li 클릭시 컨텐츠(이미지+문구) 변경
	$(".shop-tab>li").click(function(){
		var idx = $(this).index();
		// console.log(idx);	//0,1,2

		//탭메뉴 활성화,비활성화
		// $(".shop-tab a").removeAttr("href");
		$(".shop-tab>li").removeClass("on");
		$(".shop-tab>li").eq(idx).addClass("on");
		//사진 활성화,비활성화
		$(".shop-contents ul").removeClass("on");
		$(".shop-contents ul").eq(idx).addClass("on");
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

	//********스크롤 내릴 때, 한 섹션 씩 자동으로 내려가기*******************
	// scrollActionBlock
	window.addEventListener("wheel",function(event){
		event.preventDefault();		//기본이벤트(휠) 제거 
	}, {passive : false});		//passive함수는 이 함수가 작동하는지 능동적 감시를 수행하는데, passive:false로 두면 감시가 일어나지 않기때문에 그냥 원천 차단해버림

	//미리 탐색 및 선언하기
	var scrollEvent = false;	//한번씩만 적용시키기 위해 참거짓 값을 주는 변수 선언
	var page = 1;	//뷰포트에 표시되는 페이지 번호
	var lastPage = $(".wheel").length;	//마지막 페이지의 번호
	//console.log(lastPage);	//4		".wheel" 개수는 4개이므로,,
	$("html").animate({scrollTop:0},10);	//문서(페이지)가 로드되면 첫 페이지 시작

	//휠을 굴리면 다음 페이지, 이전페이지
	$(window).on("wheel",function(e){	//마우스 휠 이벤트
		if( $("html").is("animated") ) return;	//.animated로 생성된 스크롤 효과가 진행되는 동안엔 wheel 이벤트 무시(return)

		if ( e.originalEvent.deltaY > 0 && scrollEvent == false ) {
			//deltaY > 0는 마우스휠을 Y방향으로 0보다 크게 굴린다는 것 --> Y축 스크롤량이 0보다 크다 --> 마우스 휠을 아래로 굴릴 시
			// scrollEvent == false는 이벤트가 작동하지 않는 상태

			//console.log("현재페이지: ", page);		//현재페이지 확인

			scrollEvent = true;		//scrollEvent를 1번만 작동시키기 위해--> 처음엔 false로 해놓고 이 때만 true로 변환해서 이벤트 작동시키고, 이벤트 끝나면 다시 false로 변환해서 이벤트 중지시킴
			if(page == lastPage) return;	//페이지번호가 마지막 페이지의 번호와 같은 경우, return으로 반환해서 이벤트 핸들러 종료

			page++;		//스크롤을 아래로 했으면, 현재페이지+1로 이동

		} else if( e.originalEvent.deltaY < 0 && scrollEvent == false ){	//마우스휠을 위로 굴릴 시
			scrollEvent = true;
			if(page == 1) return;		//첫번쩨 페이지인 경우 이벤트 핸들러 종료

			page--;		//스크롤을 위로 했으면, 현재페이지-1로 이동
			
		}

		var nowTop = (page-1) * $(window).height();	//현재페이지수의 top 위치가 전 페이지의 top길이만큼이므로
		$("html").stop().animate({scrollTop:nowTop},
			{duration:500, complete: function(){
			scrollEvent = false;}	//complete 앞 명령이 끝나면 작동시킴
		});
	});
});
