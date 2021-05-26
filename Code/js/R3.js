

$('#videoModal').on('hidden.bs.modal', function (e) {
    $(this).find('video')[0].pause(); //pause video on modal close
 })
 $('#videoModal').on('shown.bs.modal', function (e) {
    $(this).find('video')[0].play(); //play video on modal show
 })