var s,app={
  settings:{textFadeSpeed:2e3},
  init:function(){
    s=this.settings,
    this.initalizers(),
    this.bindUiActions(),
    this.bigVideo(),
    this.editNavigation(),
    this.mailChimpAjax(),
    this.keepSettings(),
    this.settingOptions(),
    $("#big-video-wrap").removeClass("hide-video")},
  bindUiActions:function(){
    var a=this;
    $(".take-a-look").on("click",function(){$(".onepage-pagination li:nth-child(2) > a").trigger("click")}),
    $(document).on("slidemove",function(){a.animateSlides()})},
  initalizers:function(){
    $(".main").onepage_scroll({sectionContainer:"section"}),
    $(window).load(function(){$("#big-video-wrap").show().animate({opacity:1})}),
    $(".demo1 .rotate").textrotator({animation:"fade",speed:s.textFadeSpeed})},
  bigVideo:function(){
    var a=new $.BigVideo({useFlashForFirefox:!1});
    a.init(),
    Modernizr.touch?a.show("img/background.jpg"):a.show("video/background-video.mp4",{ambient:!0,doLoop:!0,altSource:"video/background-video.ogv"})
    },
  editNavigation:function(){
    $(".onepage-pagination").addClass("animated fadeInRight delay-3"),
    $(".onepage-pagination").children().each(function(){switch($(this).children().data("index")){case 1:$(this).children().append("<i class='fa fa-home'></i>");break;case 2:$(this).children().append("<i class='fa fa-dot-circle-o'></i>");break;case 3:$(this).children().append("<i class='fa fa-diamond'></i>");break;case 4:$(this).children().append("<i class='fa fa-ellipsis-h'></i>");break;case 5:$(this).children().append("<i class='fa fa-paper-plane'></i>")}})},
  animateSlides:function(){
    this.isSlide(2)?($(".slide-1-title").removeClass("hide").addClass("animated fadeInRight delay-1"),$(".slide-1-1").removeClass("hide").addClass("animated fadeInRight delay-3"),$(".iphone-1").removeClass("hide").addClass("animated fadeInUp delay-3"),$(".slide-1-2").removeClass("hide").addClass("animated fadeInDown delay-5"),$(".slide-1-3").removeClass("hide").addClass("animated fadeInDown delay-6"),$(".slide-1-scroll").removeClass("hide").addClass("animated fadeInDown delay-12"),$(".icon span").css("color","#fff")):this.isSlide(3)?($(".iphone-2").removeClass("hide").addClass("animated fadeInDown delay-1"),$(".slide-2-title").removeClass("hide").addClass("animated fadeIn delay-3"),$(".slide-2-1").removeClass("hide").addClass("animated fadeIn delay-4"),$(".slide-2-2").removeClass("hide").addClass("animated fadeInDown delay-5"),$(".slide-2-3").removeClass("hide").addClass("animated fadeInDown delay-6"),$(".slide-2-4").removeClass("hide").addClass("animated fadeInDown delay-9"),$(".slide-2-5").removeClass("hide").addClass("animated fadeInDown delay-10"),$(".slide-2-6").removeClass("hide").addClass("animated fadeInDown delay-11"),$(".slide-2-scroll").removeClass("hide").addClass("animated fadeInDown delay-15"),$(".icon span").css("color","#fff")):this.isSlide(4)?($(".slide-3-title").removeClass("hide").addClass("animated fadeInLeft delay-1"),$(".slide-3-1").removeClass("hide").addClass("animated fadeInLeft delay-3"),$(".iphone-3").removeClass("hide").addClass("animated fadeInUp delay-3"),$(".slide-3-2").removeClass("hide").addClass("animated fadeInDown delay-5"),$(".slide-3-3").removeClass("hide").addClass("animated fadeInDown delay-6"),$(".slide-3-scroll").removeClass("hide").addClass("animated fadeInDown delay-12"),$(".icon span").css("color","#333")):this.isSlide(5)&&$(".icon span").css("color","#fff")},
  isSlide:function(a){return $("body").hasClass("viewing-page-"+a)?!0:!1},
  settingOptions:function(){
    $(".settings-icon").on("click",function(){$(this).parent().toggleClass("open")}),
    $(".toggle-video").on("click",function(){$("#big-video-wrap").toggleClass("hide-video")}),
    $(".toggle-opacity-first").on("click",function(){$(".home").toggleClass("full-color")}),
    $(".toggle-opacity-all").on("click",function(){
      $(".home, .slide-1, .slide-2, .slide-3, .contact").toggleClass("full-color")
    }),
    $(".toggle-phone").on("click",function(){$(".home-phone").toggleClass("hide animated fadeIn"),
    $(".home-copy").toggleClass("col-sm-8 col-sm-offset-2 col-sm-6")})},
  keepSettings:function(){},
  mailChimpAjax:function(){var a=this,b=$("#mc-embedded-subscribe-form");$('#mc-embedded-subscribe-form button[type="submit"]').bind("click",function(c){c.preventDefault(),a.register(b)})},
  register:function(a){var b=a.parent().siblings(".sign-up-message");$.ajax({type:a.attr("method"),url:a.attr("action"),data:a.serialize(),cache:!1,dataType:"json",contentType:"application/json; charset=utf-8",
  error:function(a){console.log(" Could not connect to the registration server. Please try again later. ",a),b.text("There was an error submitting your email, please try again").removeClass("hidden").addClass(" error animated fadeInDown")},
  success:function(a){console.log("success"),"success"!=a.result?b.text("There was an error submitting your email, please try again").removeClass("hidden").addClass(" error animated fadeInDown"):(b.html("Thank you. Your email was successfully submitted"),b.removeClass("hidden").addClass(" animated fadeInDown"))}})}};
  
  $(document).ready(function(){app.init()});