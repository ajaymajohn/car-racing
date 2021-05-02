canvas=document.getElementById('myCanvas');
ctx=canvas.getContext("2d");

car1_width=120;
car1_height=70;
background_image="race track.jpg";
car1_image="car1.png";
car1_x=10;
car1_y=10;

car2_width=120;
car2_height=70;
car2_image="OIP.jpg";
car2_x=10;
car2_y=100;

function add(){
    background_ingtag=new Image();
    background_ingtag.onload=upload_background;
    background_ingtag.src=background_image;
    car1_ingtag=new Image();
    car1_ingtag.onload=upload_car1;
    car1_ingtag.src=car1_image;
    car2_ingtag=new Image();
    car2_ingtag.onload=upload_car2;
    car2_ingtag.src=car2_image;
}

function upload_background(){
    ctx.drawImage(background_ingtag,0,0,canvas.width,canvas.height);
}

function upload_car1(){
    ctx.drawImage(car1_ingtag,car1_x,car1_y,car1_width,car1_height);
}

function upload_car2(){
    ctx.drawImage(car2_ingtag,car2_x,car2_y,car2_width,car2_height);
}

window.addEventListener("keydown",my_keydown);

function my_keydown(e){
    keypressed=e.keyCode;
    if(keypressed=='38'){
        car1_up();
    }
    if(keypressed=='40'){
        car1_down();
    }
    if(keypressed=='37'){
        car1_left();
    }
    if(keypressed=='39'){
        car1_right();
    }
    if(keypressed=='87'){
        car2_up();
    }
    if(keypressed=='83'){
        car2_down();
    }
    if(keypressed=='81'){
        car2_left();
    }
    if(keypressed=='68'){
        car2_right();
    }
}