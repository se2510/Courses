
const grid = document.querySelector('.grid');
const scoreDisplay = document.querySelector('#score')
const blockWidth = 100;
const blockHeight = 20;
const ballDiameter = 20;
const boardWidth = 560;
const boardHeight = 300;
let timerId;
let xDirection = 2;
let yDirection = 2;
let score = 0 ;

const userStart= [230, 10];
let currentPosition = userStart;

const ballStart = [230, 40];
let ballCurrentPosition = ballStart;

// creating Block
class Block {
    constructor(xAxis, yAxis){
        this.bottomLeft = [xAxis, yAxis];
        this.bottomRight = [xAxis + blockWidth, yAxis];
        this.topLeft = [xAxis, yAxis + blockHeight];
        this.topRight = [xAxis + blockWidth, yAxis + blockHeight];
    }
}

// All my blocks
const blocks = [ 
    new Block(10,270),
    new Block(120,270),
    new Block(230,270),
    new Block(340,270),
    new Block(450,270),

    new Block(10,240),
    new Block(120,240),
    new Block(230,240),
    new Block(340,240),
    new Block(450,240),

    new Block(10,210),
    new Block(120,210),
    new Block(230,210),
    new Block(340,210),
    new Block(450,210)

]

// draw my block
function addBlocks(){
    for(let i = 0; i < blocks.length; i++){
        const block = document.createElement('div');
        block.classList.add('block');
        block.style.left = blocks[i].bottomLeft[0] + 'px';
        block.style.bottom = blocks[i].bottomLeft[1] + 'px';
        grid.appendChild(block);
    }
}

addBlocks();

// Add user
const user = document.createElement('div')
user.classList.add('user');
drawUser();
grid.appendChild(user);

// Creating the ball
const ball = document.createElement('div');
ball.classList.add('ball');
drawBall()
grid.appendChild(ball);

// Draw de user
function drawUser() {
    user.style.left = currentPosition[0] + 'px';
    user.style.bottom = currentPosition[1] + 'px';
}

// Draw the ball
function drawBall() {
    ball.style.left = ballCurrentPosition[0] + 'px';
    ball.style.bottom = ballCurrentPosition[1] + 'px';
}

// Move user 
function moveUser(e) { // e es event
    switch(e.key){
        case 'ArrowLeft':
            if(currentPosition[0] > 0){
                currentPosition[0] -= 10;
                drawUser();
            }
            break;
        case 'ArrowRight':
            if(currentPosition[0] < boardWidth - blockWidth){
                currentPosition[0] += 10;
                drawUser();
            }
            break;

    }
}

document.addEventListener('keydown', moveUser);

// Move the ball
function moveBall() {
    ballCurrentPosition[0] += xDirection;
    ballCurrentPosition[1] += yDirection;
    drawBall();
    checkForCollitions();
}

timerId = setInterval(moveBall,30);

// Check for collitions
function checkForCollitions() {
    // Check for block collitions D:
    for (let i = 0; i < blocks.length; i++){
        if (
            (ballCurrentPosition[0] > blocks[i].bottomLeft[0] && ballCurrentPosition[0] < blocks[i].bottomRight[0]) && 
            ((ballCurrentPosition[1] + ballDiameter) > blocks[i].bottomLeft[1] && ballCurrentPosition[1] < blocks[i].topLeft[1])
        ){
            const allBlocks = Array.from(documents.querySelectorAll('.block'));
            allBlocks[i].classList.remove('block');
            blocks.splice(i, 1);
            changeDirection();
            score++;
            scoreDisplay.textContent = score;

            // Check for the win! >:D
            if (blocks.length === 0 ){
                scoreDisplay.textContent = 'You win! uwu';
                clearInterval(timerId);
                document.removeEventListener('keydown', move);
            }
        }
    }

    // Check for wall collitions
    if(
        ballCurrentPosition[0] >= (boardWidth - ballDiameter) || 
        ballCurrentPosition[1] >= (boardHeight - ballDiameter)  ||
        ballCurrentPosition[0] <= 0
        ){
            changeDirection();
    }

    // Check for user collitions
    if (
        (ballCurrentPosition[0] > currentPosition[0] && ballCurrentPosition[0] < (currentPosition[0]+blockWidth)) &&
        (ballCurrentPosition[1] > currentPosition[1] && ballCurrentPosition[1] < (currentPosition[1] + blockHeight))
        ){
            changeDirection();
    }

    // Check for game over 
    if (ballCurrentPosition[1] <= 0 ){
        clearInterval(timerId);
        scoreDisplay.textContent = 'You Lose';
        document.removeEventListener('keydown', moveUser)
    }
}

// Change the direction
function changeDirection(){ 
    if(xDirection === 2 && yDirection === 2){
        yDirection = -2;
        return;
    }
    if (xDirection === -2 && yDirection === 2){
        xDirection = 2;
        return;
    }
    if (xDirection === -2 && yDirection === -2){
        yDirection = 2;
        return;
    }
    if (xDirection === 2 && yDirection === -2) {
        xDirection = -2;
        return;
    }
}