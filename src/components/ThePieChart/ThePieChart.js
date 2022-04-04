import React from 'react';
import { Pie, PieChart, Tooltip } from 'recharts';

const ThePieChart = ({ data }) => {
    return (
        <div>
            <p className='text-center text-xl text-red-800 font-bold mb-5'>Investment VS Revenue</p>
            <PieChart width={400} height={200}>
                <Pie data={data.data} dataKey="investment" cx="50%" cy="50%" outerRadius={60} fill="#8884d8" />
                <Pie data={data.data} dataKey="revenue" cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="#82ca9d" label />
                <Tooltip></Tooltip>
            </PieChart>
        </div>
    );
};

export default ThePieChart;