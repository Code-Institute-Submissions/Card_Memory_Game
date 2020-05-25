/* Wait for the page to load before executing code */
window.onload = function() {

    /* Set variables to be used through entire project */
    let flipsCount = 0;
    let openCards = [];
    let lockGame = true;
    let turnsCounter = 0;
    let userName = "";
    let matchedCards = 0;

    /* Retrieves username from Local Storage and applies it to the holding container */
    userName = localStorage.getItem("userNameStorage");
    $("#username-holder").html(userName);

    /* Introduction message with game lock release */
    $("#welcome-btn").click(function() {
        $("#welcome-msg").fadeOut(1000);
        lockGame = false;
        shuffleCards();
    });

    /* Retrieves user's input and sets it as a name */
    $("#set-name").click(function() {
        userName = $("#username").val();
        localStorage.setItem("userNameStorage", userName);
        $("#username-holder").html(userName);
    })

    /* Resets the game when a Reset button is clicked */
    $(".reset").click(function() {
        /* Reset turns counter and other variables */
        turnsCounter = 0;
        $("#turns").html(turnsCounter);
        flipsCount = 0;
        openCards = [];
        lockGame = true;
        /* Makes sure the victory msg is hidden in case user already won */
        $("#victory-msg").hide();
        /* Reset all cards status and flip them back */
        $(".card").removeClass("inactive");
        $(".card").removeClass("open");
        $(".card").css({"transform": "rotateY(360deg)"});
        $(".card").find(".back").fadeIn(0);
        /* Shuffle cards function */
        shuffleCards();
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
            $(this).css({"transform": "rotateY(180deg)"});
            $(this).find(".back").fadeOut(750);
            /* Adding a placeholder class to clicked card */
            $(this).addClass("open");

            /* If two cards flipped execute code */
            if (flipsCount === 2) {

                /* Reset flipsCount and lock the game */
                flipsCount = 0;
                lockGame = true;
                /* Increase the turns counter and output it to the #turns div */
                turnsCounter++;
                $("#turns").html(turnsCounter);
                /* check if cards match */
                checkPair();
            };

        } else {
            console.log("Waiting for gameLock release")
        };
    });

    /* Function to check if open cards match */
    function checkPair() {
        if (openCards[0] === openCards[1]) {
            console.log("Match!");
            $(".open").removeClass("open");
            /* Remove game lock and reset openCards array */
            lockGame = false;
            openCards = [];
            matchedCards++;
            /* If all cards are matched show the victory-msg */
            if (matchedCards === 8) {
                console.log("Game won!")
                $("#victory-msg").show();
                $("#turnsMade").html(turnsCounter)
            }
        } else {
            console.log("No match!");
            setTimeout(flipBack, 1000);
        };
    };

    /* Function to flip back cards which don't match */
    function flipBack() {
        console.log("FlipBack function is being processed");
        /* Flip back animation */
        $(".open").css({"transform": "rotateY(-180deg)"});
        $(".open").find(".back").fadeIn(750);
        /* Remove placeholder class and add back interaction */
        $(".open").removeClass("inactive");
        $(".open").removeClass("open");
        /* Remove game lock and nulify openCards array */
        lockGame = false;
        openCards = [];
    };

    /* This function shuffles the cards */
    function shuffleCards() {
        /* Create an array out of cards */
        let cards = Array.from(document.getElementsByClassName("card"));
        for(i = 0; i < 16; i++ ) {
            /*  create a random number */      
            let randomize = Math.floor(Math.random() * (i+1));
            /* Select a card and randomize it's order style */
            cards[i].style.order = randomize;
        };
    };
};