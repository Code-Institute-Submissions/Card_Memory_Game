$("#welcome-btn").click(function() {
    $("#welcome-msg").fadeOut(1000);
});

/* Wait for the page to load before executing code */
window.onload = function() {
    let flipsCount = 0;
    let openCards = [];
    
    /* Code to be executed when a card is clicked on */
    $(".card").click(function() {
        flipsCount ++;
        let id = this.id.split(" ");
        openCards.push(id);
        
        /* Flip animation on clicked card*/
        $(this).css({"transform": "rotateY(-180deg)"});
        $(this).find(".back").fadeOut(750);
        /* Adding a placeholder class to clicked card */
        $(this).addClass("open");

        /* If two cards are flipped check pair and reset flipsCount */
        if (flipsCount === 2) {
            checkPair()
            flipsCount = 0
        };

    });


    /* Function to check if open cards match */
    function checkPair() {
        if (openCards[0][0] === openCards[1][0]) {
            console.log("Match!");
            openCards = [];
            $(".open").removeClass("open");
        } else {
            console.log("No match!");
            flipBack();
        };
    };

    /* Function to flip back cards which don't match */
    function flipBack() {
        console.log("Function is processed");
            $(".open").delay(1000).css({"transform": "rotateY(180deg)"});
            $(".open").find(".back").delay(1000).fadeIn(750);
            $(".open").removeClass("open");
            openCards = [];
    };
};