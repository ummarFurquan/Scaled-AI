import React, { useState, useEffect } from 'react';
import { Chart } from 'primereact/chart';
import './Pie.css'; // Ensure you import the CSS file

export default function DoughnutChartDemo() {
    const [chartData, setChartData] = useState({});
    const [chartOptions, setChartOptions] = useState({});

    useEffect(() => {
        const documentStyle = getComputedStyle(document.documentElement);
        const data = {
            labels: ['Engage with our customers', 'Foster transparency and effective communication', 'Provide optimal solutions', 'Build trust through partnership'],
            datasets: [
                {
                    data: [25, 25, 25, 25],
                    backgroundColor: [
                        documentStyle.getPropertyValue('--blue-500'), 
                        documentStyle.getPropertyValue('--yellow-500'), 
                        documentStyle.getPropertyValue('--green-500'),
                        documentStyle.getPropertyValue('--red-500'),
                    ],
                    hoverBackgroundColor: [
                        documentStyle.getPropertyValue('--blue-400'), 
                        documentStyle.getPropertyValue('--yellow-400'), 
                        documentStyle.getPropertyValue('--green-400'),
                        documentStyle.getPropertyValue('--red-400')
                    ]
                }
            ]
        };
        const options = {
            cutout: '60%',
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom'
                },
                tooltip: {
                    enabled: false // Disable tooltips
                }
            }
        };

        setChartData(data);
        setChartOptions(options);
    }, []);

    return (
        <div className="card" style={{ padding: '2rem', border: '1px solid white' }}>
            <div className="chart-text-container">
                <div className="chart-container">
                    <Chart type="doughnut" data={chartData} options={chartOptions} />
                </div>
                <div className="text-container">
                    <h3 className='first' style={{ overflow: 'hidden' }}>
                        <span className="red-asterisk">*</span> Engage with our customers
                    </h3>
                    <p style={{ overflow: 'hidden' }}>Our priority is to delve deep into our clients' business goals, challenges, and pain points. This insight drives our ability to engineer solutions tailored precisely to their individual needs.</p>
                    <h3 className='second' style={{ overflow: 'hidden' }}>
                        <span className="blue-asterisk">*</span> Foster transparency and effective communication
                    </h3>
                    <p style={{ overflow: 'hidden' }}>From the moment of initial discussions to the final stages of the project, we maintain ongoing communication with our customers. We value their input and promptly address any feedback, ensuring their needs are met throughout the process.</p>
                    <h3 className='third' style={{ overflow: 'hidden' }}>
                        <span className="green-asterisk">*</span> Provide optimal solutions
                    </h3>
                    <p style={{ overflow: 'hidden' }}>Our commitment lies in delivering optimal solutions to our clients. Employing cutting-edge technologies and industry best practices, we guarantee the effectiveness, efficiency, and reliability of our solutions.</p>
                    <h3 className='fourth' style={{ overflow: 'hidden' }}>
                        <span className="yellow-asterisk">*</span> Build trust through partnership
                    </h3>
                    <p style={{ overflow: 'hidden' }}>Our goal is to forge lasting partnerships with our clients, going beyond the traditional vendor-client relationship. We are deeply invested in their success and will extend every effort to help them realize their objectives.</p>
                </div>
            </div>
        </div>
    );
}
