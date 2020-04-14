$(function(){
	// $(window).scroll(function(){
	// 	var navbar=$(".navbar");
	// 	window.console.log($(".navbar").height());
	// 	window.console.log($(window).scrollTop());
	// 	if ($(window).scrollTop()>=$(".navbar").height()) {
	// 		navbar.addClass("scrolled");
	// 	}else{
	// 		navbar.removeClass("scrolled");
	// 	}
	// });
	// Deal with Tabs
	$(".tabs-section .tab-switch li").on("click",function(){
		$(this).addClass("selected").siblings().removeClass("selected");
		$(".tabs-section .tabs-content > div").hide();
		$("."+$(this).data("class")).show();
	});
});