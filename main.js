const url = 'http://localhost:3000/data';

fetch(url).
  then((response) => response.json()).
  then((data) => {
    const tbody = document.querySelector('tbody');

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

      const tdDataNascimentoPaciente = document.createElement('td');
      tdDataNascimentoPaciente.textContent = exam.data_nascimento_paciente;
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

      const tdDataExame = document.createElement('td');
      tdDataExame.textContent = exam.data_exame;
      tr.appendChild(tdDataExame);

      const tdTipoExame = document.createElement('td');
      tdTipoExame.textContent = exam.tipo_exame;
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
