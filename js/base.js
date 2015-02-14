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
	$(".nav-menu > ul > li:not(.logo) > ul").each(function(){
		$(this).hover(function(){
			$(this).prev().find("i").removeClass("glyphicon-triangle-right").addClass("glyphicon-triangle-bottom");
		},function(){
			$(this).prev().find("i").removeClass("glyphicon-triangle-bottom").addClass("glyphicon-triangle-right")
		})
	})
});

//面包屑脚本
$(document).ready(function(){
	$(".crumbs li").each(function(){
		if($(this).next("li").length == 0){
			$(this).find("a").attr("href","javascript:void(0)");
		}
		// if($(this).next("li") == undefined){
		// 	$(this).find("a").attr("href","javascript:void(0)");
		// }
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
	var a_tag_group_length = $(".a-tag-group a").length;
	$(".a-tag-group").prepend('<a href="#" class="last">&lt;&lt;</a>').append('<a href="#" class="last">&gt;&gt;</a>');
	$(".a-tag-group a").each(function(){
		if($(this).hasClass("new")){
			$(this).attr("href","javascript:void(0)");
		}
	})
	if($(".a-tag-group a").eq(1).hasClass("new")){
		 $(".a-tag-group a").eq(0).addClass("no-click no-hover").attr("href","javascript:void(0)");
	}
	if($(".a-tag-group a").eq(a_tag_group_length).hasClass("new")){
		$(".a-tag-group a").last().addClass("no-click no-hover").attr("href","javascript:void(0)");
	}

	var button_tag_group_length = $(".button-tag-group button").length;
	$(".button-tag-group").prepend('<button class="last">&lt;&lt;</button>').append('<button class="last">&gt;&gt;</button>');
	$(".button-tag-group button").each(function(){
		if($(this).hasClass("new")){
			$(this).attr("disabled",true);
		}
	})
	if($(".button-tag-group button").eq(1).hasClass("new")){
	 	$(".button-tag-group button").eq(0).addClass("no-click no-hover").attr("disabled",true);
	 }
	if($(".button-tag-group button").eq(button_tag_group_length).hasClass("new")){
		$(".button-tag-group button").last().addClass("no-click no-hover").attr("disabled",true);
	}
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


// code样式
$(document).ready(function() {
	$("code").each(function() {
		if (!$(this).hasClass('code-fragment')){
			$(this).addClass('code-tag');
		}
	})
});