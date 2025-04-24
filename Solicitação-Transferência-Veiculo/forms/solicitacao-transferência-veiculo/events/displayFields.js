function displayFields(form, customHTML) {
  var atividade = {
    INICIO: 1,
    APROVACAO: 23,
  };

  var usuarioLogado = getValue("WKUser");
  var atividadeAtual = getValue("WKNumState");

  var dataAtual = new Date().toISOString().split("T")[0]; 
  form.setValue("dataSolicitacao", dataAtual);

  if (usuarioLogado) {
    form.setValue("nomeSolicitante", usuarioLogado);
  }

  form.setVisibleById("panel_aprovacao", false);

  if (atividadeAtual > atividade.INICIO) {
    var fields = form.getCardData();
    if (fields) {
      var keys = fields.keySet().toArray();
      for (var i = 0; i < keys.length; i++) {
        form.setEnabled(keys[i], false);
      }
    }
  }

  if (atividadeAtual == atividade.APROVACAO) {
    form.setVisibleById("panel_aprovacao", true);
    form.setEnabled("acaoAprovador", true);
    form.setEnabled("justificativa", true);
  }
}