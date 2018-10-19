Var itemincart = 0;
Var Shoplist = 0;

$(function(){
  $(".cart").on("click" function(){
    i=0;
    $('#btnplus').click(function() {
      i++;
      $('#click').html(i);
    });
    $('#btnminus').click(function() {
      i--;
      $('#click').html(i);
    });
  });

});
