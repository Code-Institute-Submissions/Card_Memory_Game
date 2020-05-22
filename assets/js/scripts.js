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
            let id = this.id.split(" ")[0];
            openCards.push(id);

            /* Remove interaction on clicked card */
            $(this).addClass("inactive");
            /* Flip animation on clicked card*/
            $(this).css({"transform": "rotateY(360deg)"});
            $(this).find(".back").fadeOut(750);
            /* Adding a placeholder class to clicked card */
            $(this).addClass("open");

            /* If two cards flipped execute code */
            if (flipsCount === 2) {

                /* Reset flipsCount and lock the game */
                flipsCount = 0;
                lockGame = true;
                /* check if cards match */
                checkPair();
                /* Increase the turns counter and output it to the #turns div */
                turnsCounter++;
                $("#turns").html(turnsCounter);
            };

        } else {
            console.log("Waiting for gameLock release")
        }
    });


    /* Function to check if open cards match */
    function checkPair() {
        if (openCards[0] === openCards[1]) {
            console.log("Match!");
            $(".open").removeClass("open");
            /* Remove game lock and reset openCards array */
            lockGame = false;
            openCards = [];
        } else {
            console.log("No match!");
            setTimeout(flipBack, 1500);
        };
    };

    /* Function to flip back cards which don't match */
    function flipBack() {
        console.log("FlipBack function is being processed");
        /* Flip back animation */
        $(".open").css({"transform": "rotateY(-360deg)"});
        $(".open").find(".back").fadeIn(750);
        /* Remove placeholder class and add back interaction */
        $(".open").removeClass("inactive");
        $(".open").removeClass("open");
        /* Remove game lock and nulify openCards array */
        lockGame = false;
        openCards = [];
    };
};