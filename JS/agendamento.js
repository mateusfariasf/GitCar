document.addEventListener("DOMContentLoaded", function () {
     const dataInput = document.getElementById("data");
     const horarioInput = document.getElementById("horario");
     const marcaInput = document.getElementById("marca");
     const tipoInput = document.getElementById("tipo");
     const observacoesInput = document.getElementById("observacoes");
     const agendamentoForm = document.getElementById("agendamentoForm");
 
     // Função para verificar se todos os campos obrigatórios foram preenchidos
     function checkFormCompletion() {
         const nome = document.getElementById("nome").value.trim();
         const telefone = document.getElementById("telefone").value.trim();
         const data = dataInput.value;
         const horario = horarioInput.value;
         const servico = document.getElementById("servico").value;
         const marca = marcaInput.value;
         const tipo = tipoInput.value;
 
         // Verifica se algum campo está vazio
         if (!nome || !telefone || !data || !horario || !servico || !marca || !tipo) {
             Swal.fire({
                 icon: "warning",
                 title: "Campos em branco",
                 text: "Por favor, preencha todos os campos obrigatórios antes de agendar.",
             });
             return false; 
         }
         return true; 
     }
 
     // Popula a lista de tipos de carro com base na marca selecionada
     const tiposPorMarca = {
         toyota: ["Corolla", "Hilux", "Camry"],
         honda: ["Civic", "Accord", "CR-V"],
         ford: ["Fiesta", "Mustang", "EcoSport"],
         chevrolet: ["Onix", "Cruze", "S10"]
     };
 
     marcaInput.addEventListener("change", function () {
         tipoInput.innerHTML = '<option value="" disabled selected>Selecione o tipo de carro</option>';
         const tipos = tiposPorMarca[marcaInput.value] || [];
         tipos.forEach(tipo => {
             const option = document.createElement("option");
             option.value = tipo.toLowerCase();
             option.textContent = tipo;
             tipoInput.appendChild(option);
         });
     });
 
     const today = new Date().toISOString().split("T")[0];
     dataInput.min = today;
 
     agendamentoForm.addEventListener("submit", function (e) {
         e.preventDefault();
 
         // Verifica se o formulário está completo
         if (!checkFormCompletion()) return;
 
         // Validação de data e hora
         const selectedDate = new Date(dataInput.value);
         const currentDate = new Date();
         const selectedTime = horarioInput.value;
 
         if (selectedDate.toDateString() === currentDate.toDateString()) {
             const selectedHour = parseInt(selectedTime.split(":")[0]);
             const currentHour = currentDate.getHours();
 
             if (selectedHour <= currentHour) {
                 Swal.fire({
                     icon: "warning",
                     title: "Atenção",
                     text: "Para hoje, selecione um horário com ao menos 1 hora de antecedência."
                 });
                 return;
             }
         }
 
         Swal.fire({
             icon: "success",
             title: "Agendamento Confirmado!",
             text: "Seu agendamento foi realizado com sucesso. Em breve entraremos em contato.",
             confirmButtonText: "OK"
         }).then(() => {
             agendamentoForm.reset();
         });
     });
 });
 