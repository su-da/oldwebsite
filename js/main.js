$(document).ready(function(){$(window).scroll(function(){var e=document.documentElement.scrollTop+document.body.scrollTop;e>200?($("#gotop").fadeIn(400),$(window).width()>=1200&&$(".navbar").stop().fadeTo(400,.2)):($("#gotop").fadeOut(400),$(window).width()>=1200&&$(".navbar").stop().fadeTo(400,1))}),$("#gotop").click(function(){$("html,body").animate({scrollTop:"0px"},200)}),$(".navbar").mouseenter(function(){$(".navbar").fadeTo(100,1)}),$(".navbar").mouseleave(function(){var e=document.documentElement.scrollTop+document.body.scrollTop;e>200&&$(".navbar").fadeTo(100,.2)}),replaceMeta(),$(window).resize(function(){replaceMeta()})}),replaceMeta=function(){$(window).width()<980?($("#side_meta #post_meta").length>0&&$("#post_meta").appendTo("#top_meta"),$("#sidebar #site_search").length>0&&($("#site_search").appendTo("#top_search"),$("#site_search #st-search-input").css("width","95%"))):($("#top_meta #post_meta").length>0&&$("#post_meta").appendTo("#side_meta"),$("#top_search #site_search").length>0&&($("#site_search").prependTo("#sidebar"),$("#site_search #st-search-input").css("width","85%")))};