import * as React from 'react';
import { Box } from '@mui/material';
import { LineChart } from '@mui/x-charts';

export default function ChartLine({boxSize}) {
  return (
    <div className="p-4 bg-white rounded-xl shadow-md">
      <h3 className="text-lg text-[#2C3E50] font-bold mb-4">Monthly Expenses</h3>
      <Box sx={{ width: '100%', maxWidth: 700, mx: 'auto' }}>
        <LineChart
          xAxis={[
            {
              data: [
                'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
              ],
              scaleType: 'point',
              label: 'Month',
            },
          ]}
          series={[
            {
              data: [300, 200, 400, 350, 500, 450, 600, 700, 800, 750, 900, 1000],
              label: 'Expenses ($)',
              color: '#4CAF50',
            },
          ]}
          width={boxSize?.width-40 || 700}
          height={boxSize?.height-105 || 400}
        />
      </Box>
    </div>
  );
}
