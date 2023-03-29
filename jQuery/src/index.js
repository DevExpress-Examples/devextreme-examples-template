$(function () {
    var count = 0;
    $("#btn").dxButton({
        text: `Click count: ${count}`,
        onClick: function(e){
            count+=1;
            e.component.option("text", `Click count: ${count}`);
        }
    })    
});