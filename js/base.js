//导航菜单脚本
$(document).ready(function(){
	$(".nav-menu > ul > li:not(.logo) > a").each(function(){
		if($(this).siblings("ul").size()){
		$(this).append('<i class="glyphicon glyphicon-triangle-right"></i>');
  		$(this).hover(function(){
  			$(this).find("i").removeClass("glyphicon-triangle-right").addClass("glyphicon-triangle-bottom")
 		},function(){
   			$(this).find("i").removeClass("glyphicon-triangle-bottom").addClass("glyphicon-triangle-right")
   		}); 
   		}
	})
	$(".nav-menu > ul > li:not(.logo) > ul").hover(function(){
		$(this).prev().find("i").removeClass("glyphicon-triangle-right").addClass("glyphicon-triangle-bottom");
	},function(){
		$(this).prev().find("i").removeClass("glyphicon-triangle-bottom").addClass("glyphicon-triangle-right")
	})
})

//面包屑脚本
$(document).ready(function(){
	$(".crumbs li").each(function(){
		if($(this).next("li").length == 0){
			$(this).find("a").attr("href","javascript:void(0)");
		}
	})
})

//警告窗脚本
$(document).ready(function(){
	$(".close").each(function(){
		if($(this).hasClass("alert-news error")){
			$(this).append("<span class='glyphicon glyphicon-remove-circle alert-news-error-close alert-news-all-close'></span>")
		}else if($(this).hasClass("alert-news warning")){
			$(this).append("<span class='glyphicon glyphicon-remove-circle alert-news-warning-close alert-news-all-close'></span>")
		}else if($(this).hasClass("alert-news info")){
			$(this).append("<span class='glyphicon glyphicon-remove-circle alert-news-info-close alert-news-all-close'></span>")
		}else if($(this).hasClass("alert-news success")){
			$(this).append("<span class='glyphicon glyphicon-remove-circle alert-news-success-close alert-news-all-close'></span>")
		}
		$(this).find(".alert-news-all-close").click(function(){
			$(this).parent().animate({
				opacity: "hide"
       			}, "1000")
		})
	})
})



//a标签脚本
$(document).ready(function() {
	$(".a-tag-link").each(function(){
		var a_tag_href = $(this).attr("href");
		$(this).attr("title","URL: " + a_tag_href);
		if($(this).text() == ""){
			$(this).append('<i class="glyphicon glyphicon-link"></i><i class="division">|</i><em>网页外链</em>');
		}else{
			var a_tag_text = $(this).text();
			$(this).text("");
			$(this).append('<i class="glyphicon glyphicon-link"></i><i class="division">|</i><em>' + a_tag_text + '</em>');
		}
	})
})

//button标签脚本
$(document).ready(function() {
	$("button").each(function(){
		var button_tag_data_text = $(this).attr("data");
		if(button_tag_data_text !== undefined && $(this).hasClass('button-tag')){
			$(this).css({
				"height":button_tag_data_text,
				"width":button_tag_data_text*1+3
			});
		}
	})
})

//按钮组不可点脚本
$(document).ready(function(){
	var a_page_length = $(".a-page a").length;
	$(".a-page").prepend('<a href="#" class="last">&lt;&lt;</a>').append('<a href="#" class="last">&gt;&gt;</a>');
	$(".a-page a").each(function(){
		if($(this).hasClass("new")){
			$(this).attr("href","javascript:void(0)");
		}
	})
	if($(".a-page a").eq(1).hasClass("new")){
		 $(".a-page a").eq(0).addClass("no-click no-hover").attr("href","javascript:void(0)");
	}
	if($(".a-page a").eq(a_page_length).hasClass("new")){
		$(".a-page a").last().addClass("no-click no-hover").attr("href","javascript:void(0)");
	}

	var button_page_length = $(".button-page button").length;
	$(".button-page").prepend('<button class="last">&lt;&lt;</button>').append('<button class="last">&gt;&gt;</button>');
	$(".button-page button").each(function(){
		if($(this).hasClass("new")){
			$(this).attr("disabled",true);
		}
	})
	if($(".button-page button").eq(1).hasClass("new")){
	 	$(".button-page button").eq(0).addClass("no-click no-hover").attr("disabled",true);
	 }
	if($(".button-page button").eq(button_page_length).hasClass("new")){
		$(".button-page button").last().addClass("no-click no-hover").attr("disabled",true);
	}
})

//按钮下拉菜单脚本
$(document).ready(function(){
	$(".dropdown button").next("ul").addClass("dropdown-ul");
	$(".dropdown button").click(function(){
		if($(this).parent().attr("class") == "dropdown"){
			$(this).parent().attr("class","dropdown2")
			$(this).next("ul").toggle("fast")
		}else if($(this).parent().attr("class") == "dropdown2"){
			$(this).parent().attr("class","dropdown")
			$(this).next("ul").toggle("fast")
		}
	}).blur(function(){
		if($(this).parent().attr("class") == "dropdown2"){
			$(this).parent().attr("class","dropdown")
			$(this).next("ul").toggle("fast")
		}
	})
})

