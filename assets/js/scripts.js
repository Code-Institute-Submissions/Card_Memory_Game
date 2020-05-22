$("#welcome-btn").click(function() {
    $("#welcome-msg").fadeOut(1000);
});

/* Wait for the page to load before executing code */
window.onload = function() {
    let flipsCount = 0;
    let openCards = [];
    let lockGame = 0;

    if (lockGame === 1) {}

    /* Code to be executed when a card is clicked on */
    $(".card").click(function() {
        if (lockGame === 0) {
            flipsCount ++;
            let id = this.id.split(" ");
            openCards.push(id);
            
            /* Flip animation on clicked card*/
            $(this).css({"transform": "rotateY(360deg)"});
            $(this).find(".back").fadeOut(750);
            /* Adding a placeholder class to clicked card */
            $(this).addClass("open");

            /* If two cards are flipped check pair and reset flipsCount */
            if (flipsCount === 2) {
                lockGame++;
                checkPair();
                flipsCount = 0;
            };

        } else {
            
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
            setTimeout(flipBack, 2000);
        };
    };

    /* Function to flip back cards which don't match */
    function flipBack() {
        console.log("FlipBack function is being processed");
        $(".open").css({"transform": "rotateY(-360deg)"});
        $(".open").find(".back").fadeIn(750);
        $(".open").removeClass("open");
        lockGame--;
        openCards = [];
    };
};