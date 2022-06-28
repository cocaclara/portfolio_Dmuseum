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


	// .year 메뉴 양 옆 < > 버튼
	// 오른쪽버튼 클릭 시
	$('.year .next').click(function(){
		$('.year .prev').removeClass('off');		// 왼쪽버튼 비활성화 제거
		$('.year .next').addClass('off');

		$('.over>ul').stop().animate({marginLeft:'-125px'},300);
	});

	// 왼쪽버튼 클릭 시
	$('.year .prev').click(function(){
		$('.year .next').removeClass('off');		// 오른쪽버튼 비활성화 제거
		$('.year .prev').addClass('off');

		$('.over>ul').stop().animate({marginLeft:0},500);
	});


	// ************************************************************************************
	// .navi 메뉴 클릭 시 제어
	$('.navi li').on('click',function(){
		$('.navi li').removeClass('on');
		$('section').removeClass('on');
		$('article div.info').removeClass('on');

		$(this).addClass('on');
		var idx = $(this).index();
		// console.log(idx);

		$('.flow>li').removeClass('on');
		$('.flow>li:first-child').addClass('on');

		if (idx == 0) {		// .navi에 있는 '전체' 누르면 .info갖고있으면 다 'on'
			// ****************전체****************
			if( $('section article').has('div') ){
				$('section article>div').parents('section').addClass('on');
				$('section article').find('div.info').addClass('on');
			}

				// 전체> .year li 클릭 시
			$('.year li').on('click',function(){
				$('.year li').removeClass('on');
				$('section').removeClass('on');
				$('article div.info').removeClass('on');
		
				$(this).addClass('on');
				var idxYEAR = $(this).index();
				// console.log(idx);
		
				if (idxYEAR == 0) {		// .year에 있는 '전체' 누르면 div.info갖고있으면 다 'on'
					if( $('section article').has('div') ){
						$('section article>div').parents('section').addClass('on');
						$('section article').find('div.info').addClass('on');
					}
				} else if (idxYEAR == 1) {		//2022
						$('section.y6').addClass('on');
						$('section.y6 strong').addClass('on');
				} else if (idxYEAR == 2) {		//2021
						$('section.y5').addClass('on');
						$('section.y5 div.info').addClass('on');
				} else if (idxYEAR == 3) {		//2020
					$('section.y4').addClass('on');
					$('section.y4 div.info').addClass('on');
				} else if (idxYEAR == 4) {		//2019
						$('section.y3').addClass('on');
						$('section.y3 div.info').addClass('on');
				} else if (idxYEAR == 5) {		//2018
						$('section.y2').addClass('on');
						$('section.y2 div.info').addClass('on');
				} else{		//2017
						$('section.y1').addClass('on');
						$('section.y1 div.info').addClass('on');
				}
			});
			
		} else if (idx == 1) {
			// ****************디뮤지엄****************
			if( $('section p').hasClass('d') ){		// .d갖고 있으면 다 'on'

				$('section p.d').parents('section').addClass('on');
				$('section p.d').parents('div.info').addClass('on');
			}

				// 디뮤지엄> .year li 클릭 시
			$('.year li').on('click',function(){
				$('.year li').removeClass('on');
				$('section').removeClass('on');
				$('h2').removeClass('on');
				$('strong').removeClass('on');
				$('article div.info').removeClass('on');
		
				$(this).addClass('on');
				var idxYEAR = $(this).index();
				// console.log(idx);
		
				if (idxYEAR == 0) {		// 디뮤지엄에서 .year에 있는 '전체' 눌렀을 때, div.info갖고있으면 다 'on'
					if( $('section p').hasClass('d') && $('section article').has('div') ){		
						$('section p.d').parents('section').addClass('on');
						$('section p.d').parents('div.info').addClass('on');
					}
				} else if (idxYEAR == 1) {		//2022 + d		// 없음
						$('section.y6').addClass('on');
						$('section.y6 strong').addClass('on');
				} else if (idxYEAR == 2) {		//2021 + d		// 없음
						$('section.y5').addClass('on');
						$('section.y5 strong').addClass('on');
				} else if (idxYEAR == 3) {		//2020 + d
					if( $('section p').hasClass('d') ){
						$('section.y4 p.d').parents('section').addClass('on');
						$('section.y4 p.d').parents('div.info').addClass('on');
					}
				} else if (idxYEAR == 4) {		//2019 + d
					if( $('section p').hasClass('d') ){
						$('section.y3 p.d').parents('section').addClass('on');
						$('section.y3 p.d').parents('div.info').addClass('on');
					}
				} else if (idxYEAR == 5) {		//2018 + d
					if( $('section p').hasClass('d') ){
						$('section.y2 p.d').parents('section').addClass('on');
						$('section.y2 p.d').parents('div.info').addClass('on');
					}
				} else{		//2017 + d
					if( $('section p').hasClass('d') ){
						$('section.y1 p.d').parents('section').addClass('on');
						$('section.y1 p.d').parents('div.info').addClass('on');
					}
				}
			});

		} else if (idx == 2) {
			// ****************대림미술관****************
			if( $('section p').hasClass('daelim') ){	// .daelim 갖고 있으면 다 'on'

				$('section p.daelim').parents('section').addClass('on');
				$('section p.daelim').parents('div.info').addClass('on');
			}

					// 대림미술관> .year li 클릭 시
			$('.year li').on('click',function(){
				$('.year li').removeClass('on');
				$('section').removeClass('on');
				$('h2').removeClass('on');
				$('strong').removeClass('on');
				$('article div.info').removeClass('on');
		
				$(this).addClass('on');
				var idxYEAR = $(this).index();
				// console.log(idx);
		
				if (idxYEAR == 0) {		// 대림미술관에서 .year에 있는 '전체' 눌렀을 때, div.info갖고있으면 다 'on'
					if( $('section p').hasClass('daelim') && $('section article').has('div') ){		
						$('section p.daelim').parents('section').addClass('on');
						$('section p.daelim').parents('div.info').addClass('on');
					}
				} else if (idxYEAR == 1) {		//2022 + daelim	// 없음
						$('section.y6').addClass('on');
						$('section.y6 strong').addClass('on');
				} else if (idxYEAR == 2) {		//2021 + daelim
					if( $('section p').hasClass('daelim') ){
						$('section.y5 p.daelim').parents('section').addClass('on');
						$('section.y5 p.daelim').parents('div.info').addClass('on');
					}
				} else if (idxYEAR == 3) {		//2020 + daelim	// 없음
						$('section.y4').addClass('on');
						$('section.y4 strong').addClass('on');
				} else if (idxYEAR == 4) {		//2019 + daelim
					if( $('section p').hasClass('daelim') ){
						$('section.y3 p.daelim').parents('section').addClass('on');
						$('section.y3 p.daelim').parents('div.info').addClass('on');
					}
				} else if (idxYEAR == 5) {		//2018 + daelim
					if( $('section p').hasClass('daelim') ){
						$('section.y2 p.daelim').parents('section').addClass('on');
						$('section.y2 p.daelim').parents('div.info').addClass('on');
					}
				} else{		//2017 + daelim
					if( $('section p').hasClass('daelim') ){
						$('section.y1 p.daelim').parents('section').addClass('on');
						$('section.y1 p.daelim').parents('div.info').addClass('on');
					}
				}
			});
			
		} else{
		// ****************구슬모아당구장****************
			if( $('section p').hasClass('guseulmoa') ){		// .guseulmoa 갖고 있으면 다 'on'
				
				$('section p.guseulmoa').parents('section').addClass('on');
				$('section p.guseulmoa').parents('div.info').addClass('on');
			}
			
					// 구슬모아당구장> .year li 클릭 시
			$('.year li').on('click',function(){
				$('.year li').removeClass('on');
				$('section').removeClass('on');
				$('h2').removeClass('on');
				$('strong').removeClass('on');
				$('article div.info').removeClass('on');

				$(this).addClass('on');
				var idxYEAR = $(this).index();
				// console.log(idx);

				if (idxYEAR == 0) {		// 구슬모아당구장에서 .year에 있는 '전체' 눌렀을 때, div.info갖고있으면 다 'on'
					if( $('section p').hasClass('guseulmoa') && $('section article').has('div') ){		
						$('section p.guseulmoa').parents('section').addClass('on');
						$('section p.guseulmoa').parents('div.info').addClass('on');
					}
				} else if (idxYEAR == 1) {		//2022 + guseulmoa	// 없음
						$('section.y6').addClass('on');
						$('section.y6 strong').addClass('on');
				} else if (idxYEAR == 2) {		//2021 + guseulmoa	// 없음
					$('section.y5').addClass('on');
					$('section.y5 strong').addClass('on');
				} else if (idxYEAR == 3) {		//2020 + guseulmoad	// 없음
					$('section.y4').addClass('on');
					$('section.y4 strong').addClass('on');
				} else if (idxYEAR == 4) {		//2019 + guseulmoa
					if( $('section p').hasClass('guseulmoa') ){
						$('section.y3 p.guseulmoa').parents('section').addClass('on');
						$('section.y3 p.guseulmoa').parents('div.info').addClass('on');
					}
				} else if (idxYEAR == 5) {		//2018 guseulmoa
					if( $('section p').hasClass('guseulmoa') ){
						$('section.y2 p.guseulmoa').parents('section').addClass('on');
						$('section.y2 p.guseulmoa').parents('div.info').addClass('on');
					}
				} else{		//2017 guseulmoa
					if( $('section p').hasClass('guseulmoa') ){
						$('section.y1 p.guseulmoa').parents('section').addClass('on');
						$('section.y1 p.guseulmoa').parents('div.info').addClass('on');
					}
			}

		
		
			});
		}
	});
	// 초기화면에서 .year 메뉴 클릭 시 제어
	$('.year li').on('click',function(){
		$('.year li').removeClass('on');
		$('section').removeClass('on');
		$('article div.info').removeClass('on');

		$(this).addClass('on');
		var idxYEAR = $(this).index();
		// console.log(idx);

		if (idxYEAR == 0) {		// .year에 있는 '전체' 누르면 div.info갖고있으면 다 'on'
			if( $('section article').has('div') ){
				$('section article>div').parents('section').addClass('on');
				$('section article').find('div.info').addClass('on');
			}
		} else if (idxYEAR == 1) {		//2022
				$('section.y6').addClass('on');
				$('section.y6 strong').addClass('on');
		} else if (idxYEAR == 2) {		//2021
				$('section.y5').addClass('on');
				$('section.y5 div.info').addClass('on');
		} else if (idxYEAR == 3) {		//2020
			$('section.y4').addClass('on');
			$('section.y4 div.info').addClass('on');
		} else if (idxYEAR == 4) {		//2019
				$('section.y3').addClass('on');
				$('section.y3 div.info').addClass('on');
		} else if (idxYEAR == 5) {		//2018
				$('section.y2').addClass('on');
				$('section.y2 div.info').addClass('on');
		} else{		//2017
				$('section.y1').addClass('on');
				$('section.y1 div.info').addClass('on');
		}
	});
	// 초기화면 상태		// .info갖고있으면 다 'on'
		// ****************전체****************
	if( $('section article').has('div') ){
		$('section article>div').parents('section').addClass('on');
		$('section article').find('div.info').addClass('on');
		}
	// ************************************************************************************
});
