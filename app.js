document.addEventListener('DOMContentLoaded' , () => {
    const bird = document.querySelector('.bird')
    const gameDisplay = document.querySelector('.game-container')
    const ground = document.querySelector('.ground-moving')

    var val=0
    var txt="$"
    let birdLeft= 220
    let birdBottom= 100
    let gravity= 3
    let isGameOver= false
    let gap=500  

    function startGame() {
        birdBottom -= gravity
        bird.style.bottom = birdBottom + 'px'
        bird.style.left = birdLeft + 'px'
    }
    let gameTimerId = setInterval(startGame, 20)

    function control(e) {
        if (e.keyCode === 69){
            jump()
        }
    }


    function jump() {
        if (birdBottom<500) birdBottom += 70  
        bird.style.bottom = birdBottom +'px'
        console.log(birdBottom)
    }

    document.addEventListener('keyup',control)



    function generateObstacle(){
        let obstacleLeft=500
        let randomHeight=Math.random() * 60
        let obstacleBottom= randomHeight
        const obstacle= document.createElement('div')
        const topObstacle =document.createElement('div')
        
        
        val=val+0.1
        var stringsToInsert = [val, txt],
        stringToInsert = stringsToInsert.join(' ');
        var price= document.createTextNode(stringToInsert)
        obstacle.appendChild(price)
        
    
        if (!isGameOver) {
            obstacle.classList.add('obstacle')
            topObstacle.classList.add('topObstacle')
        
        }

        gameDisplay.appendChild(obstacle)
        gameDisplay.appendChild(topObstacle)
        obstacle.style.left = obstacleLeft+ 'px'
        topObstacle.style.left = obstacleLeft+ 'px'
        obstacle.style.bottom=obstacleBottom + 'px'
        topObstacle.style.bottom=obstacleBottom + gap + 'px'




        function moveObstacle() {
            obstacleLeft -=2
            obstacle.style.left= obstacleLeft + 'px'
            topObstacle.style.left= obstacleLeft + 'px'

            if (obstacleLeft === -60){
                clearInterval(timerId)
                gameDisplay.removeChild(obstacle)
                gameDisplay.removeChild(topObstacle)
            }

            if ( (birdBottom< obstacleBottom+153 || birdBottom > obstacleBottom+gap-200)  && obstacleLeft>200 && obstacleLeft<280 && birdLeft===220 || birdBottom <3){
                gameOver()
                clearInterval(timerId)
            }

        }
        var body = document.getElementsByClassName('sky')[0];
        var ground= document.getElementsByClassName('ground-moving')[0];
        if (val>1){
            body.style.backgroundImage = 'url(img/moon.png)';
            ground.style.backgroundImage = 'url(img/bottom-moon.png)';
        }

        if (val>10){
            body.style.backgroundImage = 'url(img/mars.png)';
            ground.style.backgroundImage = 'url(img/bottom-mars.png)';
        }
        if (val>20){
            body.style.backgroundImage = 'url(img/venus.png)';
            ground.style.backgroundImage = 'url(img/bottom-venus.png)';
        }

        if (val>40){
            body.style.backgroundImage = 'url(img/pluto.png)';
            ground.style.backgroundImage = 'url(img/bottom-pluto.png)';
        }
        if (val>80){
            body.style.backgroundImage = 'url(img/ceres.png)';
            ground.style.backgroundImage = 'url(img/bottom-ceres.png)';
        }

        if (val>160){
            body.style.backgroundImage = 'url(img/europa.png)';
            ground.style.backgroundImage = 'url(img/bottom-europa.png)';
        }
        if (val>320){
            body.style.backgroundImage = 'url(img/titan.png)';
            ground.style.backgroundImage = 'url(img/bottom-titan.png)';
        }

        

        let timerId= setInterval(moveObstacle,20)
        if (!isGameOver) setTimeout(generateObstacle, 3000)
    
    }
    

    generateObstacle()

    function gameOver(){
        clearInterval(gameTimerId)
        console.log('game over')
        isGameOver=true
        document.removeEventListener('keyup', control)
        ground.classList.add('ground')
        ground.classList.remove('ground-moving')

    }  
    
})