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

function setSelectedZoomItem(selectedItem) {
  if (selectedItem.inputId === 'centroDeCustoAprovador') {
    $('#codigo_grupo').val(selectedItem.grupoAprovador);
  }
}

function removedZoomItem(removedItem) {
  if (removedItem.inputId === "centroDeCustoAprovador") {
    $("#codigo_grupo").val('');
  }
}