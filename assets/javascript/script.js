$(function(){
  // partie Adrien

  // popover function bootstrap
  $('[data-toggle="popover"]').popover();

  // fin partie Adrien
    var calculateBasketTotal = function() {
        var $table = $('.modal-body table')
        var sum = 0;
        if ($table.length == 1) {
            $('tfoot', $table).remove();
            $('tbody tr', $table).each(function( index ) {
                var price = $(this).data('price');
                var productId = $(this).data('productId');
                var amount = parseInt($('input[name="' + productId + '"]', $(this)).val());
                sum += price * amount;
            });
            var $tfoot = $('<tfoot>');
            var $tr = $('<tr>');
            $tr.append($('<td>').attr("colspan", 4).html('total'));
            $tr.append($('<td>').html(sum + ' &euro;'));
            $tfoot.append($tr);
            $table.append($tfoot);
        }
    }

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
          $table = $('<table>')
              .css({
                  width: '100%',
                  border: '1px solid #000',
                  borderCollapse: 'collapse'
              })
              .append($('<tbody>'));
          $('.modal-body').append($table);
      }
      if ($('tr[data-product-id="' + productId + '"]', $table).length == 0) {
          var $tr = $('<tr>')
              .css({
                border: '1px solid #000'
              })
              .attr('data-product-id', productId)
              .attr('data-price', price);
          $tr.append($('<td>').append($image));
          $tr.append($('<td>').append($('<span>').html(title)));
          $tr.append($('<td>').append($('<span>').html(price + ' &euro;')));
          $tr.append($('<td>').append(
              $('<input>')
                  .attr('type', 'number')
                  .attr('name', productId)
                  .attr('value', 1)
                  .css({
                      width: '40px'
                  })
                  .addClass('product-amount')
          ));
          $tr.append($('<td>').append(
              $('<button>')
                  .html('X')
                  .addClass('remove-from-basket')
          ));
          $('tbody', $table).append($tr);
      } else {
          var $input = $('input[name="' + productId + '"]', $table);
          $input.val(parseInt($input.val()) + 1);
      }
      calculateBasketTotal();
    });

    $(document).on('click', '.remove-from-basket', function(event) {
      $(this).parents('tr').eq(0).remove();
    });

    $(document).on('change', '.product-amount', function(event) {
        calculateBasketTotal();
    });
});
