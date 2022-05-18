 //game variables
const gameOverSound = new Audio("../assets/sounds/gameover.mp3");
const music = new Audio("../assets/sounds/music.mp3");
      music.loop = true;
      music.volume = 0.5;
const debugModeIsOn = false;
const startKey = "s";
const restartKey = "r";
const selvmordkey = "p";
const hitboxColor = "#00FF02";
const destructionXPosition = -1000;
const spawnXPosition = canvas.width * 1.2
let gameState = "menu"; // menu, action or gameover

// bird variables
const birdImage = new Image(90, 90);
      birdImage.src = "../assets/images/bird2.png";
const birdStartYPosition = 250;
const birdStartYSpeed = 0;
const birdStartYAccelleration = 0;
const birdBeginningYAccelleration = 0.7;
const birdXPosition = 250;
const birdHitboxRadius = 30;
const birdFlapSound = new Audio("../assets/sounds/flap.wav");
const birdFlapForce = -12;
const birdFlapKey = " ";
let birdYSpeed = birdStartYSpeed;
let birdYAccelleration = birdStartYAccelleration;
let birdYPosition = birdStartYPosition;
let birdCanFlap = false;

//bagground
const backroundimage = new Image(1920, 1080);
        backroundimage.src = "../assets/images/Banner.jpg";
const backroundXpostion = canvas.width/2;
const backroundYpostion = canvas.height/2;

// score variables
const scoreImage = new Image(60, 60);
      scoreImage.src = "../assets/images/coin.png";
const scoreImageXPosition = 70;
const scoreImageYPosition = 70;
const scoreTextXPosition = 100;
const scoreTextYPosition = 90;
const scoreTextSize = 50;
const scoreTextColor = "yellow";
let scoreValue = 0;

// cloud variables
const cloudImage = new Image(200, 200);
      cloudImage.src = "../assets/images/cloud.png";
const cloudSpawnInterval = 10000; // milliseconds
const cloudXSpeed = -.7;
let cloudTimeSinceLastSpawn = 0; // milliseconds
let clouds = [
    {
        xPosition: canvas.width,
        yPosition: randomBetween(0, canvas.height/2), 
    },
    {
        xPosition: canvas.width -500,
        yPosition: randomBetween(0, canvas.height/2), 
    },
    {
        xPosition: canvas.width-1000,
        yPosition: randomBetween(0, canvas.height/2), 
    },
];

// fireball variables
const fireballImage = new Image(350, 350);
      fireballImage.src = "../assets/images/fireball.png";
let fireballXSpeed = -5.5;
const fireballHitboxRadius = 100;
const fireballSpawnInterval = 1000;
let fireballTimeSinceLastSpawn = fireballSpawnInterval;
let fireballs = [];


// coin variables
const coinSound = new Audio("../assets/sounds/coin.wav");
const coinImage = scoreImage;
const coinHitboxRadius = 30;
const coinXSpeed = -10;
let coinSpawnInterval = 1000;
const coinValue = 1;
let coinTimeSinceLastSpawn = coinSpawnInterval
let coins = [];

// menu text variables
const menuFirstText = "Press " + startKey + " to start";
const menuTextXPosition = 300;
const menuTextYPosition = 400; 
const menuSecondText = "Press space to flap wings";
const menuTextSize = 60;
const menuTextColor = "yellow";
const gameOverText = "Press " + restartKey + " to restart";

//game text variables
const gametext ="press " + selvmordkey + " to kill yourself"; 
const gametextXposition = 850;
const gametextYposition = 100;
const gametextsize = 100;
const gametextcolor = "rgb(255, 0, 0)";

// Diamond variables
const DiamondSound = coinSound;
const DiamondImage = new Image(60, 60);
      DiamondImage.src = "../assets/images/Diamond.png";
const DiamondHitboxRadius = 30;
const DiamondXSpeed = -10;
const DiamondSpawnInterval = 2000;
const DiamondValue = 10;
let DiamondXPosition = 0;
let DiamondYPosition = 0;
let DiamondTimeSinceLastSpawn = DiamondSpawnInterval
let Diamonds = [];

// star variables
const starimage = new Image(50, 50);
      starimage.src = "../assets/images/star.png";
const starSpawnInterval = 7500; // milliseconds
const starXSpeed = -.5;
let starTimeSinceLastSpawn = 0; // milliseconds
let stars = [
    {
        xPosition: canvas.width,
        yPosition: randomBetween(0, canvas.height/3), 
    },
    {
        xPosition: canvas.width -500,
        yPosition: randomBetween(0, canvas.height/3), 
    },
    {
        xPosition: canvas.width-1000,
        yPosition: randomBetween(0, canvas.height/3), 
    },
];

// Building variables
const buildingImage = new Image(400, 400);
      buildingImage.src = "../assets/images/House.png";
const buildingSpawnInterval = randomBetween(6000, 8000); // milliseconds
const buildingXSpeed = -.7;
let buildingTimeSinceLastSpawn = 0; // milliseconds
let buildings = [
    {
        xPosition: canvas.width,
        yPosition: 880, 
    },
    {
        xPosition: canvas.width -500,
        yPosition: 880,
    },
    {
        xPosition: canvas.width-1000,
        yPosition: 880, 
    },
];