$(document).ready(function(){

    $(".btn1").click(function(){

        $("#firstp").fadeIn(3000,);
        $("#p1").addClass("darkorchid");
        $("#firstp").append("Geen Engls!")
       
    })
    $("#p1").click(function(){
        $("#p1").fadeOut(2000)
    })
    $(".btn2").click(function(){
        
        $("#p2").html("Hi,<h4>leuk jou te zien.</h4>")
    })
    $("#text").click(function(){
        $("#text").text("Hallo,alemal!")
    })
    $("#click").click(function(){
        $("input:text").val("Diana Nasreddin")
    })
    $("#hom").click(function(){
        $("#journal").hide()
    })
    $("#light").click(function(){
        $("#journal").show()
    })
    $("h1").click(function(){
        $("#countainer").slideDown("slow")
    })
    $(".btn3").click(function(){
        $("#p3").css("color", "blueviolet")
    })
 

  
  });