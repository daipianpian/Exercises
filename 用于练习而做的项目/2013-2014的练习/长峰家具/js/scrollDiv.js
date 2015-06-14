function AutoScroll(obj){
        $(obj).find("ul:first").animate({
                marginTop:"1px"
        },400,function(){
                $(this).css({marginTop:"10px"}).find("li:first").appendTo(this);
        });
}
$(document).ready(function(){
setInterval('AutoScroll("#sb2")',1000)
});
