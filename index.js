fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(jsonArray => {
    const countries = jsonArray.slice(0, 9);

    const data = countries.map(country => ({
      x: country.name.common,
      y: country.population,
    }));

    const options = {
      title: {
        text: "Populations in 10 different countries",
        align: 'center',
        margin: 50,
    offsetX: 0,
    offsetY: 0,
    floating: false,
    style: {
      fontSize:  '40px',
      fontWeight:  'bold',
      fontFamily:  undefined,
      color:  '#263238'
    },
      },
      chart: {
        type: 'bar',
      },
      series: [
        {
          name: 'Population',
          data: data,
        },
      ],
      xaxis: {
        type: 'category',
      },
      dataLabels: {
        enabled: false
      },
    };

    const chart = new ApexCharts(document.querySelector('#chart'), options);
    chart.render();
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
