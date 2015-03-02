$(document).ready(function(){
	$(".nav-menu").each(function(){
		$(this).after('<div class="media-nav-menu"></div>');
		if($(this).children("ul").children("li:first").hasClass("logo")){
			var li_logo = $(this).children("ul").children("li:first").html();
			$(this).next(".media-nav-menu").after("<div class='nav-menu-toggle'></div>").prepend(li_logo)
		}else{
			$(this).next(".media-nav-menu").after("<div class='nav-menu-toggle'></div>")
		}
		if($(this).find("ul form").length > 0){
			$(this).next(".media-nav-menu").append($(this).find("ul form").clone())
		}
		var ul_li = $(this).children("ul");
		$(this).next(".media-nav-menu").next(".nav-menu-toggle").append(ul_li.clone())
		$(this).next(".media-nav-menu").append('<button><span class="icon-bar"></span><span class="icon-bar"></span><span class="icon-bar"></span></button>')
		$(this).next(".media-nav-menu").find("button").click(function() {
			if($(this).parent().next(".nav-menu-toggle").attr("style") == "display: inline;"){
				$(this).parent().next(".nav-menu-toggle").toggle("show")
			}else{
				$(this).parent().next(".nav-menu-toggle").toggle("show")
			}
		});
	});
});
