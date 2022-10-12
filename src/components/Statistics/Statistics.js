import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const Statistics = () => {
    const questions = useLoaderData();
    const {data} = questions;

    return (
        <div>
            <h1>Statistics</h1>


            {/* <ResponsiveContainer width="100%" height="100%"> */}
                    <BarChart
                    width={500}
                    height={300}
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5}}>
                <Bar dataKey="total" fill="#8884d8" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <CartesianGrid strokeDasharray="4 4" />
            </BarChart>
        {/* </ResponsiveContainer> */}


        </div>
    );
};

export default Statistics;