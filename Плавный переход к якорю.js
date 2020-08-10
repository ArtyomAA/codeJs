jQuery(function(){
                jQuery('li a[href^="#"]').on('click', function(event) {
    // отменяем стандартное действие
                event.preventDefault();
    
                var sc = jQuery(this).attr("href"),
                    dn = jQuery(sc).offset().top;
    /*
    * sc - в переменную заносим информацию о том, к какому блоку надо перейти
    * dn - определяем положение блока на странице
    */
    
    jQuery('html, body').animate({scrollTop: dn}, 1000);
    
    /*
    * 1000 скорость перехода в миллисекундах
    */
  });
});