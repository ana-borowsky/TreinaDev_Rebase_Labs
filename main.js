const url = 'http://localhost:3000/data';

fetch(url).
  then((response) => response.json()).
  then((data) => {
    const tbody = document.querySelector('tbody');

    data.forEach(function(exam) {
      const tr = document.createElement('tr');

      const tdNomePaciente = document.createElement('td');
      tdNomePaciente.textContent = exam.nome_paciente;
      tr.appendChild(tdNomePaciente);

      const tdNomeMedico = document.createElement('td');
      tdNomeMedico.textContent = exam.nome_medico;
      tr.appendChild(tdNomeMedico);

      const tdCrmMedico = document.createElement('td');
      tdCrmMedico.textContent = exam.crm_medico;
      tr.appendChild(tdCrmMedico);

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
