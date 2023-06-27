$(document).ready(function(){
    //varios
  $("#medialuna").hover(function(){
    $("#pmedialuna").animate({
        height: 'toggle'
    })
  })
  $("#medialunajyq").hover(function(){
    $("#pmedialunajyq").animate({
        height: 'toggle'
    })
  })
  $("#donas").hover(function(){
    $("#pdonas").animate({
        height: 'toggle'
    })
  })
  $("#muffin").hover(function(){
    $("#pmuffin").animate({
        height: 'toggle'
    })
  })
  $("#tostado").hover(function(){
    $("#ptostado").animate({
        height: 'toggle'
    })
  })
  $("#chipa").hover(function(){
    $("#pchipa").animate({
        height: 'toggle'
    })
  })
  $("#chocoBrownie").hover(function(){
    $("#pchocoBrownie").animate({
        height: 'toggle'
    })
  })
  $("#cheesecake").hover(function(){
    $("#pcheesecake").animate({
        height: 'toggle'
    })
  })
  $("#lemonpie").hover(function(){
    $("#plemonpie").animate({
        height: 'toggle'
    })
  })
  $("#alfajor").hover(function(){
    $("#palfajor").animate({
        height: 'toggle'
    })
  })
  $("#vasosPlastico").hover(function(){
    $("#pvasosPlastico").animate({
        height: 'toggle'
    })
  })
  $("#vasosTermico").hover(function(){
    $("#pvasosTermico").animate({
        height: 'toggle'
    })
  })

  //cafe
  $("#cappuccino").hover(function(){
    $("#pcappuccino").animate({
        height: 'toggle'
    })
  })
  $("#mocha").hover(function(){
    $("#pmocha").animate({
        height: 'toggle'
    })
  })
  $("#lungo").hover(function(){
    $("#plungo").animate({
        height: 'toggle'
    })
  })
  $("#cortado").hover(function(){
    $("#pcortado").animate({
        height: 'toggle'
    })
  })
  $("#americano").hover(function(){
    $("#pamericano").animate({
        height: 'toggle'
    })
  })
  $("#macchiato").hover(function(){
    $("#pmacchiato").animate({
        height: 'toggle'
    })
  })
  $("#ristretto").hover(function(){
    $("#pristretto").animate({
        height: 'toggle'
    })
  })
  $("#irish").hover(function(){
    $("#pirish").animate({
        height: 'toggle'
    })
  })
  $("#cafeconleche").hover(function(){
    $("#pcafeconleche").animate({
        height: 'toggle'
    })
  })
  $("#afogatto").hover(function(){
    $("#pafogatto").animate({
        height: 'toggle'
    })
  })
  $("#flatwhite").hover(function(){
    $("#pflatwhite").animate({
        height: 'toggle'
    })
  })
  $("#expresso").hover(function(){
    $("#pexpresso").animate({
        height: 'toggle'
    })
  })
  
  //form
  $("input").focus(function(){
    $(this).css("background-color", "#fef2dd");
  });
  $("input").blur(function(){
    $(this).css("background-color", "rgb(163, 102, 61)");
  });
  $("select").focus(function(){
    $(this).css("background-color", "#fef2dd");
  });
  $("select").blur(function(){
    $(this).css("background-color", "rgb(163, 102, 61)");
  });
  $("textarea").focus(function(){
    $(this).css("background-color", "#fef2dd");
  });
  $("textarea").blur(function(){
    $(this).css("background-color", "rgb(163, 102, 61)");
  });
})