$(document).ready(function () {
  toggleJustificativa();
});

function toggleJustificativa() {
  $('#justificativaGroup').hide();
  var valorAprovacao = $('input[name="acaoAprovador"]:checked').val();
  if (valorAprovacao !== 'aprovar') {
    $('#justificativaGroup').show();
  }
}
