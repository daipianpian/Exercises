var curIndex=0; 
//时间间隔 单位毫秒 
var timeInterval=1000; 
var arr=new Array(); 
arr[0]="images/img1/006.jpg"; 
arr[1]="images/img1/007.jpg"; 
arr[2]="images/img1/008.jpg"; 
setInterval(changeImg,timeInterval); 
function changeImg() 
{ 
    var obj=document.getElementById("obj"); 
    if (curIndex==arr.length-1)  
    { 
        curIndex=0; 
    } 
    else 
    { 
        curIndex+=1; 
    } 
    obj.src=arr[curIndex]; 
} 
