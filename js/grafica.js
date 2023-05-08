const $grafica = document.querySelector("#grafica");
const etiquetas = [
  "Colombia",
  "Mexico",
  "España",
  "EEUU",
  "Nicaragua",
  "Brazil",
  "Canada",
];
const data = {
  labels: etiquetas,
  datasets: [
    {
      label: "Variacion de temperatura",
      data: [65, 59, 80, 81, 56, 55, 40],
      fill: false,
      borderColor: "rgb(75, 192, 192)",
      tension: 0.1,
    },
  ],
};
new Chart($grafica, {
  type: "line",
  data: data,
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});

const llamarApiClima = async () => {
  try {
    const respuesta = await fetch(
      "http://www.7timer.info/bin/api.pl?lon=113.17&lat=23.09&product=astro&output=json"
    );
    const json = await respuesta.json();
    console.log(json);
    // get the canvas
    const canvas = document.getElementById("myChart");
    // create a new chart instance
    const chart = new Chart(canvas, {
      type: "bar",
      data: {
        labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7"],
        datasets: [
          {
            label: "Temperature",
            data: [
              json.dataseries[0].temp2m,
              json.dataseries[1].temp2m,
              json.dataseries[2].temp2m,
              json.dataseries[3].temp2m,
              json.dataseries[4].temp2m,
              json.dataseries[5].temp2m,
              json.dataseries[6].temp2m,
            ],
            backgroundColor: "rgba(255, 99, 132, 0.2)",
            borderColor: "rgba(255, 99, 132, 1)",
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  } catch (error) {
    console.log(error);
  }
};

llamarApiClima();
