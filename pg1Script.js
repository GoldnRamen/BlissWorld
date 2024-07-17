$(document).ready(function() {
    // Initialize the main slider with autoplay
    $('.productSlider').slick({
         arrows: true,
         autoplay: false,         // Enable autoplay
        // // autoplaySpeed: 500,    // Autoplay speed in milliseconds (2 seconds)
        // centerMode: true,
        // centerPadding: "60px",
         slidesToShow: 1,
         dots: true,
         slidesToScroll: 1,       
   })
  
   $("#prevBtn1").on("click", function(){
     $("#productSlider1").slick("slickPrev")
     })
   $("#nextBtn1").on("click", function(){
          $("#productSlider1").slick("slickNext")
   })
   $("#prevBtn2").on("click", function(){
          $("#productSlider2").slick("slickPrev")
   })
   $("#nextBtn2").on("click", function(){
          $("#productSlider2").slick("slickNext")
   })
  ///////////////////////////////////////////////
   $("#prevBtn3").on("click", function(){
          $("#productSlider3").slick("slickPrev")
   })
   $("#nextBtn3").on("click", function(){
          $("#productSlider3").slick("slickNext")
   })
   ////////////////////////////////////////////////
   $("#prevBtn4").on("click", function(){
          $("#productSlider4").slick("slickPrev")
   })
   $("#nextBtn4").on("click", function(){
          $("#productSlider4").slick("slickNext")
   })
   $("#prevBtn5").on("click", function(){
          $("#productSlider5").slick("slickPrev")
   })
   $("#nextBtn5").on("click", function(){
          $("#productSlider5").slick("slickNext")
   })
   //////////////////////////////////////////////////
   $("#prevBtn6").on("click", function(){
          $("#productSlider6").slick("slickPrev")
     })
     $("#nextBtn6").on("click", function(){
          $("#productSlider6").slick("slickNext")
     })
     $("#prevBtn7").on("click", function(){
          $("#productSlider7").slick("slickPrev")
     })
     $("#nextBtn7").on("click", function(){
          $("#productSlider7").slick("slickNext")
     })
     //////////////////////////////////////////////////
     $("#prevBtn8").on("click", function(){
          $("#productSlider8").slick("slickPrev")
     })
     $("#nextBtn8").on("click", function(){
          $("#productSlider8").slick("slickNext")
     })
     //////////////////////////////////////////////////
     $("#prevBtn9").on("click", function(){
          $("#productSlider9").slick("slickPrev")
     })
     $("#nextBtn9").on("click", function(){
          $("#productSlider9").slick("slickNext")
     })
     $("#prevBtn10").on("click", function(){
          $("#productSlider10").slick("slickPrev")
     })
     $("#nextBtn10").on("click", function(){
          $("#productSlider10").slick("slickNext")
     })
     /////////////////////////////////////////////////
     $("#prevBtn11").on("click", function(){
          $("#productSlider11").slick("slickPrev")
     })
     $("#nextBtn11").on("click", function(){
          $("#productSlider11").slick("slickNext")
     })
     $("#prevBtn12").on("click", function(){
          $("#productSlider12").slick("slickPrev")
     })
     $("#nextBtn12").on("click", function(){
          $("#productSlider12").slick("slickNext")
     })
     //////////////////////////////////////////////////
     $("#prevBtn13").on("click", function(){
          $("#productSlider13").slick("slickPrev")
     })
     $("#nextBtn13").on("click", function(){
          $("#productSlider13").slick("slickNext")
     })
     $("#prevBtn14").on("click", function(){
          $("#productSlider14").slick("slickPrev")
     })
     $("#nextBtn14").on("click", function(){
          $("#productSlider14").slick("slickNext")
     })
     ////////////////////////////////////////////
     $("#prevBtn15").on("click", function(){
          $("#productSlider15").slick("slickPrev")
     })
     $("#nextBtn15").on("click", function(){
          $("#productSlider15").slick("slickNext")
     })
     //////////////////////////////////////////////
     $("#prevBtn16").on("click", function(){
          $("#productSlider16").slick("slickPrev")
     })
     $("#nextBtn16").on("click", function(){
          $("#productSlider16").slick("slickNext")
     })
     ////////////////////////////////////////////
     $("#prevBtn19").on("click", function(){
          $("#productSlider19").slick("slickPrev")
     })
     $("#nextBtn19").on("click", function(){
          $("#productSlider19").slick("slickNext")
     })
     //////////////////////////////////////////////
     $("#nextBtn20").on("click", function(){
          $("#productSlider20").slick("slickNext")
     })
     $("#prevBtn20").on("click", function(){
          $("#productSlider20").slick("slickPrev")
     })
     //////////////////////////////////////////////
     $("#prevBtn22").on("click", function(){
          $("#productSlider22").slick("slickPrev")
     })
     $("#nextBtn22").on("click", function(){
          $("#productSlider22").slick("slickNext")
     })
     ///////////////////////////////////////////////
     $("#prevBtn29").on("click", function(){
          $("#productSlider29").slick("slickPrev")
     })
     $("#nextBtn29").on("click", function(){
          $("#productSlider29").slick("slickNext")
     })
     ///////////////////////////////////////////////
     $("#prevBtn30").on("click", function(){
          $("#productSlider30").slick("slickPrev")
     })
     $("#nextBtn30").on("click", function(){
          $("#productSlider30").slick("slickNext")
     })
     $("#prevBtn31").on("click", function(){
          $("#productSlider31").slick("slickPrev")
     })
     $("#nextBtn31").on("click", function(){
          $("#productSlider31").slick("slickNext")
     })

     $('.B-productSlider').slick({
          arrows: true,
          autoplay: false,
          slidesToShow: 1,
          dots: true,
          slidesToScroll: 1,       
    })
    function shu(){
     var value = parseInt($("#B-quanInput").text())
     console.log(value)
     // increment = value + 1
     // console.log(increment)
     $("#B-quanInput").text(value + 1)
    }
    $("#subB").click(function(){ 
      shu()
    })
    $("#addB").click(function(){
    //////////////////////////////////////////////
    })
    $("#prodDetail1").hover(
          function(){
               $("#cart1").fadeIn()
          },  
          function(){
               $("#cart1").fadeOut()
          }
     )
    $("#prodDetail2").hover(
          function(){
               $("#cart2").fadeIn()
          },  
          function(){
               $("#cart2").fadeOut()
          }
     )
    $("#prodDetail3").hover(
          function(){
               $("#cart3").fadeIn()
          },  
          function(){
               $("#cart3").fadeOut()
          }
     )
    $("#prodDetail4").hover(
          function(){
               $("#cart4").fadeIn()
          },  
          function(){
               $("#cart4").fadeOut()
          }
     )
    $("#prodDetail5").hover(
          function(){
               $("#cart5").fadeIn()
          },  
          function(){
               $("#cart5").fadeOut()
          }
     )
    $("#prodDetail6").hover(
          function(){
               $("#cart6").fadeIn()
          },  
          function(){
               $("#cart6").fadeOut()
          }
     )
    $("#prodDetail7").hover(
          function(){
               $("#cart7").fadeIn()
          },  
          function(){
               $("#cart7").fadeOut()
          }
     )
    $("#prodDetail8").hover(
          function(){
               $("#cart8").fadeIn()
          },  
          function(){
               $("#cart8").fadeOut()
          }
     )
    $("#prodDetail9").hover(
          function(){
               $("#cart9").fadeIn()
          },  
          function(){
               $("#cart9").fadeOut()
          }
     )
    $("#prodDetail10").hover(
          function(){
               $("#cart10").fadeIn()
          },  
          function(){
               $("#cart10").fadeOut()
          }
     )
    $("#prodDetail11").hover(
          function(){
               $("#cart11").fadeIn()
          },  
          function(){
               $("#cart11").fadeOut()
          }
     )
    $("#prodDetail12").hover(
          function(){
               $("#cart12").fadeIn()
          },  
          function(){
               $("#cart12").fadeOut()
          }
     )
    $("#prodDetail13").hover(
          function(){
               $("#cart13").fadeIn()
          },  
          function(){
               $("#cart13").fadeOut()
          }
     )
    $("#prodDetail14").hover(
          function(){
               $("#cart14").fadeIn()
          },  
          function(){
               $("#cart14").fadeOut()
          }
     )
    $("#prodDetail15").hover(
          function(){
               $("#cart15").fadeIn()
          },  
          function(){
               $("#cart15").fadeOut()
          }
     )
    $("#prodDetail16").hover(
          function(){
               $("#cart16").fadeIn()
          },  
          function(){
               $("#cart16").fadeOut()
          }
     )
    $("#prodDetail17").hover(
          function(){
               $("#cart17").fadeIn()
          },  
          function(){
               $("#cart17").fadeOut()
          }
     )
    $("#prodDetail18").hover(
          function(){
               $("#cart18").fadeIn()
          },  
          function(){
               $("#cart18").fadeOut()
          }
     )
    $("#prodDetail19").hover(
          function(){
               $("#cart19").fadeIn()
          },  
          function(){
               $("#cart19").fadeOut()
          }
     )
    $("#prodDetail20").hover(
          function(){
               $("#cart20").fadeIn()
          },  
          function(){
               $("#cart20").fadeOut()
          }
     )
    $("#prodDetail21").hover(
          function(){
               $("#cart21").fadeIn()
          },  
          function(){
               $("#cart21").fadeOut()
          }
     )
    $("#prodDetail22").hover(
          function(){
               $("#cart22").fadeIn()
          },  
          function(){
               $("#cart22").fadeOut()
          }
     )
    $("#prodDetail23").hover(
          function(){
               $("#cart23").fadeIn()
          },  
          function(){
               $("#cart23").fadeOut()
          }
     )
    $("#prodDetail24").hover(
          function(){
               $("#cart24").fadeIn()
          },  
          function(){
               $("#cart24").fadeOut()
          }
     )
    $("#prodDetail25").hover(
          function(){
               $("#cart25").fadeIn()
          },  
          function(){
               $("#cart25").fadeOut()
          }
     )
    $("#prodDetail26").hover(
          function(){
               $("#cart26").fadeIn()
          },  
          function(){
               $("#cart26").fadeOut()
          }
     )
    $("#prodDetail27").hover(
          function(){
               $("#cart27").fadeIn()
          },  
          function(){
               $("#cart27").fadeOut()
          }
     )
    $("#prodDetail28").hover(
          function(){
               $("#cart28").fadeIn()
          },  
          function(){
               $("#cart28").fadeOut()
          }
     )
    $("#prodDetail29").hover(
          function(){
               $("#cart29").fadeIn()
          },  
          function(){
               $("#cart29").fadeOut()
          }
     )
    $("#prodDetail30").hover(
          function(){
               $("#cart30").fadeIn()
          },  
          function(){
               $("#cart30").fadeOut()
          }
     )
    $("#prodDetail31").hover(
          function(){
               $("#cart31").fadeIn()
          },  
          function(){
               $("#cart31").fadeOut()
          }
     )
    $("#prodDetail32").hover(
          function(){
               $("#cart32").fadeIn()
          },  
          function(){
               $("#cart32").fadeOut()
          }
     )
//     $("#STar1").hover(
//      function(){
//           $("#STar1").fadeOut()
//           $("#noStar1").fadeIn()
//                $("#star-Box1").css({
//                     "background-color": "#725ac7"
//                })
//      },
//      function(){
//           $("#STar1").fadeIn()
//           $("#noStar1").fadeOut()
//                $("#star-Box1").css({
//                     "background-color": "transparent"
//                })
//      }

//     )
     $("#STar1").hover(
          function(){
          $("#STar1").hide();
          $("#noStar1").show();
          $("#star-Box1").css({
               "background-color": "#725ac7"
          });
          },
          function(){
          $("#STar1").show();
          $("#noStar1").hide();
          $("#star-Box1").css({
               "background-color": "transparent"
          });
          }
     );
     $("#STar2").hover(
          function(){
          $("#STar1, #STar2").hide();
          $("#noStar1, #noStar2").show();
          $("#star-Box1, #star-Box2").css({
               "background-color": "#725ac7"
          });
          },
          function(){
          $("#STar1, #STar2").show();
          $("#noStar1, #noStar2").hide();
          $("#star-Box1, #star-Box2").css({
               "background-color": "transparent"
          });
          }
     );
     $("#STar3").hover(
          function(){
          $("#STar1, #STar2, #STar3").hide();
          $("#noStar1, #noStar2, #noStar3").show();
          $("#star-Box1, #star-Box2, #star-Box3").css({
               "background-color": "#725ac7"
          });
          },
          function(){
          $("#STar1, #STar2, #STar3").show();
          $("#noStar1, #noStar2, #noStar3").hide();
          $("#star-Box1, #star-Box2, #star-Box3").css({
               "background-color": "transparent"
          });
          }
     );
     $("#STar4").hover(
          function(){
          $("#STar1, #STar2, #STar3, #STar4").hide();
          $("#noStar1, #noStar2, #noStar3, #noStar4").show();
          $("#star-Box1, #star-Box2, #star-Box3, #star-Box4").css({
               "background-color": "#725ac7"
          });
          },
          function(){
          $("#STar1, #STar2, #STar3, #STar4").show();
          $("#noStar1, #noStar2, #noStar3, #noStar4").hide();
          $("#star-Box1, #star-Box2, #star-Box3, #star-Box4").css({
               "background-color": "transparent"
          });
          }
     );
     $("#STar5").hover(
          function(){
          $("#STar1, #STar2, #STar3, #STar4, #STar5").hide();
          $("#noStar1, #noStar2, #noStar3, #noStar4, #noStar5").show();
          $("#star-Box1, #star-Box2, #star-Box3, #star-Box4, #star-Box5").css({
               "background-color": "#725ac7"
          });
          },
          function(){
          $("#STar1, #STar2, #STar3, #STar4, #STar5").show();
          $("#noStar1, #noStar2, #noStar3, #noStar4, #noStar5").hide();
          $("#star-Box1, #star-Box2, #star-Box3, #star-Box4, #star-Box5").css({
               "background-color": "transparent"
          });
          }
     );
     $(".A-disappearingCart").hover(function(){
          $(this).show()
     })

     $(".A-disappearingCart").click(function(){
          $(".blissCart").show()
     })
     // $("#prodDetail1").click(function(){
     //      $("#cart1").removeProp("none")
     // })
     $("#cart1, #cart2, #cart3, #cart4, #cart5, #cart6, #cart7, #cart8, #cart9, #cart10, #cart11, #cart12, #cart13, #cart14, #cart15, #cart16, #cart17, #cart18, #cart19, #cart20, #cart21, #cart22, #cart23, #cart24, #cart25, #cart26, #cart27, #cart28, #cart29, #cart30, #cart31")
     .click(function(){
          $(".blissCart").show()
     })
     $("#cartClose").click(function(){
          $(".blissCart").hide()
     })
     
     $("#B-cart").click(function(){
          $(".blissCart").show()
     })
     $("#prodDetail1").click(function(){
          window.location.href = "page2.html"
     })
})
