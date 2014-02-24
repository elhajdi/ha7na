$(document).ready(function(){
	$(".widget-collapse").click(function(){
		button = $(this).children(".fa-plus");
		button.removeClass("fa-plus");
		button.addClass("fa-minus");
		box = $(this).parents(".widget-box")[0];
		box.children("widget-content").slideUp();
		box.children("widget-footer").slideUp();
	});
});