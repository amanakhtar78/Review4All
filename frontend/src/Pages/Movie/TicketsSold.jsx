import React, { useState } from "react";
import Chart from "react-apexcharts";

const TicketsSold = () => {
  const [chartView, setChartView] = useState("daily"); // Default to daily view

  // Options for the chart (common for all views)
  const options = {
    chart: {
      height: 350,
    },
    title: {
      text: "Tickets Sold Over Time",
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
      formatter: (val) => `${val}`, // Show the tickets in thousands
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "55%",
        endingShape: "rounded",
      },
    },
    colors: ["#FF4560"], // Customize color
  };

  // Data for each view (in thousands of tickets sold)
  const dailyTickets = {
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
      {
        name: "Tickets Sold",
        data: [30, 40, 35, 50, 49, 60, 70, 91, 125, 130],
      },
    ], // Daily tickets sold in thousands
  };

  const weeklyTickets = {
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
      {
        name: "Tickets Sold",
        data: [300, 350, 400, 420, 480, 500, 530, 600, 670, 720],
      },
    ], // Weekly tickets sold in thousands
  };

  const monthlyTickets = {
    categories: ["Month 1", "Month 2", "Month 3", "Month 4", "Month 5"],
    series: [{ name: "Tickets Sold", data: [1200, 1400, 1600, 1800, 2000] }], // Monthly tickets sold in thousands
  };

  // Select data based on the view (daily, weekly, monthly)
  const getCurrentTickets = () => {
    if (chartView === "daily") return dailyTickets;
    if (chartView === "weekly") return weeklyTickets;
    if (chartView === "monthly") return monthlyTickets;
  };

  const currentTickets = getCurrentTickets();

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
          Daily Tickets Sold
        </button>
        <button
          className={`px-4 py-2 mr-2 ${
            chartView === "weekly" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
          onClick={() => setChartView("weekly")}
        >
          Weekly Tickets Sold
        </button>
        <button
          className={`px-4 py-2 ${
            chartView === "monthly" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
          onClick={() => setChartView("monthly")}
        >
          Monthly Tickets Sold
        </button>
      </div>

      {/* Chart */}
      <Chart
        options={{
          ...options,
          xaxis: { categories: currentTickets.categories },
        }}
        series={currentTickets.series}
        type="bar"
        height={350}
      />
    </div>
  );
};

export default TicketsSold;
