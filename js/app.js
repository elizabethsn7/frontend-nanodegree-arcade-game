// Enemies our player must avoid
var Enemy = function(x, y, speed) {
    this.x = x;
    this.y = y;
    this.speed = 100;
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
// 
    this.x += this.speed*dt;
        if (this.x > 500){
            this.x =0;
        }
    // this is the collision detection
    if (this.x < (player.x + 50) && 
        this.x > (player.x - 50) && 
        this.y < (player.y + 50) && 
        this.y > (player.y - 50)) {
        player.x = 202;
        player.y = 402;
    }
};

// Draws the enemy on the screen
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

var Player = function(x,y,sprite,reset,collides) {
    this.x = x;
    this.y = y;
    this.sprite = 'images/char-cat-girl.png';
    this.reset = this.y;
}; 

Player.prototype.update = function(dt) {
};
// draws player on screen
Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);  
};

Player.prototype.handleInput = function(allowedKeys) {
    //this moves the player around with arrows
    if (allowedKeys == 'up'){
        this.y -= 100;
    }
    if (allowedKeys =='down'){
        this.y += 100;
    }
    if (allowedKeys == 'left'){
        this.x -= 100;
    }
    if (allowedKeys == 'right'){
        this.x += 100;
    }

    // keeps player from moving off board
    if (this.y <= 0){
        this.y = this.reset;
    }
    if (this.y >= 420){
        this.y = 420;
    }
    if (this.x >= 400){
        this.x = 400;
    }
    if (this.x <= 10){
        this.x = 0;
    }
};

var enemy1 = new Enemy(330,60,100);
var enemy2 = new Enemy(75,145,200);
var enemy3 = new Enemy(200,230,300);

var allEnemies = [enemy1, enemy2, enemy3];

var player = new Player (200,420);

document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});