document.querySelector('form').addEventListener("submit", function(event) {
  event.preventDefault();

  const tbody = document.querySelector('tbody');
  tbody.innerHTML = ''
  const input = document.querySelector('#searchInput');
  const url = `http://localhost:3000/data?token=${input.value}`;
  const table = document.querySelector('table');
  const errorMessage = document.querySelector('#empty');
  const header = document.querySelector('#header');

  fetch(url).
    then((response) => response.json()).
    then((formatted_data) => {
      if (formatted_data.length == 0){
        table.classList.add("hidden");
        header.classList.add("hidden");
        errorMessage.classList.remove("hidden");
      }
      else {
        table.classList.remove("hidden");
        header.classList.remove("hidden");
        errorMessage.classList.add("hidden");
      }

      const titleToken = document.createElement('h2');
      titleToken.textContent = "Resultados para o token: " + formatted_data["result_token"];
      header.appendChild(titleToken);

      const brA = document.createElement('br');
      header.appendChild(brA);

      const patient = document.createElement('h3');
      patient.textContent = "Dados do paciente";
      header.appendChild(patient);

      const strongDate = document.createElement('strong');
      strongDate.textContent = "Data de realização dos exames: ";
      header.appendChild(strongDate);

      const testDate = new Date(formatted_data["result_date"]);
      const testDay = testDate.getDate();
      const testMonth = testDate.getMonth();
      const testYear = testDate.getFullYear();
      const spanDate = document.createElement('span');
      spanDate.textContent = `${testDay}/${testMonth}/${testYear}`;
      header.appendChild(spanDate);

      const brB = document.createElement('br');
      header.appendChild(brB);

      const strongCpf = document.createElement('strong');
      strongCpf.textContent = "CPF: ";
      header.appendChild(strongCpf);

      const spanCpf = document.createElement('span');
      spanCpf.textContent = formatted_data["cpf"];
      header.appendChild(spanCpf);

      const brC = document.createElement('br');
      header.appendChild(brC);

      const strongName = document.createElement('strong');
      strongName.textContent = "Nome: ";
      header.appendChild(strongName);

      const spanName = document.createElement('span');
      spanName.textContent = formatted_data["name"];
      header.appendChild(spanName);

      const brD = document.createElement('br');
      header.appendChild(brD);

      const strongEmail = document.createElement('strong');
      strongEmail.textContent = "E-mail: ";
      header.appendChild(strongEmail);

      const spanEmail = document.createElement('span');
      spanEmail.textContent = formatted_data["email"];
      header.appendChild(spanEmail);

      const brE = document.createElement('br');
      header.appendChild(brE);

      const strongBirthday = document.createElement('strong');
      strongBirthday.textContent = "Data de nascimento: ";
      header.appendChild(strongBirthday);

      const date = new Date(formatted_data["birthday"]);
      const day = date.getDate();
      const month = date.getMonth();
      const year = date.getFullYear();
      const spanBirthday = document.createElement('span');
      spanBirthday.textContent = `${day}/${month}/${year}`;
      header.appendChild(spanBirthday);

      const physician = document.createElement('h3');
      physician.textContent = "Dados do médico";
      header.appendChild(physician);

      const strongCrm = document.createElement('strong');
      strongCrm.textContent = "CRM: ";
      header.appendChild(strongCrm);

      const spanCrm = document.createElement('span');
      spanCrm.textContent = formatted_data["doctor"]["crm"];
      header.appendChild(spanCrm);

      const brF = document.createElement('br');
      header.appendChild(brF);

      const strongCrmState = document.createElement('strong');
      strongCrmState.textContent = "Estado CRM: ";
      header.appendChild(strongCrmState);

      const spanCrmState = document.createElement('span');
      spanCrmState.textContent = formatted_data["doctor"]["crm_state"];
      header.appendChild(spanCrmState);

      const brG = document.createElement('br');
      header.appendChild(brG);

      const strongPhysician = document.createElement('strong');
      strongPhysician.textContent = "Nome: ";
      header.appendChild(strongPhysician);

      const spanPhysician = document.createElement('span');
      spanPhysician.textContent = formatted_data["doctor"]["name"];
      header.appendChild(spanPhysician);

      formatted_data.tests.forEach(function(exam) {

        const tr = document.createElement('tr');

        const tdType = document.createElement('td');
        tdType.textContent = exam.type.toUpperCase();
        tr.appendChild(tdType);

        const tdLimits = document.createElement('td');
        tdLimits.textContent = exam.limits;
        tr.appendChild(tdLimits);

        const tdResult = document.createElement('td');
        tdResult.textContent = exam.result;
        tr.appendChild(tdResult);

        tbody.appendChild(tr);

      })
    }).
    catch(function(error) {
      console.log(error);
    });
})