import React, { useState } from "react";
import Chart from "react-apexcharts";

const CountryEarningsChart = () => {
  const [chartType, setChartType] = useState("bar"); // Default to bar chart

  // Options for the chart (common for both pie and bar views)
  const options = {
    chart: {
      height: 350,
    },
    title: {
      text: "Earnings by Country",
      align: "center",
      style: {
        fontSize: "18px",
      },
    },
    colors: [
      "#FF9800",
      "#008FFB",
      "#00E396",
      "#775DD0",
      "#FEC90F",
      "#FF9800",
      "#33B2DF",
    ], // Customize colors for each country
    dataLabels: {
      enabled: true,
      formatter: (val) => `${Math.round(val)}`, // Show earnings in millions
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "55%",
        endingShape: "rounded",
      },
    },
    labels: ["India", "China", "USA", "UK", "Japan", "Germany", "Others"], // Labels for Pie chart
  };

  // Earnings data (in millions)
  const series = [300, 200, 150, 100, 80, 90, 250]; // Earnings in millions for each country

  // Additional options specific to bar chart
  const barOptions = {
    ...options,
    chart: {
      ...options.chart,
      type: "bar",
    },
    xaxis: {
      categories: ["India", "China", "USA", "UK", "Japan", "Germany", "Others"], // Categories for Bar chart
    },
  };

  return (
    <div className="m-5 p-5 bg-slate-100 rounded">
      {/* Buttons to switch chart types */}
      <div className="flex justify-center mb-4">
        <button
          className={`px-4 py-2 mr-2 ${
            chartType === "bar" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
          onClick={() => setChartType("bar")}
        >
          Bar Chart
        </button>
        <button
          className={`px-4 py-2 ${
            chartType === "pie" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
          onClick={() => setChartType("pie")}
        >
          Pie Chart
        </button>
      </div>

      {/* Conditional rendering based on chart type */}
      {chartType === "bar" ? (
        <Chart
          options={barOptions}
          series={[{ name: "Earnings", data: series }]}
          type="bar"
          height={350}
        />
      ) : (
        <Chart options={options} series={series} type="pie" height={450} />
      )}
    </div>
  );
};

export default CountryEarningsChart;
