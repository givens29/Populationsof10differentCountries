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
        margin: 100,
    offsetX: 0,
    offsetY: 0,
    floating: false,
    style: {
      fontSize:  '30px',
      fontFamily:  'Georgia',
      color:  'white'
    },
      },
      fill: {
        opacity: 1
      },
      chart: {
        type: 'area',
        background: 'black',
      },
      theme: {
        palette: 'palette10'
      },
      series: [
        {
          name: 'Population',
          data: data,
        },
      ],
      grid: {
        borderColor: 'white',
        strokeDashArray: 7,
      },
      xaxis: {
        type: 'category',
        labels: {
          style: {
            colors: 'white',
            fontFamily: 'serif',
            fontSize: '15px',
          }
        }
      },
      yaxis: {
        type: 'category',
        labels: {
          style: {
            colors: 'white'
          }
        }
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
