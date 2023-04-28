// Ontener una referencia del elemento canvas del DOM
const $grafica = document.querySelector("#grafica");

//las etiquetas del eje x
const etiquetas = ["Colombia", "Mexico","España","EEUU", "Nicaragua", "Brazil", "Canada"]

const labels = Utils.months({count: 7});
const data = {
  labels: labels,
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
    data: {
      labels: etiquetas,
      datasets: [{
        labels,
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
















































































