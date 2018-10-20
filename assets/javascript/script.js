$(function(){
  // partie Adrien

  // popover function bootstrap
  $('[data-toggle="popover"]').popover();

  // fin partie Adrien


//    nombre d'unité'
//    plusieurs fois le même élement

    $('.Abutton').on('click', function(event) {
      var $card = $(this).parents('.card').eq(0);
      var $image = $('.card-image img', $card).clone().css({maxWidth: '20px', maxHeight: '20px'});
      var title = $('.card-title button', $card).html();

      var $table = $('.modal-body table')
      if ($table.length == 0) {
          $table = $('<table>')
          $('.modal-body').append($table);
      }
      var $tr = $('<tr>');
      $tr.append($('<td>').append($image));
      $tr.append($('<td>').append(title));
      $tr.append($('<td>').append(
          $('<button>')
              .html('X')
              .addClass('remove-from-basket')
      ));
      $table.append($tr);
    });

    $(document).on('click', '.remove-from-basket', function(event) {
      $(this).parents('tr').eq(0).remove();
    });
});
