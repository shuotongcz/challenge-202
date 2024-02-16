//resource link: https://www.w3schools.com/jquery/default.asp

$(document).ready(function() {

    $("#cat-img").hide();
    $("#happy-dog").hide();
    $("#secret-text").hide();


    $("#doggo-img").click(function(){
        $("#doggo-img").hide();
        $("#cat-img").show();
    });

    $("#cat-img").click(function(){
        // $("#doggo-img").show();
        $("#cat-img").hide();
        $("#happy-dog").show();
    });

    $("#happy-dog").click(function(){
        $("#doggo-img").show();
        $("#cat-img").hide();
        $("#happy-dog").hide();
    });

    $("#toggle-text").click(function(){
        $("#secret-text").toggle();
    });


    $("#change-bg-color").click(function(){
        $("#home-screen").css("background-color", "khaki");
        $("#change-bg-color").css("color", "white");

    });

    $("#secret-text").click(function(){
        $(".main-img").addClass("animate-img");
        setTimeout(function(){$(".main-img").removeClass("animate-img");
        },2000);

    });

    $("#name").click(function() {
        $("#name").css("color", "purple");
    });
    
        $("#reset-btn").click(function() {
            $("#cat-img, #happy-dog, #secret-text, #box").hide();
            $("#doggo-img").show();
            $("#home-screen").css("background-color", "honeydew");
            $("#change-bg-color").css("color", "brown");
        });


});
