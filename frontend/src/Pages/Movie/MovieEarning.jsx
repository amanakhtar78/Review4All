import React, { useState } from "react";
import Chart from "react-apexcharts";

const MovieEarning = () => {
  const [chartView, setChartView] = useState("daily"); // Default to daily view

  // Options for the chart (common for all views)
  const options = {
    chart: {
      height: 350,
    },
    title: {
      text: "Earnings Over Time",
      align: "center",
      style: {
        fontSize: "18px",
      },
    },
    xaxis: {
      categories: [], // Categories will change based on view (days, weeks, months)
    },
    dataLabels: {
      enabled: true,
      formatter: (val) => `${val}`, // Show the earnings in millions
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "55%",
        endingShape: "rounded",
      },
    },
    colors: ["#00E396"], // Customize color
  };

  // Data for each view (in millions)
  const dailyEarnings = {
    categories: [
      "Day 1",
      "Day 2",
      "Day 3",
      "Day 4",
      "Day 5",
      "Day 6",
      "Day 7",
      "Day 8",
      "Day 9",
      "Day 10",
    ],
    series: [
      { name: "Earnings", data: [10, 12, 8, 15, 9, 20, 22, 25, 18, 30] },
    ], // Daily earnings in millions
  };

  const weeklyEarnings = {
    categories: [
      "Week 1",
      "Week 2",
      "Week 3",
      "Week 4",
      "Week 5",
      "Week 6",
      "Week 7",
      "Week 8",
      "Week 9",
      "Week 10",
    ],
    series: [
      { name: "Earnings", data: [50, 55, 60, 45, 70, 65, 75, 80, 90, 100] },
    ], // Weekly earnings in millions
  };

  const monthlyEarnings = {
    categories: ["Month 1", "Month 2", "Month 3", "Month 4", "Month 5"],
    series: [{ name: "Earnings", data: [200, 250, 300, 350, 400] }], // Monthly earnings in millions
  };

  // Select data based on the view (daily, weekly, monthly)
  const getCurrentEarnings = () => {
    if (chartView === "daily") return dailyEarnings;
    if (chartView === "weekly") return weeklyEarnings;
    if (chartView === "monthly") return monthlyEarnings;
  };

  const currentEarnings = getCurrentEarnings();

  return (
    <div className="m-5 p-5 bg-slate-100 rounded">
      {/* Buttons to switch chart views */}
      <div className="flex justify-center mb-4">
        <button
          className={`px-4 py-2 mr-2 ${
            chartView === "daily" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
          onClick={() => setChartView("daily")}
        >
          Daily Earnings
        </button>
        <button
          className={`px-4 py-2 mr-2 ${
            chartView === "weekly" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
          onClick={() => setChartView("weekly")}
        >
          Weekly Earnings
        </button>
        <button
          className={`px-4 py-2 ${
            chartView === "monthly" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
          onClick={() => setChartView("monthly")}
        >
          Monthly Earnings
        </button>
      </div>

      {/* Chart */}
      <Chart
        options={{
          ...options,
          xaxis: { categories: currentEarnings.categories },
        }}
        series={currentEarnings.series}
        type="bar"
        height={350}
      />
    </div>
  );
};

export default MovieEarning;
