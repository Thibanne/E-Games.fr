$(function(){
  // partie Adrien

  // popover function bootstrap
  $('[data-toggle="popover"]').popover();

  // fin partie Adrien

 // ajout dans le Panier
 var itemCount = 0;

$(".add").click(function (){
  itemCount ++;
  $("#itemCount").html(itemCount).css("display", "block");
  $(this).siblings(".itemDetails").clone().appendTo( "#cartItems" ).append('<button class="removeItem">Remove Item</button>');
});

$(".clear").click(function() {
  itemCount = 0;
  $("#itemCount").html('').css("display", "none");
  $("#cartItems").html('');
});

$("i").click(function(){
  $('#shoppingCart').toggle();
});

$("#shoppingCart").on("click", ".removeItem", function(){
    $(this).parent().remove();
    itemCount --;
    $("#itemCount").html(itemCount);

    if (itemCount === 0) {
      $("#itemCount").html('').css("display", "none");
      $("#shoppingCart").css("display", "none");
    }
});
 // retirer du Panier
 // nombre d'unité
 // plusieur le meme éléments
 // ajout du prix et leur total

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
              // .append($('<thead>')); pour ajouter un thead a ce niveau
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

// ///////////////////////////////////////////////// //
// /////////// Autres essais et versions /////////// //
// /////// Avec commentaires et explications /////// //
// ///////////////////////////////////////////////// //

  // $('.Abutton').on('click', function(event) {
  //   // ajoute dans le modal-body, le contenue dans le DOM de la condition
  //   // ne bind pas les éléments (comme les bouttons) dans le modal
  //   // .append() mettre à la suite (insertion d'élément spécifié comme le dernier enfant de chaque élément dans les données)
  //   // .parents() parents de ...
  //   // .eq(0) selecteur n'acceptant pas de valeurs négatives
  //   // .clone() recopie les valeurs demander, quitte a recopier tout un code html par exemple
  //     $('.modal-body').append($(this).parents('.card').eq(0).clone());
  //   });

  // $('.Abutton').on('click', function(event) {
  //   // recupere la carte correspondant au bouton
  //     var card = $(this).parents('.card').eq(0);
  //     // dans la "card" on récupère l'image
  //     var image = $('.card-image img', card).clone();
  //     // dans la "card" on récupère le title
  //     var title = $('.card-title button', card).html();
  //     // on les intègre dans le modal-body
  //     $('.modal-body').append(image);
  //     $('.modal-body').append(title);
  //   });

  // $('.Abutton').on('click', function(event) {
  //   // variable avec $ devant sont pour indiquer que ce sont des objets Jquery
  //       var $card = $(this).parents('.card').eq(0);
  //       // modfification de l'image par intégration a un nouveau css
  //       var $image = $('.card-image img', $card).clone().css({maxWidth: '20px', maxHeight: '20px'});
  //       var title = $('.card-title button', $card).html();
  //
  //       // création de tableau
  //       var $table = $('.modal-body table')
  //       if ($table.length = 0) {
  //           $table = $('<table>')
  //           $('.modal-body').append($table);
  //       }
  //       var $tr = $('<tr>');
  //       $tr.append($('<td>').append($image));
  //       $tr.append($('<td>').append(title));
  //       $('.modal-body').append($tr);
  //     });

  // $('.Abutton').on('click', function(event) {
  //      var $card = $(this).parents('.card').eq(0);
  //      var $image = $('.card-image img', $card).clone().css({maxWidth: '20px', maxHeight: '20px'});
  //      var title = $('.card-title button', $card).html();
  //
  //      var $table = $('.modal-body table')
  //      if ($table.length == 0) {
  //          $table = $('<table>')
  //          $('.modal-body').append($table);
  //      }
  //      var $tr = $('<tr>');
  //      $tr.append($('<td>').append($image));
  //      $tr.append($('<td>').append(title));
  //      // rajout du boutton "retirer du panier"
  //      $tr.append($('<td>').append(
  //          $('<button>')
  //              .html('X')
  //              .addClass('remove-from-basket')
  //      ));
  //      $table.append($tr);
  //    });
  //    // quand on click sur le "X" il supprime l'élément demander
  //    $(document).on('click', '.remove-from-basket', function(event) {
  //      $(this).parents('tr').eq(0).remove();
  //    });

  // $('.add-to-basket').on('click', function(event) {
  //       var $card = $(this).parents('.card').eq(0);
  //       var $image = $('.card-image img', $card)
  //           .clone()
  //           .css({
  //             maxWidth: '20px',
  //             maxHeight: '20px'
  //           });
  //       var title = $('.card-title button', $card).html();
  //       var price = $(this).data('price');
  //
  //       var $table = $('.modal-body table')
  //       if ($table.length == 0) {
  //           $table = $('<table>').css({
  //               width: '100%',
  //               border: '1px solid #000',
  //               borderCollapse: 'collapse'
  //           });
  //           $('.modal-body').append($table);
  //       }
  //       var $tr = $('<tr>').css({
  //           border: '1px solid #000'
  //       });
  //       $tr.append($('<td>').append($image));
  //       $tr.append($('<td>').append(title));
  //       $tr.append($('<td>').append(price));
  //       $tr.append($('<td>').append(
  //           $('<input>')
  //               .attr('type', 'text')
  //               .attr('size', '2')
  //       ));
  //       $tr.append($('<td>').append(
  //           $('<button>')
  //               .html('X')
  //               .addClass('remove-from-basket')
  //       ));
  //       $table.append($tr);
  //     });
  //
  //     $(document).on('click', '.remove-from-basket', function(event) {
  //       $(this).parents('tr').eq(0).remove();
  //     });

  // $('.add-to-basket').on('click', function(event) {
  //      var $card = $(this).parents('.card').eq(0);
  //      var $image = $('.card-image img', $card)
  //          .clone()
  //          .css({
  //            maxWidth: '20px',
  //            maxHeight: '20px'
  //          });
  //      var title = $('.card-title button', $card).html();
  //      var price = $(this).data('price');
  //      var productId = $(this).data('productId');
  //
  //      var $table = $('.modal-body table')
  //      if ($table.length == 0) {
  //          $table = $('<table>').css({
  //              width: '100%',
  //              border: '1px solid #000',
  //              borderCollapse: 'collapse'
  //          });
  //          $('.modal-body').append($table);
  //      }
  //      // data-product-id en Jquery donne productId (camel case)
  //      // le bouton envoi un identifiant produit
  //      // si le produit a le même identifiant alors il ajoute une valeur sinon il ajoute un ligne avec le nouveau produit
  //      if ($('tr[data-product-id="' + productId + '"]').length == 0) {
  //          // console.log('done');
  //          var $tr = $('<tr>').css({
  //              border: '1px solid #000'
  //          }).attr('data-product-id', productId);
  //          $tr.append($('<td>').append($image));
  //          $tr.append($('<td>').append($('<span>').html(title)));
  //          $tr.append($('<td>').append($('<span>').html(price + ' &euro;')));
  //          $tr.append($('<td>').append(
  //              $('<input>')
  //                  .attr('type', 'number')
  //                  .css({
  //                      width: '40px'
  //                  })
  //          ));
  //          $tr.append($('<td>').append(
  //              $('<button>')
  //                  .html('X')
  //                  .addClass('remove-from-basket')
  //          ));
  //          $table.append($tr);
  //      }
  //    });
  //
  //    $(document).on('click', '.remove-from-basket', function(event) {
  //      $(this).parents('tr').eq(0).remove();
  //    });







// ///////////////////////////////////////////////// //

});
