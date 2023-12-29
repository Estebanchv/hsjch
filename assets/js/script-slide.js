$(".super_slider .option").click(function () {
  $(".option").removeClass("active");
  $(this).addClass("active");
});

$(".super_slider .option").click(function () {
  $(".prueba").removeClass("active");
  $(".prueba").addClass("active");
});

//1
$(".prueba .ic1").hover(function () {
  $(".slide_text1").removeClass("escondido");
    },
    function() {
      // Esta función se ejecuta cuando el cursor sale del elemento
      $(".slide_text1").addClass("escondido");
    }
  );
//2
  $(".prueba .1c2").hover(function () {
    $(".slide_text2").removeClass("escondido");
      },
      function() {
        // Esta función se ejecuta cuando el cursor sale del elemento
        $(".slide_text2").addClass("escondido");
      }
    );
    $(".prueba .1c3").hover(function () {
      $(".slide_text3").removeClass("escondido");
        },
        function() {
          // Esta función se ejecuta cuando el cursor sale del elemento
          $(".slide_text3").addClass("escondido");
        }
      );
  
      $(".prueba .1c4").hover(function () {
        $(".slide_text4").removeClass("escondido");
          },
          function() {
            // Esta función se ejecuta cuando el cursor sale del elemento
            $(".slide_text4").addClass("escondido");
          }
        );
      
  


  
$(".option.opts_l1").click(function(){
  $(".div1_slider").removeClass("escondido");
  $(".div2_slider").addClass("escondido");
  $(".div3_slider").addClass("escondido");
  $(".div4_slider").addClass("escondido");
  $(".div5_slider").addClass("escondido");

  $(".div2_slider").addClass("adelgazar");
  $(".div3_slider").addClass("adelgazar");
  $(".div4_slider").addClass("adelgazar");
  $(".div5_slider").addClass("adelgazar");
  $(".div1_slider").removeClass("adelgazar");
});

$(".option.opts_l2").click(function(){
  $(".div2_slider").removeClass("escondido");
  $(".div1_slider").addClass("escondido");
  $(".div3_slider").addClass("escondido");
  $(".div4_slider").addClass("escondido");
  $(".div5_slider").addClass("escondido");

  $(".div1_slider").addClass("adelgazar");
  $(".div3_slider").addClass("adelgazar");
  $(".div4_slider").addClass("adelgazar");
  $(".div5_slider").addClass("adelgazar");
  $(".div2_slider").removeClass("adelgazar");
});

$(".option.opts_l3").click(function(){
  $(".div3_slider").removeClass("escondido");
  $(".div1_slider").addClass("escondido");
  $(".div2_slider").addClass("escondido");
  $(".div4_slider").addClass("escondido");
  $(".div5_slider").addClass("escondido");

  $(".div1_slider").addClass("adelgazar");
  $(".div2_slider").addClass("adelgazar");
  $(".div4_slider").addClass("adelgazar");
  $(".div5_slider").addClass("adelgazar");
  $(".div3_slider").removeClass("adelgazar");
});
$(".option.opts_l4").click(function(){
  $(".div4_slider").removeClass("escondido");
  $(".div1_slider").addClass("escondido");
  $(".div3_slider").addClass("escondido");
  $(".div2_slider").addClass("escondido");
  $(".div5_slider").addClass("escondido");

  $(".div1_slider").addClass("adelgazar");
  $(".div3_slider").addClass("adelgazar");
  $(".div2_slider").addClass("adelgazar");
  $(".div5_slider").addClass("adelgazar");
  $(".div4_slider").removeClass("adelgazar");
});
$(".option.opts_l5").click(function(){
  $(".div5_slider").removeClass("escondido");
  $(".div1_slider").addClass("escondido");
  $(".div3_slider").addClass("escondido");
  $(".div4_slider").addClass("escondido");
  $(".div2_slider").addClass("escondido");

  $(".div1_slider").addClass("adelgazar");
  $(".div3_slider").addClass("adelgazar");
  $(".div4_slider").addClass("adelgazar");
  $(".div2_slider").addClass("adelgazar");
  $(".div5_slider").removeClass("adelgazar");
});
/*
$(".card1").click(function() {
  $(".holi1").fadeIn(2000);
});

$(".card1").click(function() {
  $(".holi1").fadeOut(2000);
});*/



