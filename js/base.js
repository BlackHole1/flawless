//a标签脚本
$(document).ready(function(){
	var a_tag_length = $(".a_tag").length;
	var a_tag_href = $(".a_tag").attr("href");
	var a_tag_text = $(".a_tag").text();
	$(".a_tag").attr("title",a_tag_href);
	for(var i=0;i<a_tag_length;i++){
		if($(".a_tag:eq(" + i + ")").text() !== ""){
			$(".a_tag:eq(" + i + ")").text("");
			$(".a_tag:eq(" + i + ")").append('<i class="glyphicon glyphicon-link"></i><i class="division">|</i><em>'+ a_tag_text +'</em>');
		}else{
			$(".a_tag:eq(" + i + ")").append('<i class="glyphicon glyphicon-link"></i><i class="division">|</i><em>网页外链</em>');
		}
	}
});

//input脚本
$(document).ready(function(){
    $(".form_tag input[type='text']").attr("placeholder","用户名/UserName");
    $(".form_tag input[type='password']").attr("placeholder","密码/PassWord");
});

//code样式
$(document).ready(function(){
if($("code")){

}
	
});