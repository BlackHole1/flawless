# flawless是一个由less开发的一个css框架,使用了Glyphicons字体图标,而Glyphicons字体图标来自于bootstrap.
# flawless面对的是中国地区的开发者,国外可能不太适应呢~

## 使用方法：
在文件里调用flawless.css和bootstrap_ico.css就行了。
&lt;html&gt;
&lt;head&gt;
	&lt;meta charset=&quot;utf-8&quot;&gt;
	&lt;title&gt;FlawLess&lt;/title&gt;
	&lt;link rel=&quot;stylesheet&quot; href=&quot;flawless.css&quot;&gt;
	&lt;link rel=&quot;stylesheet&quot; href=&quot;bootstrap_ico.css&quot;&gt;
&lt;/head&gt;
&lt;body&gt;
...
&lt;/body&gt;
&lt;/html&gt;
如果你想更改,可以在less/flawless.less里修改下include文件就可以完成自定义哦~

a标签使用:
<a href="#" class="a_tag">
	<i class="glyphicon glyphicon-link"></i>
	<i class="division">|</i>
	<em>网页外链</em>
</a>
