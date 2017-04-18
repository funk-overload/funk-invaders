import * as PIXI from 'pixi.js';

var renderer = PIXI.autoDetectRenderer(256, 256, {backgroundColor: 0x1099bb});
renderer.view.style.border = "1px dashed black";
document.body.appendChild(renderer.view);

var stage = new PIXI.Container();
var texture = PIXI.Texture.fromImage('images/bunny.png');
var bunny = new PIXI.Sprite(texture);
bunny.anchor.x = 0.5;
bunny.anchor.y = 0.5;
bunny.position.x = 128;
bunny.position.y = 128;
bunny.scale.x = 2;
bunny.scale.y = 2;
stage.addChild(bunny);

class BunnyData {
    vx: number = 1;
    vy: number = 1;
    vr: number = 0.01;
}
let bunnyData = new BunnyData();

animate();

function animate() {
    requestAnimationFrame(animate);
    var bunny = stage.getChildAt(0);
    bunny.rotation += bunnyData.vr;
    bunny.x += bunnyData.vx;
    bunny.y += bunnyData.vy;
    if (bunny.y > renderer.height){
        bunnyData.vy = ((Math.random() * 2) + 1) * -1;
    }
    if (bunny.y < 0){
        bunnyData.vy = ((Math.random() * 2) + 1);
    }
    if (bunny.x > renderer.width){
        bunnyData.vx = ((Math.random() * 2) + 1) * -1;
    }
    if (bunny.x < 0){
        bunnyData.vx = ((Math.random() * 2) + 1);
    }

    renderer.render(stage);
}
