//a标签脚本
$(document).ready(function() {
	var a_tag_length = $(".a_tag-link").length;
	var a_tag_href = $(".a_tag-link").attr("href");
	var a_tag_text = $(".a_tag-link").text();
	$(".a_tag-link").attr("title", a_tag_href);
	for (var i = 0; i < a_tag_length; i++) {
		if ($(".a_tag-link:eq(" + i + ")").text() !== "") {
			$(".a_tag-link:eq(" + i + ")").text("");
			$(".a_tag-link:eq(" + i + ")").append('<i class="glyphicon glyphicon-link"></i><i class="division">|</i><em>' + a_tag_text + '</em>');
		} else {
			$(".a_tag-link:eq(" + i + ")").append('<i class="glyphicon glyphicon-link"></i><i class="division">|</i><em>网页外链</em>');
		}
	}
});

//button标签脚本
$(document).ready(function() {
	$("button").each(function(){
		var button_tag_data_text = $(this).attr("data");
		if(button_tag_data_text !== undefined && $(this).hasClass('button_tag')){
			$(this).css({
				"height":button_tag_data_text,
				"width":button_tag_data_text*1+3
			});
		}
	});
});
//input脚本
$(document).ready(function() {
	$(".form_tag input[data='email'] , .form_tag input[data='邮箱']").attr("placeholder", "邮箱/Email");
	$(".form_tag input[data='user'], .form_tag input[data='username'] , .form_tag input[data='用户'] , .form_tag input[data='用户名'] , .form_tag input[data='登录名']").attr("placeholder", "用户名/UserName");
	$(".form_tag input[type='password']").attr("placeholder", "密码/PassWord");
	var data_arr = ["email", "邮箱", "user", "username", "用户", "用户名", "登录名", "password"];
	$(".form_tag input").each(function() {
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
	});
});

//code样式
$(document).ready(function() {
	$("code").each(function() {
		if (!$(this).hasClass('code-fragment')) {
			$(this).addClass('code_tag');
		}
	});
});

