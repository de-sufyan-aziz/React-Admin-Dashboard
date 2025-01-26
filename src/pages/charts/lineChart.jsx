import React from 'react'
import AdminSideBar from '../../components/AdminSideBar'
import { LineCharts } from '../../components/Chart';


const months = [
    "January", "Febuaray", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
];

const LineChart = () => {

    return (
        <div className='adminContainer'>
            <AdminSideBar />

            <main className='chart-container'>
                <h1>Line Charts</h1>
                <section>
                    <LineCharts data={[60, 51, 71, 85, 66, 72, 70, 90, 75, 110, 89, 90]} label={"Users"} bgColor={`rgba(56, 179, 255, 0.15)`} borderColor={`rgb(53, 161, 255)`} labels={months} legends={false} />
                    <h2>ACTIVE USER</h2>
                </section>

                <section>
                    <LineCharts data={[12, 15, 29, 55, 40, 71, 75, 66, 70, 25, 90, 70]} label={"Users"} bgColor={`rgba(183, 58, 255, 0.15)`} borderColor={`rgb(183, 58, 255)`} labels={months} legends={false} />
                    <h2>TOTAL PRODUCT</h2>
                </section>

                <section>
                    <LineCharts data={[12, 15, 29, 55, 40, 71, 75, 66, 70, 25, 90, 70]} label={"Users"} bgColor={`rgba(9, 255, 0, 0.15)`} borderColor={`rgb(8, 180, 2)`} labels={months} legends={false} />
                    <h2>TOTAL REVENUE</h2>
                </section>

                <section>
                    <LineCharts data={[12, 15, 29, 55, 40, 71, 75, 66, 70, 25, 90, 70]} label={"Users"} bgColor={`rgba(255, 222, 58, 0.33)`} borderColor={`rgb(255, 222, 58)`} labels={months} legends={false} />
                    <h2>DISCOUNT ALLOTED</h2>
                </section>
            </main>
        </div>
    )
}



export default LineChart
