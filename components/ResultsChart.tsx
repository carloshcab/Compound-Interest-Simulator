import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { MonthlyResult } from '../types';
import { formatCurrency } from '../utils/financial';

interface ResultsChartProps {
  data: MonthlyResult[];
}

export const ResultsChart: React.FC<ResultsChartProps> = ({ data }) => {
  // To avoid performance issues with too many data points (e.g. 30 years * 12 months = 360 points),
  // we can sample the data if it's too large, but recharts handles reasonable amounts well.
  
  return (
    <div className="h-[400px] w-full bg-white p-4 rounded-xl shadow-sm border border-gray-100">
      <h3 className="text-lg font-semibold text-gray-800 mb-4 text-center">Evolution Chart</h3>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <defs>
            <linearGradient id="colorTotal" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#991b1b" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#991b1b" stopOpacity={0}/>
            </linearGradient>
            <linearGradient id="colorInvested" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#1f2937" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#1f2937" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
          <XAxis 
            dataKey="month" 
            label={{ value: 'Months', position: 'insideBottomRight', offset: -5 }} 
            tickFormatter={(value) => value % 12 === 0 ? `${value / 12}y` : value}
            minTickGap={30}
          />
          <YAxis 
            tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`} 
          />
          <Tooltip 
            formatter={(value: number) => formatCurrency(value)}
            labelFormatter={(label) => `Month ${label}`}
            contentStyle={{ backgroundColor: '#fff', borderRadius: '8px', border: '1px solid #e5e7eb' }}
          />
          <Legend verticalAlign="top" height={36} iconType="rect"/>
          <Area 
            type="monotone" 
            dataKey="totalAccumulated" 
            name="Total Accumulated" 
            stroke="#991b1b" 
            fillOpacity={1} 
            fill="url(#colorTotal)" 
            strokeWidth={2}
          />
          <Area 
            type="monotone" 
            dataKey="totalInvested" 
            name="Total Invested" 
            stroke="#1f2937" 
            fillOpacity={1} 
            fill="url(#colorInvested)" 
            strokeWidth={2}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};