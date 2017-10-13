$(document).ready(function() {
	
	var AO2=$("#advsexDiv2");
	var AL2=$("#advsex2");
	var AOF2=AO2.offset();

	//����δ�����汾�жϣ���ֹδ����ʱ���뱾�������
	if(AL2.length>0 && AO2.length){      
		AL2[0].style.background=AO2[0].style.background;
		AL2.css({height: AO2[0].offsetHeight+"px",top:AOF2.top+"px"});
		AL2.show();
	}

});
