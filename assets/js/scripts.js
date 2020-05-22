$("#welcome-btn").click(function() {
    $("#welcome-msg").fadeOut(1000);
});

window.onload = function() {
    let flipsCount = 0;
    let openCards = [];

    
    $(".card").click(function() {
        flipsCount ++
        let id = this.id.split(" ")
        openCards.push(id);
        /* Flip animation on clicked card */
        $(this).css({'transform': 'rotateY(180deg)'})
        $(this).find(".back").fadeOut(750);

        if (flipsCount === 2) {
            checkPair()
            flipsCount = 0
        }
    });

    function checkPair() {
        console.log(openCards);
        if (openCards[0][0] === openCards[1][0]) {
            console.log("Match!")
            openCards = [];
        } else {
            console.log("No match!")
        }
    };
};