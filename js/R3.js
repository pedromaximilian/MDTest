
/*
Js para corregir que Chrome solo use autoplay videos en mute
ademas detiene la reproduccion si el video se oculta
*/
$('#videoModal').on('hidden.bs.modal', function (e) {
    $(this).find('video')[0].pause(); //pause on modal close
 })
 $('#videoModal').on('shown.bs.modal', function (e) {
    $(this).find('video')[0].play(); //play on modal show
 })