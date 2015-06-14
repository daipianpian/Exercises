
var t=getid("demo"),t1=getid("demo1"),t2=getid("demo2"),sh=getid("show"),timer;
t2.innerHTML=t1.innerHTML;
function mar(){
if(t2.offsetTop<=t.scrollTop)
t.scrollTop-=t1.offsetHeight;
else
t.scrollTop++;
}
timer=setInterval(mar,30);
function getid(id){
return document.getElementById(id);
}
