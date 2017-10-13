
$(document).ready(function() {
	
	var AO=$("#advsexDiv");
	var AL=$("#advsex");

	//����δ�����汾�жϣ���ֹδ����ʱ���뱾�������
	if(AL.length>0 && AO.length){
		AO.css({background:$(".advsexList:eq(0)")[0].style.background}); 
		AL.css({height: AO[0].offsetHeight+"px",top:AO.offset().top+"px",background:$(".advsexList:eq(0)")[0].style.background}); 
		AO.find("a").attr("href",$(".advsexList:eq(0)").find("a").attr("href"));
		AL.show();
	}

	setInterval("$().advsGlobalLbRoll()", 5000);


	(function($){

		$.fn.advsGlobalLbRoll = function(){
			var AO=$("#advsexDiv");
			var AL=$("#advsex");
			var nextI;

			var T=$(".advsexList").size();
			
			for(i=0;i<T;i++){
				if($(".advsexList:eq("+i+")")[0].style.backgroundImage==AO[0].style.backgroundImage){
					if(i>=T-1){
						nextI=0;
					}else{
						nextI=i+1;
					}
					
					AO.animate({opacity: '0.2'},300,function(){
						AO.css({background:$(".advsexList:eq("+nextI+")")[0].style.background}); 
						AO.animate({opacity: '1'},1000);
						AO.find("a").attr("href",$(".advsexList:eq("+nextI+")").find("a").attr("href"));
					});
					AL.animate({opacity: '0.2'},300,function(){
						AL.css({background:$(".advsexList:eq("+nextI+")")[0].style.background,top:AO.offset().top+"px"}); 
						AL.animate({opacity: '1'},1000);
					});
					break;
				}
			}

		};

	})(jQuery);

});


