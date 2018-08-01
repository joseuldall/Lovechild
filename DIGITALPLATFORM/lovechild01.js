var overgang01 = '02.mov';
var video02 = '03.mov';
var overgang02 = '04.mov';

// fra video 1 click
$(document).on('click', '.video01', function(){
	$(this).removeClass('video01').addClass('overgang01'); //skift classes
  $(this).attr('src',overgang01); //sæt næste video ind
  $(this)[0].play(); //play lol
});

// ting der sker når en video slutter
$('video').on('ended', function(){
	// nr 1:
	if( $(this).hasClass('overgang01') ){ //check om det er overgang
		$(this).removeClass('overgang01').addClass('video02'); //skift classes
  	$(this).attr('src',video02); //sæt næste video ind
	  $(this)[0].play(); //play lol  
  }
  // nr 2:
  if( $(this).hasClass('overgang02') ){ //check om det er overgang
		$(this).removeClass('overgang02').addClass('vide03'); //skift classes
  	$(this).attr('src',video03); //sæt næste video ind
	  $(this)[0].play(); //play lol  
  }
  // etc
  
});


// fra video 2 click -- skift værdier
$(document).on('click', '.vide02', function(){
	$(this).removeClass('vide02').addClass('overgang02'); //skift classes
  $(this).attr('src',overgang02); //sæt næste video ind
  $(this)[0].play(); //play lol
});

