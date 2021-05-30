function preload() {

}

function setup()
{
    canvas = createCanvas(640, 480);
    canvas.position(350, 250);
    video = createCapture(VIDEO);
    video.hide();
}

function draw()
{
    image(video, 10,10, 60, 60);
    tint(tint_colour);

    background(220)
    fill(255,0,255)
    stroke(black)
}


function take_snapshot()
{
    save(photo.png);
}