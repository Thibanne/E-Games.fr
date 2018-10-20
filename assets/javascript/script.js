$(function(){
  // partie Adrien

  // popover function bootstrap
  $('[data-toggle="popover"]').popover();

  // fin partie Adrien


//    bouton ajouter au panier dans le panier
//    retirer du panier
//    nombre d'unité'
//    plusieurs fois le même élement

    $('.Abutton').on('click', function(event) {
      var card = $(this).parents('.card').eq(0);
      var image = $('.card-image img', card).clone();
      var title = $('.card-title button', card).html();
      $('.modal-body').append(image);
      $('.modal-body').append(title);
    });
});
