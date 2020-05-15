$("document").ready(function () {
  console.log("listo");
  $('#toggle').click(function () {
    let val = $(this).val();
    if ($(this).is(':checked')) {
      console.log('oscuro');
      $('body').css({ 'background': 'hsl(230, 17%, 14%)' });
      $('.red').css({ 'background': 'hsl(228, 28%, 20%)' });
      $('.red').css({ 'border': '1px solid hsl(228, 28%, 20%)' });
      $('.page').css({ 'background': 'hsl(228, 28%, 20%)' });
      $('.page').css({ 'border': '1px solid hsl(228, 28%, 20%)' });
      $('h1').css({ 'color': '#fff' });
      //borders();

    } else {
      console.log('claro');
      $('body').css({ 'background': 'hsl(225, 100%, 98%)' });
      $('.red').css({ 'background': '#dee1e9' });
      $('.red').css({ 'border': '1px solid #dee1e9' });
      $('.page').css({ 'background': '#dee1e9' });
      $('.page').css({ 'border': '1px solid #dee1e9' });
      $('h1').css({ 'color': '#000' });
      //borders();
    }
  });

  /*function borders() {
    $('#facebook').css({ 'border-top': '10px solid hsl(203, 89%, 53%)' });
    $('#twitter').css({ 'border-top': '10px solid hsl(195, 100%, 50%)' });
    $('#instagram').css({ 'border-top': '10px solid #df4996' });
    $('#youtube').css({ 'border-top': '10px solid hsl(348, 97%, 39%)' });
  }*/

});
