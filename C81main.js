canvas=document.getElementById("draw");
ctx=canvas.getContext("2d");
colour="#76a0e3";
var gap=75
for (var i=0;i<2;i++){
    ctx.beginPath();
    ctx.strokeStyle=colour;
    ctx.lineWidth=5;
    ctx.arc(500+gap,300,50,0,2*Math.PI);
    ctx.stroke();
   gap=gap+75

}
var new_gap=75
for (var j=0;j<3;j++){
    ctx.beginPath();
    ctx.strokeStyle=colour;
    ctx.lineWidth=5;
    ctx.arc(250+gap,230,50,0,2*Math.PI);
    ctx.stroke();
   new_gap=new_gap+75

}

canvas.addEventListener("mousedown",my_mouse_down)
function my_mouse_down(e){
    var x=e.clientX-canvas.offsetLeft;
    var y=e.clientY-canvas.offsetTop;
    console.log("xvalue= "+x+" yvalue= "+y);
    circle(x,y);
}
function circle(x,y){
    ctx.beginPath();
ctx.strokeStyle=colour;
ctx.lineWidth=5;
ctx.arc(x,y,50,0,2*Math.PI);
ctx.stroke();
}
function clearcanvass(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
}