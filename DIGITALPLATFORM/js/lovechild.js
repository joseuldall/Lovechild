$(document).on('click', '#myvideo01', function(){
	$(this).attr('style','display:none');
    document.getElementById('myvideo02').play();
});

$('#myvideo02').on('ended', function(){
    $(this).attr('style','display:none');
    document.getElementById('myvideo03').play();
});

$(document).on('click', '#myvideo03', function(){
	$(this).attr('style','display:none');
    document.getElementById('myvideo04').play();
});

$('#myvideo04').on('ended', function(){
    $(this).attr('style','display:none');
    document.getElementById('myvideo05').play();
});

$(document).on('click', '#myvideo05', function(){
	$(this).attr('style','display:none');
    document.getElementById('myvideo06').play();
});

$('#myvideo06').on('ended', function(){
    $(this).attr('style','display:none');
    document.getElementById('myvideo07').play();
});

$(document).on('click', '#myvideo07', function(){
	$(this).attr('style','display:none');
    document.getElementById('myvideo08').play();
});

$('#myvideo08').on('ended', function(){
    $(this).attr('style','display:none');
    document.getElementById('myvideo09').play();
});

$(document).on('click', '#myvideo09', function(){
	$(this).attr('style','display:none');
    document.getElementById('myvideo10').play();
});

$('#myvideo10').on('ended', function(){
    $(this).attr('style','display:none');
    document.getElementById('myvideo11').play();
});

$(document).on('click', '#myvideo11', function(){
	$(this).attr('style','display:none');
    document.getElementById('myvideo12').play();
});

$('#myvideo12').on('ended', function(){
    window.location.href = 'index.html';
});
