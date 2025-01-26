import React, { useCallback, useState, useEffect } from 'react'
import AdminSideBar from '../components/AdminSideBar'
import TableHOC from '../components/TableHOC'
import { Link, Outlet } from 'react-router-dom';
import { FaPlus } from 'react-icons/fa';

const columns = [
    {
        Header: "Photo",
        accessor: "photo"
    },
    {
        Header: "Name",
        accessor: "name"
    },
    {
        Header: "Price",
        accessor: "price"
    },
    {
        Header: "Stock",
        accessor: "stock"
    },
    {
        Header: "Action",
        accessor: "action"
    }
];

const img1 = "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

const img2 = "https://plus.unsplash.com/premium_photo-1679513691474-73102089c117?q=80&w=2013&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

const arr = [
    {
        photo: <img src={img1} alt="" />,
        name: "Wireless Headphones",
        price: 99.99,
        stock: 25,
        action: <Link to={`http://localhost:5173/admin/products/asd`}>Manage</Link>,
    },
    {
        photo: <img src={img2} alt="" />,
        name: "Smartphone Case",
        price: 19.99,
        stock: 100,
        action: <Link to={`http://localhost:5173/admin/products/asd`}>Manage</Link>,
    },

    {
        photo: <img src={img2} alt="" />,
        name: "Smartphone Case",
        price: 19.99,
        stock: 100,
        action: <Link to={`http://localhost:5173/admin/products/asd`}>Manage</Link>,
    },

    {
        photo: <img src={img2} alt="" />,
        name: "Smartphone Case",
        price: 19.99,
        stock: 100,
        action: <Link to={`http://localhost:5173/admin/products/asd`}>Manage</Link>,
    },
    {
        photo: <img src={img2} alt="" />,
        name: "Smartphone Case",
        price: 19.99,
        stock: 100,
        action: <Link to={`http://localhost:5173/admin/products/asd`}>Manage</Link>,
    },
    {
        photo: <img src={img1} alt="" />,
        name: "Wireless Headphones",
        price: 99.99,
        stock: 25,
        action: <Link to={`http://localhost:5173/admin/products/asd`}>Manage</Link>,
    },
    {
        photo: <img src={img1} alt="" />,
        name: "Wireless Headphones",
        price: 99.99,
        stock: 25,
        action: <Link to={`http://localhost:5173/admin/products/asd`}>Manage</Link>,
    },
    {
        photo: <img src={img1} alt="" />,
        name: "Wireless Headphones",
        price: 99.99,
        stock: 25,
        action: <Link to={`http://localhost:5173/admin/products/asd`}>Manage</Link>,
    }, {
        photo: <img src={img1} alt="" />,
        name: "Wireless Headphones",
        price: 99.99,
        stock: 25,
        action: <Link to={`http://localhost:5173/admin/products/asd`}>Manage</Link>,
    },
    {
        photo: <img src={img1} alt="" />,
        name: "Wireless Headphones",
        price: 99.99,
        stock: 25,
        action: <Link to={`http://localhost:5173/admin/products/asd`}>Manage</Link>,
    },
    {
        photo: <img src={img1} alt="" />,
        name: "Wireless Headphones",
        price: 99.99,
        stock: 25,
        action: <Link to={`http://localhost:5173/admin/products/asd`}>Manage</Link>,
    },
];


const Products = () => {

    const [data] = useState(arr);

    const Table = useCallback(TableHOC(columns, arr, "dashboard-product-box", "Products", true), []);
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
        <div className='adminContainer' style={phoneActive ? { backgroundColor: 'white' } : null}>
            <AdminSideBar />
            <main style={{
                display: "flex",
            }
            }>
                <Link to="/admin/products/new" className='create-product-btn'>
                    <FaPlus />
                </Link>
                {Table()}
            </main>

            <Outlet />
        </div>
    )
}

export default Products
