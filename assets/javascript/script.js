$(function(){
  // partie Adrien

  // popover function bootstrap
  $('[data-toggle="popover"]').popover();

  // fin partie Adrien

    $('.Abutton').on('click', function(event) {
      $('.modal-body').append($(this).parents('.card').eq(0).clone());
    });
});
