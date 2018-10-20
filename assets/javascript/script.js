$(function(){
  // partie Adrien

  // popover function bootstrap
  $('[data-toggle="popover"]').popover();

  // fin partie Adrien
    $('.Abutton').on('click', function(event) {
      var $card = $(this).parents('.card').eq(0);
      var $image = $('.card-image img', $card).clone().css({maxWidth: '20px', maxHeight: '20px'});
      var title = $('.card-title button', $card).html();

      var $table = $('.modal-body table')
      if ($table.length = 0) {
          $table = $('<table>')
          $('.modal-body').append($table);
      }
      var $tr = $('<tr>');
      $tr.append($('<td>').append($image));
      $tr.append($('<td>').append(title));
      $('.modal-body').append($tr);
    });
});
