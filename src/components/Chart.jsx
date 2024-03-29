import React from 'react'
import { Line } from "react-chartjs-2"
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js"

ChartJS.register(
    CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend
);

const  Chart = ( {arr = [], currency, days} ) => {

    const prices = [];
    const date = [];
for (let i = 0; i < arr.length; i++) {
    if(days==="24h") date.push(new Date(arr[i][1]).toLocaleTimeString());
    else date.push(new Date(arr[i][1]).toLocaleDateString());
    prices.push(arr[i][1]);
    
}
    const data = {
        labels: date,
        datasets: [{
            label: `Price in ${currency}`,
            data: prices,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1,
            
        }]
    };
    return (
        <Line  options={{
            responsive: true,
        }}
            data={data}
        />
    )
}

export default Chart