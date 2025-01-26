import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { AiFillFileText, } from 'react-icons/ai';
import { FaChartBar, FaChartLine, FaChartPie, FaGamepad, FaStopwatch } from 'react-icons/fa';
import { IoIosPeople } from 'react-icons/io';
import { RiCoupon3Fill, RiDashboardFill, RiShoppingBag3Fill } from 'react-icons/ri';
import { HiMenuAlt4 } from "react-icons/hi";




const AdminSideBar = () => {

    const [showModal, setShowModal] = useState(true);
    const [phoneActive, setPhoneActive] = useState(window.innerWidth < 1100);
    const [showHamburger, setHamburger] = useState(true);

    const location = useLocation();

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
        <>
            {(phoneActive && showHamburger) &&
                <button id='hamburger' style={{
                    top: '10px',
                    left: '10px',
                    position: "relative",
                    backgroundColor: 'white',
                    height: '2.9rem',
                    padding: '5px'
                }} onClick={() => (
                    setShowModal(!showModal),
                    setHamburger(false)
                )}>
                    <HiMenuAlt4 />
                </button >
            }

            <aside style={phoneActive ? {
                width: "20rem",
                height: "100vh",
                position: "fixed",
                top: 0,
                left: showModal ? "-20rem" : '0rem',
                transition: "all 0.5s"
            } : {}}>
                <section>
                    {phoneActive &&
                        <button id='hamburger' onClick={() => (
                            setShowModal(!showModal),
                            setHamburger(true)
                        )}>
                            <HiMenuAlt4 />
                        </button >
                    }
                    <h2 style={{ left: '10px !important', position: 'relative' }}>Logo</h2>
                </section>
                <div>
                    <h5>Dashboard</h5>
                    <ul>
                        <Li url='/admin/dashboard' text='Dashboard' Icon={RiDashboardFill} location={location} />
                        <Li url='/admin/products' text='Product' Icon={RiShoppingBag3Fill} location={location} />
                        <Li url='/admin/customer' text='Customer' Icon={IoIosPeople} location={location} />
                        <Li url='/admin/transaction' text='Transaction' Icon={AiFillFileText} location={location} />
                    </ul>
                </div>

                <SideBarChart location={location} />
                {/* <SideBarApps location={location} /> */}
            </aside >
        </>
    )
}

// li tag

const Li = ({ url, text, location, Icon }) => (
    <li style={{
        backgroundColor: location.pathname.includes(url) ?
            'rgba(0, 115, 255, 0.1)' : 'white'
    }}>
        <Link to={url} style={{
            color: location.pathname.includes(url) ?
                'rgba(0, 115,255)' : 'black'
        }}>
            <Icon />
            {text}
        </Link>
    </li>
)

// Charts
const SideBarChart = ({ location }) => (
    <div>
        <h5>Charts</h5>
        <ul>
            <Li url='/admin/chart/bar' text='Bar' Icon={FaChartBar} location={location} />
            <Li url='/admin/chart/pie' text='Pie' Icon={FaChartPie} location={location} />
            <Li url='/admin/chart/line' text='Line' Icon={FaChartLine} location={location} />
        </ul>
    </div>
)

// Apps
const SideBarApps = ({ location }) => (
    <div>
        <h5>Apps</h5>
        <ul>
            <Li url='/admin/app/stopwatch' text='Stopwatch' Icon={FaStopwatch} location={location} />
            <Li url='/admin/app/coupon' text='Coupon' Icon={RiCoupon3Fill} location={location} />
            <Li url='/admin/app/toss' text='Toss' Icon={FaGamepad} location={location} />
        </ul>
    </div>
)

export default AdminSideBar
