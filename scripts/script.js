$(document).ready(function() {

    //How many boxes?
    var boxNum = 60

    //Generate Boxes
    var boxGen = document.getElementById("empty");
    for (var i = 0; i < boxNum; i++) {
        boxGen.innerHTML += '<div class="box"></div>';
    }

    //Change div colour individually
    //Random circle colour
    function randomColor() {

        $('.box').each(function() {
          r = Math.floor(Math.random() * (256))
          g = Math.floor(Math.random() * (256))
          b = Math.floor(Math.random() * (256))
            $(this).css('background-color', 'rgb(' + r + ',' + g + ',' + b + ')')
        })
    }
    randomColor();
    var t = setInterval(randomColor, 500)


    //Circle grow and shrink loop
    setInterval(function() {
        $(".box").animate({
            height: 700,
            width: 700,
            'border-radius': '50%'
        }, 10000)

        $(".box").animate({
            height: 0,
            width: 0,
            'border-radius': '0%'
        }, 10000)
    })

})
