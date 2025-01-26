import React from 'react'
import AdminSideBar from '../../components/AdminSideBar'
import { DoughnutChart, PieChart } from '../../components/Chart'
import { categories } from '../../assets/data.json'


const PieCharts = () => {

    return (
        <div className='adminContainer'>
            <AdminSideBar />

            <main className='chart-container'>
                <h1>Pie & Dougnut Charts</h1>
                <section>
                    <div>
                        <PieChart labels={["Processing", "Shipped", "Delivered"]} data={[10, 30, 15]} backgroundColor={[`hsl(110,80%,80%)`, `hsl(110,80%,50%)`, `hsl(110,40%,80%)`]} offset={[0, 0, 50]} />
                    </div>
                    <h2>ORDER FULLFILMENT INFO</h2>
                </section>

                <section>
                    <div>
                        <DoughnutChart labels={categories.map((i) => i.heading)} data={[10, 30, 15]} backgroundColor={categories.map((i) => `hsl(${i.value * 2} , 80%, 50%)`)} legends={false} cutout={60} offset={[10, 10, 70]} />
                    </div>
                    <h2>PRODUCT CATEGORY RATIO</h2>
                </section>

                <section>
                    <div>
                        <DoughnutChart labels={["In Stock", "Out of Stock"]} data={[10, 30]} backgroundColor={[`hsl(190, 80%, 50%)`, `hsl(280, 40%, 50%)`]} legends={false} cutout={"70%"} offset={[70, 0]} />
                    </div>
                    <h2>STOCK AVAILABILTY </h2>
                </section>

                <section>
                    <div>
                        <DoughnutChart labels={[]} data={[10, 30, 15]} backgroundColor={categories.map((i) => `hsl(${i.value * 4} , 80%, 50%)`)} offset={[10, 10, 70]} legends={false} cutout={"70%"} />
                    </div>
                    <h2>REVENUE DISTRIBUTION</h2>
                </section>

                <section>
                    <div>
                        <DoughnutChart labels={[
                            'Marketing Cost', 'Discount', 'Burnt', 'Production Cost', 'Net Margin'
                        ]} data={[50, 35, 80, 50, 75]} backgroundColor={categories.map((i) => `hsl(${i.value * 11} , 80%, 50%)`)} offset={[20, 20, 20, 20, 70]} legends={false} cutout={"70%"} />
                    </div>
                    <h2>REVENUE DISTRIBUTION</h2>
                </section>
            </main>
        </div>
    )
}

export default PieCharts
