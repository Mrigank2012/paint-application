var mouseEvent = "empty";
var last_position_of_x, last_position_of_y;

    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext("2d");
    
    color = "black";
    width_of_line = 2;
    
    var width=screen.width
    
    new_width=screen.width-70
    new_height=screen.height-300

    if(width<992){
     document.getElementById("mycanvas").width=new_width
     document.getElementById("mycanvas").height=new_height
     document.body.style.overflow="hidden"
    }
    
    canvas.addEventListener("touchstart", my_touchstart);
    function my_touchstart(e){
    console.log("my_touchstart")
    color=document.getElementById("color").value
    width_of_line=documetn.getElementById("width_of_line").value
    last_position_of_x=e.touches[0].clientX-canvas.offsetLeft
    last_position_of_y=e.toches[0].clientY-canvas.offsetTop
}

canvas.addEventListener("touchmore",my_touchmore)
function my_touchmore(e){
    console.log("my_touchmove")
    currentpositionoftouchX=e.touches[0].clientX-canvas.offsetLeft
    currentpositionoftouchY=e.toches[0].clientY-canvas.offsetTop
    ctx.beginPath()
    ctx.strokeStyle=color
    ctx.linewidth=width_of_line

    console.log("lastpositionofxycoordinates")
    console.log(last_position_of_x,last_position_of_y)
    ctx.moveTo(last_position_of_x,last_position_of_y)

    console.log("currentpositonofXYcoordinates")
    console.log(currentpositionoftouchX,currentpositionoftouchY)
    ctx.lineTo(currentpositionoftouchX,currentpositionoftouchY)
    ctx.stroke()

    last_position_of_x=currentpositionoftouchX
    last_position_of_y=currentpositionoftouchY
}

function cleararea(){
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height)
}