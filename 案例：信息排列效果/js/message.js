// JavaScript Document

       window.onload=function(){//窗口加载完成后执行
	   //获取按钮
	   var listBtn=document.getElementById("btn1");
	   var carBtn=document.getElementById("btn2");
	   var imgs=document.getElementsByTagName("img");
	   
	   listBtn.onclick=function(){
		      //改变按钮的class的值
			  listBtn.className="btn-list-on";
			  carBtn.className="btn-car-off";
			  
			  //改变每一张图片的路径以及它对应的父节点的class的值
			  for(var i=0; i<imgs.length; i++)
			  {
				  imgs[i].src="./images/small.jpg";
				  imgs[i].parentNode.className="a-img small";
				  }			  
		   }
		   
		  carBtn.onclick=function(){ 
		    //改变按钮的class的值
			  listBtn.className="btn-list-off";
			  carBtn.className="btn-car-on";
			  
			  //改变每一张图片的路径以及它对应的父节点的class的值
			  for(var i=0; i<imgs.length; i++)
			  {
				  imgs[i].src="./images/big.jpg";
				  imgs[i].parentNode.className="a-img";
				  }		
		  }
		   
	}


