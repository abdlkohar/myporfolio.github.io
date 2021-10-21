// event link diklik

$('.page-scroll').on('click', function(e){


  //isi href
  var tujuan = $(this).attr('href');
  // elemen ybs
  var elemenTujuan = $(tujuan);


// scroll
$('body').animate({
	scrollTop: elemenTujuan.offset().top - 50
} 1250, 'swing');

  e.preventDefault();

});