console.log("your index.js file is loaded correctly!")


$("#callToAction").click(function() {
    $('html, body').animate ({
        scrollTop: $("#myWork").offset().top
    }, 1000)
    });

    $('.tab').on("click", function(){
  
        if ($(this).hasClass("tab1")){
          $(".tab1").addClass("active");
          $(".tab2").removeClass("active");
          $("#tabContent1").css("display", "flex");
          $("#tabContent2").css("display", "none");
        }
        else if ($(this).hasClass("tab2")){
          $(".tab2").addClass("active");
          $(".tab1").removeClass("active");
          $("#tabContent2").css("display", "flex");
          $("#tabContent1").css("display", "none");
        }
      });

