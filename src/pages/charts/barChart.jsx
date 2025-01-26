import React from 'react'
import AdminSideBar from '../../components/AdminSideBar'
import { BarChart } from '../../components/Chart'
import { useState, useEffect } from 'react'
const months = [
    "January", "Febuaray", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
];

const BarCharts = () => {
    const [phoneActive, setPhoneActive] = useState(window.innerWidth < 1100);


    useEffect(() => {
        const handleResize = () => {
            setPhoneActive(window.innerWidth < 1100);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className='adminContainer'
            style={phoneActive ? { backgroundColor: 'white' } : null}>
            <AdminSideBar />

            <main className='chart-container' >
                <h1>Bar Charts</h1>
                <section>
                    <BarChart data_1={[112, 90, 382, 574, 443, 239, 88]} data_2={[200, 520, 234, 112, 90, 382, 120]} title_1="Products" title_2="Users" bgColor1={`hsl(260, 50%, 30%)`} bgColor2={`hsl(360, 90%, 90%)`} />

                    <h2>TOP SELLING PRODUCTS & TOP CUSTOMER</h2>
                </section>
                <section>
                    <BarChart horizontal={true} data_1={[112, 90, 382, 574, 443, 239, 1349, 2394, 212, 291, 431, 289]} data_2={[]} title_1="" title_2="" bgColor1={`hsl(180, 40%, 50%)`} bgColor2="" legends={false} labels={months} />
                    <h2>ORDER THROUGHOUT THE YEAR</h2>
                </section>
            </main>
        </div>
    )
}

export default BarCharts