//input脚本 例子1
$(document).ready(function() {
	$(".form-tag input[data='email'] , .form-tag input[data='邮箱']").attr("placeholder", "邮箱/Email");
	$(".form-tag input[data='user'], .form-tag input[data='username'] , .form-tag input[data='用户'] , .form-tag input[data='用户名'] , .form-tag input[data='登录名']").attr("placeholder", "用户名/UserName");
	$(".form-tag input[type='password']").attr("placeholder", "密码/PassWord");
	var data_arr = ["email", "邮箱", "user", "username", "用户", "用户名", "登录名", "password"];
	$(".form-tag input").each(function() {
		var a_tag_data_text = $(this).attr("data");
		if(a_tag_data_text == undefined && ($(this).attr("type") == "text" || $(this).attr("type") == undefined)){
			$(this).attr("placeholder", "搜索/Search");
		}
		if(a_tag_data_text !== undefined && $.inArray(a_tag_data_text,data_arr) == "-1"){
			$(this).attr("placeholder",a_tag_data_text);
		}

		//自添input高宽
		var input_width = $(this).attr("width");
		var input_height = $(this).attr("height");
		if(input_width !== undefined){
			$(this).css("width",input_width);
		}
		if(input_height !== undefined){
			$(this).css("height",input_height);
		}
	})
});

//table脚本
$(".table-tag").each(function(){
	if(!$(this).prev().hasClass("table-tag-head")){
		$(this).css({
			"-ms-border-top-left-radius":"4px",
			"-moz-border-top-left-radius":"4px",
			"-webkit-border-top-left-radius":"4px",
			"-ms-border-top-right-radius":"4px",
			"-moz-border-top-right-radius":"4px",
			"-webkit-border-top-right-radius":"4px",
			"border-top-left-radius":"4px",
			"border-top-right-radius":"4px"
		})
	}
})

// code样式
$(document).ready(function() {
	$("code").each(function() {
		if (!$(this).hasClass('code')){
			$(this).addClass('code-tag');
		}
	})
});

//footer页脚脚本
$(document).ready(function(){
	$(".web-footer").wrapInner("<div class='inner'></div>");
	$(".web-footer2").wrapInner("<div class='inner'></div>");
	$(".web-footer3").wrapInner("<div class='inner'></div>");
	$(".web-footer3-bottom").wrapInner("<div class='inner'></div>");
	$(".web-footer .inner").each(function(){
		var footer_left = $(this).find("dl").size();
		 if(footer_left == 0){
			$(this).find(".footer-int").removeClass("footer-int").css("color","#428bca");
		}else if(footer_left == 1){
			$(this).find(".footer-int").css("margin-left","105px")
		}else if(footer_left > 1){
			$(this).find(".footer-int").css({
				"margin-left":((footer_left*1-1)*145)+105 + "px"
			})
		}
	})
	$(".web-footer2 .inner").on("mouseover mouseout","ul:eq(1) img",function(e){
		var img_arr = [
		["/img/footer-qq.png","/img/footer-qq2.png"],
		["/img/footer-weibo.png","/img/footer-weibo2.png"],
		["/img/footer-qqweibo.png","/img/footer-qqweibo2.png"],
		["/img/footer-weixin.png","/img/footer-weixin2.png"]
		];
		var img_src = $(this).attr("src");
		if(event.type=="mouseover"){
			for(i=0;i<4;i++){
				if($.inArray(img_src,img_arr[i]) !== -1){
					if(img_src == img_arr[i][0]){
						$(this).attr("src",img_arr[i][1]);
					}
				}
			}
		}else if(event.type=="mouseout"){
			for(i=0;i<4;i++){
				if($.inArray(img_src,img_arr[i]) !== -1){
					if(img_src == img_arr[i][1]){
						$(this).attr("src",img_arr[i][0]);
					}
				}
			}
		}
	})
	$(".web-footer3-bottom .inner ul").on("mouseover mouseout","img",function(e){
		var img_arr = [
		["/img/footer-qq-32.png","/img/footer-qq2-32.png"],
		["/img/footer-weibo-32.png","/img/footer-weibo2-32.png"],
		["/img/footer-qqweibo-32.png","/img/footer-qqweibo2-32.png"],
		["/img/footer-weixin-32.png","/img/footer-weixin2-32.png"]
		];
		var img_src = $(this).attr("src");
		if(event.type=="mouseover"){
			for(i=0;i<4;i++){
				if($.inArray(img_src,img_arr[i]) !== -1){
					if(img_src == img_arr[i][0]){
						$(this).attr("src",img_arr[i][1]);
					}
				}
			}
		}else if(event.type=="mouseout"){
			for(i=0;i<4;i++){
				if($.inArray(img_src,img_arr[i]) !== -1){
					if(img_src == img_arr[i][1]){
						$(this).attr("src",img_arr[i][0]);
					}
				}
			}
		}
	})
})