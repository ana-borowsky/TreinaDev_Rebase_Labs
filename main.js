document.querySelector('form').addEventListener("submit", function(event) {
  event.preventDefault();

  const tbody = document.querySelector('tbody');
  tbody.innerHTML = ''
  const input = document.querySelector('#searchInput');
  const url = `http://localhost:3000/data?token=${input.value}`;
  const table = document.querySelector('table');
  const errorMessage = document.querySelector('#empty');

  fetch(url).
    then((response) => response.json()).
    then((data) => {
      if (data.length == 0){
        table.classList.add("hidden");
        errorMessage.classList.remove("hidden");
      }
      else {
        table.classList.remove("hidden");
        errorMessage.classList.add("hidden");
      }

      data.forEach(function(exam) {
        const tr = document.createElement('tr');

        const tdCpf = document.createElement('td');
        tdCpf.textContent = exam.cpf;
        tr.appendChild(tdCpf);

        const tdNomePaciente = document.createElement('td');
        tdNomePaciente.textContent = exam.nome_paciente;
        tr.appendChild(tdNomePaciente);

        const tdEmailPaciente = document.createElement('td');
        tdEmailPaciente.textContent = exam.email_paciente;
        tr.appendChild(tdEmailPaciente);

        const date = new Date(exam.data_nascimento_paciente);
        const day = date.getDate();
        const month = date.getMonth();
        const year = date.getFullYear();
        const tdDataNascimentoPaciente = document.createElement('td');
        tdDataNascimentoPaciente.textContent = `${day}/${month}/${year}`;
        tr.appendChild(tdDataNascimentoPaciente);

        const tdEnderecoPaciente = document.createElement('td');
        tdEnderecoPaciente.textContent = exam.endereco_paciente;
        tr.appendChild(tdEnderecoPaciente);

        const tdCidadePaciente = document.createElement('td');
        tdCidadePaciente.textContent = exam.cidade_paciente;
        tr.appendChild(tdCidadePaciente);

        const tdEstadoPaciente = document.createElement('td');
        tdEstadoPaciente.textContent = exam.estado_paciente;
        tr.appendChild(tdEstadoPaciente);

        const tdCrmMedico = document.createElement('td');
        tdCrmMedico.textContent = exam.crm_medico;
        tr.appendChild(tdCrmMedico);

        const tdCrmMedicoEstado = document.createElement('td');
        tdCrmMedicoEstado.textContent = exam.crm_medico_estado;
        tr.appendChild(tdCrmMedicoEstado);

        const tdNomeMedico = document.createElement('td');
        tdNomeMedico.textContent = exam.nome_medico;
        tr.appendChild(tdNomeMedico);

        const tdEmailMedico = document.createElement('td');
        tdEmailMedico.textContent = exam.email_medico;
        tr.appendChild(tdEmailMedico);

        const date_exam = new Date(exam.data_exame);
        const day_exam = date_exam.getDate();
        const month_exam = date_exam.getMonth();
        const year_exam = date_exam.getFullYear();
        const tdDataExame = document.createElement('td');
        tdDataExame.textContent = `${day_exam}/${month_exam}/${year_exam}`;
        tr.appendChild(tdDataExame);

        const tdTipoExame = document.createElement('td');
        tdTipoExame.textContent = exam.tipo_exame.toUpperCase();
        tr.appendChild(tdTipoExame);

        const tdLimitesTipoExame = document.createElement('td');
        tdLimitesTipoExame.textContent = exam.limites_tipo_exame;
        tr.appendChild(tdLimitesTipoExame);

        const tdResultadoTipoExame = document.createElement('td');
        tdResultadoTipoExame.textContent = exam.resultado_tipo_exame;
        tr.appendChild(tdResultadoTipoExame);

        tbody.appendChild(tr);
      })
    }).
    catch(function(error) {
      console.log(error);
    });
})