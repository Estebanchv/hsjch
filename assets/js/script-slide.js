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


/*
var div1 = $('.card1');
var div2 = $('.card2');
var div3 = $('.holi1');

// Añade un listener de eventos al primer div para cambiar la opacidad del segundo div a 1


$(".card1").click(function(){
  $('.holi1').css("opacity", 1);
 
});

// Añade un listener de eventos al tercer div para cambiar la opacidad del segundo div a 0


div2.click(function(){
  $('.holi1').css("opacity", 0);
});*/