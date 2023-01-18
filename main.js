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

      formatted_data.tests.forEach(function(exam) {
        console.log(exam)
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