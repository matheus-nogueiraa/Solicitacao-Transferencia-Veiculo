// function validateForm(form) {
//   const camposObrigatorios = [
//     { id: "centroDeCustoTransferencia", nome: "Centro de Custo" },
//     { id: "dataTransferencia", nome: "Data da Transferência" },
//     { id: "placa", nome: "Placa do Veículo" },
//     { id: "motivo", nome: "Motivo" },
//     { id: "nomeSolicitante", nome: "Nome do Solicitante" },
//     { id: "dataSolicitacao", nome: "Data da Solicitação" }
//   ];

//   for (const campo of camposObrigatorios) {
//     const valor = form.getValue(campo.id);
//     if (!valor || valor.trim() === "") {
//       showSweetAlert(
//         "Erro de Validação",
//         `O campo "${campo.nome}" é obrigatório e não foi preenchido.`,
//         "error"
//       );
//       return false;
//     }
//   }
// }