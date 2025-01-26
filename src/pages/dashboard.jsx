import React from 'react'
import AdminSideBar from '../components/AdminSideBar'
import { useState, useEffect } from 'react'

import { BsSearch } from 'react-icons/bs'
import { FaRegBell } from 'react-icons/fa'
import { HiTrendingUp, HiTrendingDown } from 'react-icons/hi'
import { BiMaleFemale } from 'react-icons/bi'

import userImg from '../assets/userpic.png'
import data from '../assets/data.json'
import { BarChart, DoughnutChart } from '../components/Chart'
import Table from '../components/DashboardTable.jsx'


const Dashboard = () => {

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
        <div className='adminContainer' style={phoneActive ? { display: 'flex' } : null}>
            {/* Siderbar */}
            <AdminSideBar />

            <main className='dashboard'>
                < div className="bar"  >
                    <BsSearch />
                    <input type="text" placeholder='Search for data, users, docs' />

                    <FaRegBell />
                    <img src={userImg} alt="" />
                </div >

                <section className='widgetcontainer'>
                    <WidgetItem percent={-20} value={34000} amount heading="Revenue" color="rgb(255,0,0)" />
                    <WidgetItem percent={80} value={240} heading="Users" color="rgb(0,200,25)" />
                    <WidgetItem percent={55} value={1204000} heading="Transactions" color="rgb(243,255,0)" />
                    <WidgetItem percent={60} value={1000} heading="Products" color="rgb(0,198,202)" />
                </section>

                <section className="graphContainer">
                    <div className="revenue-chart">
                        <h2>Revenue & Transactions</h2>
                        <BarChart
                            data_1={[1100, 2000, 1439, 3092, 4228, 600, 3000]}
                            data_2={[1500, 1000, 939, 2792, 4728, 1800, 2500]}
                            title_1='Revenue'
                            title_2='Transaction'
                            bgColor1='rgb(0,115,255)'
                            bgColor2='rgba(53,162,235,0.8)'
                        />
                    </div>
                    <div className="dashboard-category">
                        <h2>Inventory</h2>
                        {
                            data.categories.map((i) => (
                                <InventoryItem key={i.heading} heading={i.heading} color
                                    ={`hsl(${i.value * 4},${i.value}%,50%)`} value={i.value} />
                            ))
                        }
                    </div>
                </section>

                <section className="transaction-container">
                    <div className="gender-chart">
                        <h2>Gender Ratio</h2>
                        <DoughnutChart
                            labels={['Female', 'Male']}
                            data={[12, 19]}
                            backgroundColor={['hsl(340,82%,56%)', 'rgba(53, 162, 235, 0.8)']}
                            offset={5}
                            cutout={45}
                        />
                        <p>
                            <BiMaleFemale />
                        </p>
                    </div>

                    {/* Table */}
                    <Table data={data.transaction} />
                </section>
            </main >
        </div >
    )
}

//


// Inventory Items
const InventoryItem = ({ heading, value, color }) => (
    <div className="category-item">
        <h5>{heading}</h5>
        <div>
            <div style={{ backgroundColor: color, width: `${value}%` }} ></div>
        </div>
        <p>{value}%</p>
    </div >
)

// Widget Item function
const WidgetItem = ({ heading, value, percent, color, amount = false }) => (
    <article className='widget'>
        <div className="widgetInfo">
            <p>{heading}</p>
            <h4>{amount ? `$${value}` : value}</h4>

            {
                percent > 0 ? (
                    <span className='green'>
                        <HiTrendingUp /> +{percent}% {" "}
                    </span>
                ) : (
                    <span className='red'>
                        <HiTrendingDown /> {percent}% {" "}
                    </span>
                )
            }
        </div>

        <div className='widgetCircle' style={{
            background: `conic-gradient(
                ${color} ${(Math.abs(percent) / 100) * 360}deg,
                rgb(255,255,255) 0
            )`
        }}>
            <span style={{ color }} >{percent}%</span>
        </div>

    </article>
)



export default Dashboard