var div1 = $('.card1');
var div2 = $('.card2');
var div3 = $('.holi1');

// Añade un listener de eventos al primer div para cambiar la opacidad del segundo div a 1


$(".card1").click(function(){
    $(".holi1").animate({opacity: 1}, 1000);
    $(".holi1").css("z-index", "2");
    $(".holi2,.holi3,.holi4,.holi5,.holi6,.holi7,.holi8").css("z-index", "0");
    $(".holi2,.holi3,.holi4,.holi5,.holi6,.holi7,.holi8").animate({opacity: 0}, 1000);
 
});
$(".card2").click(function(){
  $(".holi2").animate({opacity: 1}, 1000);
  $(".holi2").css("z-index", "2");
  $(".holi1,.holi3,.holi4,.holi5,.holi6,.holi7,.holi8").css("z-index", "0");
  $(".holi1,.holi3,.holi4,.holi5,.holi6,.holi7,.holi8").animate({opacity: 0}, 1000);
});
$(".card3").click(function(){
  $(".holi3").animate({opacity: 1}, 1000);
  $(".holi3").css("z-index", "2");
  $(".holi1,.holi2,.holi4,.holi5,.holi6,.holi7,.holi8").css("z-index", "0");
  $(".holi2,.holi1,.holi4,.holi5,.holi6,.holi7,.holi8").animate({opacity: 0}, 1000);
});
$(".card4").click(function(){
    $(".holi4").animate({opacity: 1}, 1000);
    $(".holi4").css("z-index", "2");
    $(".holi1,.holi3,.holi2,.holi5,.holi6,.holi7,.holi8").css("z-index", "0");
    $(".holi2,.holi3,.holi1,.holi5,.holi6,.holi7,.holi8").animate({opacity: 0}, 1000);
});
$(".card5").click(function(){
  $(".holi5").animate({opacity: 1}, 1000);
  $(".holi5").css("z-index", "2");
  $(".holi1,.holi3,.holi4,.holi2,.holi6,.holi7,.holi8").css("z-index", "0");
  $(".holi2,.holi3,.holi4,.holi1,.holi6,.holi7,.holi8").animate({opacity: 0}, 1000);

});
$(".card6").click(function(){
  $(".holi6").animate({opacity: 1}, 1000);
  $(".holi6").css("z-index", "2");
  $(".holi1,.holi3,.holi4,.holi5,.holi2,.holi7,.holi8").css("z-index", "0");
  $(".holi2,.holi3,.holi4,.holi1,.holi6,.holi7,.holi8").animate({opacity: 0}, 1000);

});
$(".card7").click(function(){
  $(".holi7").animate({opacity: 1}, 1000);
  $(".holi7").css("z-index", "2");
  $(".holi1,.holi3,.holi4,.holi5,.holi6,.holi2,.holi8").css("z-index", "0");
  $(".holi2,.holi3,.holi4,.holi1,.holi6,.holi1,.holi8").animate({opacity: 0}, 1000);
});
$(".card8").click(function(){
  $(".holi8").animate({opacity: 1}, 1000);
  $(".holi8").css("z-index", "2");
  $(".holi1,.holi3,.holi4,.holi5,.holi6,.holi7,.holi8").css("z-index", "0");
  $(".holi2,.holi3,.holi4,.holi1,.holi6,.holi7,.holi1").animate({opacity: 0}, 1000);
});

// Añade un listener de eventos al tercer div para cambiar la opacidad del segundo div a 0


function ocultar() {
  document.getElementsByClassName("holi").style.opacity = "0";
}
/*
$("#hero").hover(function(){
  $(".holi").css("opacity", 0);
  $(".holi1,.holi2,.holi3,.holi4,.holi5,.holi6,.holi2,.holi8").css("z-index", "0");
});0

$("#carrouselflotante").hover(function(){
  $(".holi").css("opacity", 0);
  $(".holi1,.holi2,.holi3,.holi4,.holi5,.holi6,.holi2,.holi8").css("z-index", "0");
});

*/