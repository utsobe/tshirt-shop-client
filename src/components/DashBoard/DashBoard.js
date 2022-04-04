import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Line, LineChart } from 'recharts';
import TheAreaChart from '../TheAreaChart/TheAreaChart';
import TheBarChart from '../TheBarChart/TheBarChart';
import TheLineChart from '../TheLineChart/TheLineChart';
import ThePieChart from '../ThePieChart/ThePieChart';

const DashBoard = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get('data.json')
            .then(data => setData(data))
    }, []);
    return (
        <div className='grid grid-cols-2 gap-12 my-10'>
            <div className='flex items-center justify-center'>
                <TheLineChart data={data}></TheLineChart>
            </div>
            <div className='flex items-center justify-center'>
                <TheAreaChart data={data}></TheAreaChart>
            </div>
            <div className='flex items-center justify-center'>
                <TheBarChart data={data}></TheBarChart>
            </div>
            <div className='flex items-center justify-center'>
                <ThePieChart data={data}></ThePieChart>
            </div>
        </div>
    );
};

export default DashBoard;