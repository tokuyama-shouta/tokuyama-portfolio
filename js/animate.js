
$(function(){
  $("#btn").on({
      "click":function(){
          $(this).addClass("animated swing");
      },
      "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend":function(){
          $(this).removeClass("animated swing");
      }
  });
});



$(function(){
	$(window).on('load scroll',function (){
		$('.animation').each(function(){
			//ターゲットの位置を取得
			let target = $(this).offset().top;
			//スクロール量を取得
			let scroll = $(window).scrollTop();
			//ウィンドウの高さを取得
			let height = $(window).height();
			//ターゲットまでスクロールするとフェードインする
			if (scroll > target - height + 300){
				//クラスを付与
				$(this).addClass('active');
			}
		});
	});
});

