document.addEventListener('DOMContentLoaded', function (){

    const gameArena=document.getElementById('game-arena')
    const arenaSize=600;
    const sellSize=20;
    let score=0;  // score the game
    let gameStarted=false // Game status
    let food={x:300,y:300} // cell coordinate -> pixels
    let snake=[{x:160,y:200},{x:140,y:200},{x:120,y:200}]


    function drawDiv(x,y,className){
        const divElement=document.createElement('div')

    }

    function drawFoodAndSnake(){
        gameArena.innerHTML=''

        const foodElement=drawDiv(food.x,food.y, 'food')
    }


    function runGame(){
        if(!gameStarted){
            gameStarted=true

        }
    }

    function initiateGame(){
        const scoreBoard=document.createElement("div")
        scoreBoard.id='score-board'

        document.body.insertBefore(scoreBoard,gameArena) // Insert score board before arena

        const startButton=document.createElement('button')
        startButton.textContent='Start Game'
        startButton.classList.add('start-button')

        startButton.addEventListener('click',function startGame(){
            startButton.style.display='none';

            runGame()
        })

        document.body.appendChild(startButton) // Append start button to the body
    }
    initiateGame()

})