import React, { useState } from "react";
import Chart from "react-apexcharts";

const AboutMovie = () => {
  const [chartType, setChartType] = useState("bar"); // Default to bar chart

  // Common options for both charts
  const options = {
    chart: {
      height: 350,
    },
    title: {
      text: "Spent vs Earned",
      align: "center",
      style: {
        fontSize: "18px",
      },
    },
    labels: ["Spent", "Earned"], // Labels for pie chart
    colors: ["#FF4560", "#008FFB"], // Custom colors
  };

  // Data for the series
  const series = [150, 450]; // Spent (150M) and Earned (450M)

  // Additional options specific to bar chart
  const barOptions = {
    ...options,
    chart: {
      ...options.chart,
      type: "bar",
    },
    xaxis: {
      categories: ["Movie"], // Only one movie
    },
    dataLabels: {
      enabled: true,
      formatter: (val) => `$${val}M`,
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
    <div className="mx-3">
      <section>
        <h1 className="font-bold text-2xl "> Jawan</h1>
        <h4 className="font-bold text-sm">
          26 jan 2024 &nbsp;&nbsp; Action/Thriller &nbsp;&nbsp; 2h 49m
        </h4>
        <p>
          Jawan is a 2023 Indian Hindi-language action thriller film co-written
          and directed by Atlee in his Hindi film debut. It is produced by Gauri
          Khan and Gaurav ...
        </p>
      </section>
      <h1 className="bg-gray-600 h-[2px] my-5"></h1>
      <section>
        <h1 className="font-bold text-xl mb-3 "> Rateing</h1>
        <main className="flex justify-between items-center font-bold text-sm p-2 rounded m-1 bg-slate-100">
          <aside className="flex items-center flex-col">
            <p>9.3</p>
            <p>IMDB</p>
          </aside>
          <aside className="flex items-center flex-col">
            <p>86%</p>
            <p>Rotton Tomato</p>
          </aside>
          <aside className="flex items-center flex-col">
            <p>95%</p>
            <p>Google</p>
          </aside>
          <aside className="flex items-center flex-col">
            <p>98%</p>
            <p>Review4all</p>
          </aside>
        </main>
      </section>
      <h1 className="bg-gray-600 h-[2px] my-5"></h1>
      <section>
        <h1 className="font-bold text-xl mb-3 "> Hit vs Disaster</h1>
        <main className="flex justify-between items-end font-bold text-sm p-2 rounded m-1 bg-slate-100">
          <aside className="flex items-center flex-col">
            <p className="h-[10px] bg-red-800 w-8">&nbsp;</p>
            <p>Disaster</p>
          </aside>
          <aside className="flex items-center flex-col">
            <p className="h-[10px] bg-red-500 w-8">&nbsp;</p>
            <p>Flop</p>
          </aside>
          <aside className="flex items-center flex-col">
            <p className="h-[10px] bg-yellow-500 w-8">&nbsp;</p>
            <p>Average</p>
          </aside>
          <aside className="flex items-center flex-col">
            <p className="h-[10px] bg-green-500 w-8">&nbsp;</p>
            <p>Hit</p>
          </aside>
          <aside className="flex items-center flex-col">
            <p className="h-[40px] bg-green-800 w-8">&nbsp;</p>
            <p>Blockbuster</p>
          </aside>
        </main>
      </section>
      <h1 className="bg-gray-600 h-[2px] my-5"></h1>
      <div className=" p-5 bg-slate-100 rounded">
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
            series={[
              { name: "Spent", data: [150] },
              { name: "Earned", data: [450] },
            ]}
            type="bar"
            height={350}
          />
        ) : (
          <Chart options={options} series={series} type="pie" height={350} />
        )}
      </div>
    </div>
  );
};

export default AboutMovie;
