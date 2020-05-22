
/* Wait for the page to load before executing code */
window.onload = function() {

    /* Set variables to be used through entire project */
    let flipsCount = 0;
    let openCards = [];
    let lockGame = true;
    let turnsCounter = 0;

    /* Introduction message with game lock release */
    $("#welcome-btn").click(function() {
        $("#welcome-msg").fadeOut(1000);
        lockGame = false;
    });

    /* Code to be executed when a card is clicked on */
    $(".card").click(function() {

        /* Checks if the game is locked */
        if (lockGame === false) {
            flipsCount ++;
            let id = this.id.split(" ");
            openCards.push(id);
            
            /* Flip animation on clicked card*/
            $(this).css({"transform": "rotateY(360deg)"});
            $(this).find(".back").fadeOut(750);
            /* Adding a placeholder class to clicked card */
            $(this).addClass("open");

            /* If two cards are flipped check pair, lock game and reset flipsCount */
            if (flipsCount === 2) {
                lockGame = true;
                turnsCounter++;
                $("#turns").html(turnsCounter);
                console.log(turnsCounter);
                checkPair();
                flipsCount = 0;
            };

        } else {
            console.log("Waiting for gameLock release")
        }
    });


    /* Function to check if open cards match */
    function checkPair() {
        if (openCards[0][0] === openCards[1][0]) {
            console.log("Match!");
            openCards = [];
            $(".open").removeClass("open");
        } else {
            console.log("No match!");
            setTimeout(flipBack, 1500);
        };
    };

    /* Function to flip back cards which don't match */
    function flipBack() {
        console.log("FlipBack function is being processed");
        $(".open").css({"transform": "rotateY(-360deg)"});
        $(".open").find(".back").fadeIn(750);
        $(".open").removeClass("open");
        lockGame = false;
        openCards = [];
    };
};