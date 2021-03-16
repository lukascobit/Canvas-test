
window.addEventListener("load", () => {

    let ran = Math.round(Math.random()*100);
    let painting = false;

    const canvas = document.querySelector("canvas");
    const c = canvas.getContext("2d");

    canvas.height = window.innerHeight -30; //1143
    canvas.width = window.innerWidth -30;//2370
   

    



    c.fillStyle = "green";
    c.lineWidth = 25;
    c.strokeStyle = "red";
    c.fillRect(50,50,500,500);
    c.strokeRect(1000,100,200,500);
    c.strokeStyle = "blue";
    c.lineWidth = 50;
    c.strokeRect(2000,100,200,300);


    c.lineWidth = 15;
    c.beginPath();
    c.lineCap = "round";
    c.moveTo(200,500);
    c.lineTo(235,524);
    c.lineTo(651,515);

    c.lineTo(ran,ran);
    c.closePath();
    c.stroke();

    function start(){
        painting = true;
    }

    function stop(){
        painting = false;
    }

    function Draw(e){
        if (painting == false) return;
        c.strokeStyle = "gray";
        c.lineWidth = 10;
        c.lineCap = "round";
        c.lineTo(e.clientX,e.clientY);
        c.stroke();

        
        
    }

    canvas.addEventListener("mousedown",start);
    canvas.addEventListener("mouseup",stop);
    canvas.addEventListener("mousemove",Draw);
    
   



});



