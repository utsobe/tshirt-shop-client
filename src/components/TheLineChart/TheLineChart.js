import React from 'react';
import { Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const TheLineChart = ({ data }) => {
    return (
        <div>
            <p className='text-center text-xl text-red-800 font-bold mb-5'>Month Wise Sale</p>
            <LineChart height={200} width={350} data={data.data}>
                <Line type="monotone" dataKey='sell'></Line>
                <XAxis dataKey='month'></XAxis>
                <YAxis></YAxis>
                <Tooltip></Tooltip>
            </LineChart>
        </div>
    );
};

export default TheLineChart;