import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Month", "User", "Doctor","Clinic"],
  ["Jan", 200, 10, 10],
  ["Feb", 210, 15, 30],
  ["Mar", 220, 40, 50],
  ["Apr", 230, 50, 100],
  ["May", 240, 50, 150],
  ["Jun", 250, 60, 150], 
  ["Jul", 240, 60, 150], 
  ["Aug", 270, 70, 120], 
  ["Sep", 310, 80, 150], 
  ["Oct", 380, 80, 160],
  ["Nov", 400, 100, 130], 
  ["Dec", 550, 100, 180],
];

export const options = {
  title: "Graph Doctorcare",
  curveType: "function",
  legend: { position: "bottom" },
};

export default function BarChart() {
  return (
    <Chart
      chartType="LineChart"
      width="100%"
      height="400px"
      data={data}
      options={options}
    />
  );
}