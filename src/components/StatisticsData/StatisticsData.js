// import React from 'react';
// import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// import React, { PureComponent } from 'react';



import React from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';




const StatisticsData = ({info}) => {

    return (
        <div>
            {/* <ResponsiveContainer width="100%" height="100%">
                <BarChart width={150} height={40} data={info}>
                    <Bar dataKey="total" fill="#8884d8" />
                </BarChart>
            </ResponsiveContainer> */}
            <BarChart width={500} height={200} data={info}>
                <Bar dataKey="total" fill="#8884d8" />
                <XAxis dataKey="id" />
                <YAxis />
                <Tooltip></Tooltip>
            </BarChart>

            {
                console.log(info)
            }
        </div>
    )};
export default StatisticsData;