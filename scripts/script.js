$(document).ready(function() {

        setInterval (function(){
          $("div").animate({
              height: 200,
              width: 200,
          }, 3000)

          $("div").animate({
              height: 0,
              width: 0,
          }, 3000)
        })
})
