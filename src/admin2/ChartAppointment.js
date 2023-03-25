import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Year", "Appointment"],
  ["Jan", 100],
  ["Feb", 130],
  ["Mar", 200],
  ["Apr", 250],
  ["May", 300],
  ["Jun", 480], 
  ["Jul", 600], 
  ["Aug", 740], 
  ["Sep", 890], 
  ["Oct", 950],
  ["Nov", 1000], 
  ["Dec", 1200],
];

export const options = {
  chart: {
    title: "Graph appointment",
    subtitle: "statistics in 2021",
  },
};

export default function ChartAppointment() {
  return (
    <Chart
      chartType="Bar"
      width="100%"
      height="400px"
      data={data}
      options={options}
    />
  );
}