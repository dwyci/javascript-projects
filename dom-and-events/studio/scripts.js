function init() {
    const takeoffButton = document.getElementById("takeoff");
    const landingButton = document.getElementById("landing");
    const missionAbortButton = document.getElementById("missionAbort");
    //directions
    const upButton = document.getElementById("up");
    const downButton = document.getElementById("down");
    const leftButton = document.getElementById("left");
    const rightButton = document.getElementById("right");

    takeoffButton.addEventListener("click",function(){
             const confirmation = confirm('Are you ready for take off?');
        if(confirmation){
            const flightStatusParagraph = document.getElementById('flightStatus');
            const shuttleBackground = document.getElementById('shuttleBackground');
            const spaceShuttleHeight = document.getElementById('spaceShuttleHeight');
            
            flightStatusParagraph.textContent("Shuttle in flight");
            shuttleBackground.style.backgroundColor = 'blue';
            spaceShuttleHeight.textContent = parseInt(spaceShuttleHeight.textContent) + 10000;

        }
    }); 
    landingButton.addEventListener("click", function(){
        alert('The shuttle is landing. Landing gear engaged.');
            const flightStatusParagraph = document.getElementById('flightStatus');
            const shuttleBackground = document.getElementById('shuttleBackground');
            const spaceShuttleHeight = document.getElementById('spaceShuttleHeight');
        flightStatusParagraph.textContent = 'The shuttle has landed';
        shuttleBackground.style.background = 'green';
        spaceShuttleHeight.textContent = 0;
});   
    missionAbortButton.addEventListener("click", function(){
          const confirmation = confirm('Do you want to abort the mission?');
          if(confirmation){
            const flightStatusParagraph = document.getElementById('flightStatus');
            const shuttleBackground = document.getElementById('shuttleBackground');
            const spaceShuttleHeight = document.getElementById('spaceShuttleHeight');

            flightStatusParagraph.textContent = 'Mission aborted';
            shuttleBackground.style.background = 'green';
            spaceShuttleHeight.textContent = 0;

          }

    });
    // changingd direction

    upButton.addEventListener("click", function(){
        moveRocket("up");
        spaceShuttleHeight.textContent = parseInt(spaceShuttleHeight.textContent) + 10000;

    });

    downButton.addEventListener("click", function(){
        moveRocket("down");
        spaceShuttleHeight.textContent = parseInt(spaceShuttleHeight.textContent) - 10000;

    });

    leftButton.addEventListener("click", function(){
        moveRocket("right");
    });

    rightButton.addEventListener("click", function(){
        moveRocket("left");
    });

    //function to move rocket image
    function moveRocket(direction){
        const rocket = document.getElementById("rocket");
        const shuttleHeight = parseInt(spaceShuttleHeight.textContent);
        switch(direction){
            case "up":
                shuttleBackground.style.top = (parseInt(shuttleBackground.style.top) - 10) + "px";
                break;

            case "down":
                shuttleBackground.style.top = (parseInt(shuttleBackground.style.top) +10) + "px";
                break;

            case "right":
                shuttleBackground.style.left = (parseInt(shuttleBackground.style.left) +10) + "px";
                break;

            case "left":
                shuttleBackground.style.left = (parseInt(shuttleBackground.style.left) - 10) + "px";
                break;

        }
    }
}
        window.addEventListener("load", function(){
            console.log('window loaded');
            init();
        

    
        });