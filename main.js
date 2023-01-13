const fragment = new DocumentFragment();
const url = 'http://localhost:3000/data';

fetch(url).
  then((response) => response.json()).
  then((data) => {
    data.forEach(function(exam) {
      const li = document.createElement('li');
      li.textContent = `${exam.nome_paciente} - ${exam.data_exame} - ${exam.nome_medico} - ${exam.tipo_exame} - ${exam.limites_tipo_exame} - ${exam.resultado_tipo_exame}`;
      fragment.appendChild(li);
    })
  }).
  then(() => {
    document.querySelector('ul').appendChild(fragment);
  }).
  catch(function(error) {
    console.log(error);
  });
