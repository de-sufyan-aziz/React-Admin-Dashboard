import React from 'react'
import AdminSideBar from '../components/AdminSideBar'
import { useState, useCallback, useEffect } from 'react'
import TableHOC from '../components/TableHOC'
import { FaTrash } from 'react-icons/fa'

const btnStyle = {
    color: "red",
}

const img1 = "https://img.freepik.com/free-photo/confident-lovely-woman-looking-camera_1262-17330.jpg";

const columns = [
    {
        Header: "Avatar",
        accessor: "avatar",
    },
    {
        Header: "Name",
        accessor: "name",
    },
    {
        Header: "Gender",
        accessor: "gender",
    },
    {
        Header: "Email",
        accessor: "email",
    },
    {
        Header: "Role",
        accessor: "role",
    },
    {
        Header: "Action",
        accessor: "action",
    },
];

const arr = [
    {
        avatar: <img src={img1} alt="" />,
        name: "Laila",
        gender: "Female",
        email: "lailameinlaila@gmail.com",
        role: "user",
        action: (<button> <FaTrash /> </button>)
    },
    {
        avatar: <img src={img1} alt="" />,
        name: "Laila",
        gender: "Female",
        email: "lailameinlaila@gmail.com",
        role: "user",
        action: (<button> <FaTrash /> </button>)
    },
    {
        avatar: <img src={img1} alt="" />,
        name: "Laila",
        gender: "Female",
        email: "lailameinlaila@gmail.com",
        role: "user",
        action: (<button> <FaTrash /> </button>)

    },
    {
        avatar: <img src={img1} alt="" />,
        name: "Laila",
        gender: "Female",
        email: "lailameinlaila@gmail.com",
        role: "user",
        action: (<button> <FaTrash /> </button>)

    },
];

const Customer = () => {
    const [data] = useState(arr);

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

    const Table = useCallback(TableHOC(columns, data, "dashboard-product-box", "Customers", true), [])
    return (
        <div className='adminContainer' style={phoneActive ? { backgroundColor: 'white' } : null}>
            <AdminSideBar />
            <main>
                {Table()}
            </main>
        </div>
    )
}

export default Customer
