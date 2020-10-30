$(document).ready(function(){

  $('img').on('mouseenter',function(){
      $(this).css('opacity',1);
  });

  $('img').on('mouseleave',function(){
    $(this).css('opacity',0.2);
})
});


