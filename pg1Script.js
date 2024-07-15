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
    
    })

})
