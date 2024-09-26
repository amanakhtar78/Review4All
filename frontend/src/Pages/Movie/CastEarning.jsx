import React, { useState } from "react";
import Chart from "react-apexcharts";

const CastEarning = () => {
  const [chartType, setChartType] = useState("bar"); // Default to bar chart

  // Common options for both charts
  const options = {
    chart: {
      height: 350,
    },
    title: {
      text: "Actor Payments",
      align: "center",
      style: {
        fontSize: "18px",
      },
    },
    labels: [
      "SRK",
      "Deepika",
      "Ranveer",
      "Alia Bhatt",
      "Ranbir Kapoor",
      "Priyanka Chopra",
      "Amitabh Bachchan",
      "Katrina Kaif",
      "Varun Dhawan",
      "Kareena Kapoor",
    ], // Actor names for Pie chart
    colors: [
      "#008FFB",
      "#008FFB",
      "#00E396",
      "#FEB019",
      "#775DD0",
      "#546E7A",
      "#26A69A",
      "#D10CE8",
      "#2E93fA",
      "#FF9800",
    ], // Custom colors for each actor
  };

  // Actor payments data (in crores)
  const series = [50, 25, 20, 15, 18, 12, 30, 22, 19, 17]; // Payments for each actor in crores

  // Additional options specific to bar chart
  const barOptions = {
    ...options,
    chart: {
      ...options.chart,
      type: "bar",
    },
    xaxis: {
      categories: [
        "SRK",
        "Deepika",
        "Ranveer",
        "Alia Bhatt",
        "Ranbir Kapoor",
        "Priyanka Chopra",
        "Amitabh Bachchan",
        "Katrina Kaif",
        "Varun Dhawan",
        "Kareena Kapoor",
      ], // Actor names for Bar chart
    },
    dataLabels: {
      enabled: true,
      formatter: (val) => `${Math.round(val)}`, // Round off the crores for bar chart
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "55%",
        endingShape: "rounded",
      },
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
          series={[{ name: "Payment", data: series }]}
          type="bar"
          height={350}
        />
      ) : (
        <Chart options={options} series={series} type="pie" height={450} />
      )}
    </div>
  );
};

export default CastEarning;
