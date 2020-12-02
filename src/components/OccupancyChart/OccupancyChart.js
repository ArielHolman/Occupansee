import React, { Component } from "react";
import Chart from "chart.js";
import "./OccupancyChart.css";

export default class OccupancyChart extends Component {
  chartRef = React.createRef();

  componentDidMount = () => {
    const currentOccupancy = 95;
    const maxOccupancy = 150;
    const percent = currentOccupancy/maxOccupancy*100;
    const color = "#01713c";
    const canvas = "chartCanvas";
    const container = "chartContainer";

    const percentValue = percent.toFixed(0); // Sets the single percentage value to a whole number
    const colorGreen = color, // Sets the chart color
      animationTime = "1400"; // Sets speed/duration of the animation

    let chartCanvas = document.getElementById(canvas), // Sets canvas element by ID
      chartContainer = document.getElementById(container), // Sets container element ID
      divElement = document.createElement("div"), // Create element to hold and show percentage value in the center on the chart
      domString =
        '<div class="chart__value"><p>' + percentValue + "%</p></div>"; // String holding markup for above created element

    // Create a new Chart object
    const doughnutChart = new Chart(chartCanvas, {
      type: "doughnut", // Set the chart to be a doughnut chart type
      data: {
        datasets: [
          {
            data: [percentValue, 100 - percentValue], // Set the value shown in the chart as a percentage (out of 100)
            backgroundColor: [colorGreen], // The background color of the filled chart
            borderWidth: 0, // Width of border around the chart
          },
        ],
      },

      options: {
        cutoutPercentage: 75, // The percentage of the middle cut out of the chart
        responsive: false, // Set the chart to not be responsive
        tooltips: {
          enabled: false, // Hide tooltips
        },
      },
    });

    Chart.defaults.global.animation.duration = animationTime; // Set the animation duration

    divElement.innerHTML = domString; // Parse the HTML set in the domString to the innerHTML of the divElement
    chartContainer.appendChild(divElement.firstChild); // Append the divElement within the chartContainer as it's child
  };
  render() {
    return (
      <div>
        <main className="main">
          <section className="chart" id="chartContainer">
            <figure className="chart__figure">
              <canvas
                className="chart__canvas"
                id="chartCanvas"
                width="360"
                height="360"
                aria-label="Example doughnut chart showing data as a percentage"
                role="img"
                ref={this.chartRef}
              ></canvas>
            </figure>
          </section>
        </main>
      </div>
    );
  }
}
