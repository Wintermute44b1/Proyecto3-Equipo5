const $grafica = document.querySelector("grafica");
const etiquetas = ["Colombia", "Mexico", "España", "EEUU", "Nicaragua", "Brazil", "Canada"];
const data = {
  labels: etiquetas,
  datasets: [{
    label: "Variacion de temperatura",
    data: [65, 59, 80, 81, 56, 55, 40],
    fill: false,
    borderColor: 'rgb(75, 192, 192)',
    tension: 0.1
  }]
};
new Chart($grafica, {
  type: 'line',
  data: data,
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});

const llamarApiClima = async () => {
  const longitud = document.getElementById("longitud-input").value;
  const latitud = document.getElementById("latitud-input").value;

  try {
    const respuesta = await fetch(
      `http://www.7timer.info/bin/api.pl?lon=${longitud}&lat=${latitud}&product=astro&output=json`
    );
    const json = await respuesta.json();
    console.log(json);

    const canvas = document.getElementById('myChart');
    const chart = new Chart(canvas, {
      type: 'bar',
      data: {
        labels: ['Lunes ', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'],
        datasets: [{
          label: 'Temperatura',
          data: [json.dataseries[0].temp2m, json.dataseries[1].temp2m, json.dataseries[2].temp2m, json.dataseries[3].temp2m, json.dataseries[4].temp2m, json.dataseries[5].temp2m, json.dataseries[6].temp2m],
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgba(255, 99, 132, 1)',
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  } catch (error) {
    console.log(error);
  }
};

document.getElementById("submit-button").addEventListener("click", llamarApiClima);

llamarApiClima();










































































