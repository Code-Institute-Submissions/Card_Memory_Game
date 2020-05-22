$("#welcome-btn").click(function() {
    $("#welcome-msg").fadeOut(1000);
});

window.onload = function() {
    let flipsCount = 0;

    $(".card").click(function() {
        flipsCount ++
        let id = this.id
        $(this).css({'transform': 'rotateY(180deg)'})
        $(this).find(".back").fadeOut(750);
    });
};