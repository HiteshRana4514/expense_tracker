import React from "react";
import Box from "@mui/material/Box";
import { PieChart } from "@mui/x-charts/PieChart";
import { isMobile } from "../hooks/isMobile";
function PieChartComp() {
  const mobile = isMobile();
  return (
    <>
      <div className="p-4 bg-white rounded-xl shadow-md h-full">
        <h3 className="text-lg text-[#2C3E50] font-bold mb-4">
          Category Breakdown
        </h3>
        <Box sx={{ width: "100%", maxWidth: 700, mx: "auto" }}>
          <PieChart
            series={[
              {
                data: [
                  { id: 0, value: 300, label: "Food", color: "#FF6384" },
                  { id: 1, value: 200, label: "Transport", color: "#36A2EB" },
                  {
                    id: 2,
                    value: 150,
                    label: "Entertainment",
                    color: "#FFCE56",
                  },
                  { id: 3, value: 100, label: "Utilities", color: "#4BC0C0" },
                  { id: 4, value: 50, label: "Other", color: "#9966FF" },
                ],
                innerRadius: 50,
                outerRadius: 150,
              },
            ]}
            width={700}
            height={mobile ? 200 : 300}
          />
        </Box>
      </div>
    </>
  );
}

export default PieChartComp;
