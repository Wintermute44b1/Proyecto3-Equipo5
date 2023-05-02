const llamarApiClima = async () => {
  try {
    const respuesta = await fetch(
      "http://www.7timer.info/bin/api.pl?lon=113.17&lat=23.09&product=astro&output=json"
    );
    const json = await respuesta.json();
    console.log(json);
  } catch (error) {
    console.log(error);
  }
};

llamarApiClima();
