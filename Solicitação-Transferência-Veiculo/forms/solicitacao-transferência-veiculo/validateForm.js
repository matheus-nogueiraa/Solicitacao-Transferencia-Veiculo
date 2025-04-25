var beforeSendValidate = function (numState, nextState) {
  var fields = [
    { id: 'centroDeCustoAprovador', message: 'O campo "Centro de custo destino e aprovador" é obrigatório e não foi preenchido.' },
    { id: 'dataTransferencia', message: 'O campo "Data da Transferência" é obrigatório e não foi preenchido.' },
    { id: 'placa', message: 'O campo "Placa do Veículo" é obrigatório e não foi preenchido.' },
    { id: 'motivo', message: 'O campo "Motivo" é obrigatório e não foi preenchido.' },
    { id: 'nomeSolicitante', message: 'O campo "Nome do Solicitante" é obrigatório e não foi preenchido.' },
    { id: 'dataSolicitacao', message: 'O campo "Data da Solicitação" é obrigatório e não foi preenchido.' },
  ];

  for (var i = 0; i < fields.length; i++) {
    var field = fields[i];
    var $field = $('#' + field.id);
    var value = $field.val() ? String($field.val()).trim() : "";
    if (value === "") {
      showSweetTimerAlert(field.message, "warning");
      return false;
    }
  }

  return true;
};