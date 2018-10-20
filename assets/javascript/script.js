$(function(){
  // partie Adrien

  // popover function bootstrap
  $('[data-toggle="popover"]').popover();

  // fin partie Adrien


//    plusieurs fois le même élement

    $('.add-to-basket').on('click', function(event) {
      var $card = $(this).parents('.card').eq(0);
      var $image = $('.card-image img', $card)
          .clone()
          .css({
            maxWidth: '20px',
            maxHeight: '20px'
          });
      var title = $('.card-title button', $card).html();
      var price = $(this).data('price');

      var $table = $('.modal-body table')
      if ($table.length == 0) {
          $table = $('<table>').css({
              width: '100%',
              border: '1px solid #000',
              borderCollapse: 'collapse'
          });
          $('.modal-body').append($table);
      }
      var $tr = $('<tr>').css({
          border: '1px solid #000'
      });
      $tr.append($('<td>').append($image));
      $tr.append($('<td>').append(title));
      $tr.append($('<td>').append(price));
      $tr.append($('<td>').append(
          $('<input>')
              .attr('type', 'text')
              .attr('size', '2')
      ));
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
