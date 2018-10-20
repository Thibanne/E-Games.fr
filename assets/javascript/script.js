$(function(){
  // partie Adrien

  // popover function bootstrap
  $('[data-toggle="popover"]').popover();

  // fin partie Adrien

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
      var productId = $(this).data('productId');

      var $table = $('.modal-body table')
      if ($table.length == 0) {
          $table = $('<table>').css({
              width: '100%',
              border: '1px solid #000',
              borderCollapse: 'collapse'
          });
          $('.modal-body').append($table);
      }
      if ($('tr[data-product-id="' + productId + '"]').length == 0) {
          console.log('done');
          var $tr = $('<tr>').css({
              border: '1px solid #000'
          }).attr('data-product-id', productId);
          $tr.append($('<td>').append($image));
          $tr.append($('<td>').append($('<span>').html(title)));
          $tr.append($('<td>').append($('<span>').html(price + ' &euro;')));
          $tr.append($('<td>').append(
              $('<input>')
                  .attr('type', 'number')
                  .css({
                      width: '40px'
                  })
          ));
          $tr.append($('<td>').append(
              $('<button>')
                  .html('X')
                  .addClass('remove-from-basket')
          ));
          $table.append($tr);
      }
    });

    $(document).on('click', '.remove-from-basket', function(event) {
      $(this).parents('tr').eq(0).remove();
    });
});
