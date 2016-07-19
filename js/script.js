$(function(){
    var handerBars=$("#toogle").children();
    console.log(handerBars);
    handerBars[0].className="active";
    for(var i=0;i<handerBars.length;i++){
    	$(handerBars[i]).click(function(){
    		for(var j=0;j<handerBars.length;j++){
    			$(handerBars[j]).removeClass("active");
    		}
            console.log(handerBars[i]);
    		$(this).addClass("active");
    	})
    }
   
	$("#model2").css("display","none");
	$("#model").bind('change', function(){
        var i=this.value;
        console.log(this.value);
        if(i==0){
        	$("#model1").css("display","block");
        	$("#model2").css("display","none");
        	$("#photo").attr('src','img/i'+0+'.jpg')
        }
        else if(i==1){
        	$("#model1").css("display","none");
        	$("#model2").css("display","block");
        	$("#photo").attr('src','img/g'+0+'.jpg')
        }
    })
	$("#model1").bind('change',function(){
		var i=this.value;
		$("#photo").attr('src','img/i'+i+'.jpg')
	})
	$("#model2").bind('change',function(){
		var i=this.value;
		$("#photo").attr('src','img/g'+i+'.jpg')
	})
	//下拉列表插件
	$(".show").bind('click',function(){
		$(".list-main").slideToggle("fast");
	});
	var listMain=$(".list-main").children();
	for(var i=0;i<listMain.length;i++){
		$(listMain[i]).bind('mouseover',function(){
			for(var j=0;j<listMain.length;j++){
				$(listMain[j]).css("background-color","#F5F5F5");
			}
			$(this).css("background-color","#008CE1");
		})
		$(listMain[i]).bind('click',function(){
			$(".show").text($(this).text());
			$(".show").attr("value",$(this).attr("value"));
			$(".list-main").slideUp("fast");
		});
	}
})
