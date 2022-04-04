import React from 'react';
import { Area, AreaChart, CartesianGrid, Tooltip, XAxis, YAxis } from 'recharts';

const TheAreaChart = ({ data }) => {
    return (
        <div>
            <p className='text-center text-xl text-red-800 font-bold mb-5'>Investment VS Revenue</p>
            <AreaChart
                width={350}
                height={200}
                data={data.data}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Area type="monotone" dataKey="investment" stackId="1" stroke="#8884d8" fill="#8884d8" />
                <Area type="monotone" dataKey="revenue" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
            </AreaChart>
        </div>
    );
};

export default TheAreaChart;