$(document).ready(function(){

        $('img').hover(function(){

            let image=$(this);
            offsetx=$(this).offset().left,
            offsety=$(this).offset().top;

            $(this).mousemove(function(e){
                x=e.pageX+10,
                y=e.pageY+10;
                console.log(x,y);

                $('#hidden').fadeIn(100,function(){
                    $('#hidden').attr('src','');
                   $('#hidden').attr('src',$(image).attr('src'))
                   $('#hidden').css({"top":y+offsety,"left":x})
                })
        })     
        },function(){
            $('#hidden').fadeOut(100)
        })
  });
  
  
  