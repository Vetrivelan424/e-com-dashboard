import React from 'react';
import ReactApexChart from 'react-apexcharts';

const InflationChart = () => {
  const options = {
    series: [{
      name: 'Inflation',
      data: [6, 9, 11, 13, 10, 15,12, 9, 7, 5, 9, 5]
    }],
    chart: {
      height: 350,
      type: 'bar',
      toolbar: {
        show: false // This hides the download menu
      },
      background: 'transparent' // This removes the background overlay
    },
    plotOptions: {
      bar: {
         // This sets the width of the bars
        borderRadius: 20, 
        columnWidth: '50px',
        color:["#fff"],
        dataLabels: {
          position: 'top',
        },
      }
    },
    colors: ['#7294ff'],
    dataLabels: {
      enabled: true,
      formatter: function (val) {
        return val + "%";
      },
      offsetY: -20,
      style: {
        fontSize: '0px', // Increased from 0px to make labels visible
        colors: ["#fff"] // White color for data labels
      }
    },
    xaxis: {
      tickAmount: 7,
      categories: ["5", "9", "11", "13", "15", "17", "19", "21", "23", "25", "27", "29"],
      position: 'bottom',
      labels: {
        style: {
          fontSize: '16px',
          colors: "#fff" // White color for x-axis labels
        }
      },
      axisBorder: {
        show: true
      },
      axisTicks: {
        show: false
      },
      crosshairs: {
        
        fill: {
          type: 'gradient',
          gradient: {
            colorFrom: '#D8E3F0',
            colorTo: '#BED1E6',
            stops: [0, 100],
           
          }
        }
      },
      tooltip: {
        enabled: true,
      }
    },
    yaxis: {
      tickAmount: 3,
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false,
      },
      labels: {
        style: {
          colors: "#fff" // White color for y-axis labels
        }
      }
    },
    grid: {
      borderColor: '#555', // Change horizontal grid color
      yaxis: {
        lines: {
          show: true
        }
      }
    },
    title: {
      floating: true,
      offsetY: 330,
      align: 'center',
      style: {
        color: '#fff' // White color for title
      }
    },
    theme: {
      mode: 'dark' // This will help with visibility of white text on dark background
    }
  };
  return (
    <div id="chart">
      <ReactApexChart options={options} series={options.series} type="bar" height={250} />
    </div>
  );
};

export default InflationChart;