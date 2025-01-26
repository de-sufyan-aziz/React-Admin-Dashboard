import { Link } from 'react-router-dom';
import AdminSideBar from '../components/AdminSideBar'
import TableHOC from '../components/TableHOC'
import { useState, useCallback, useEffect } from "react"


const arr = [
    {
        user: "Ahmed",
        amount: 4500,
        discount: 500,
        quantity: 57,
        status: "Shipping",
        action: <Link to="/admin/transaction/asd">Manage</Link>
    },
    {
        user: "Shahzaib",
        amount: 300,
        discount: 970,
        quantity: 157,
        status: "Shipping",
        action: <Link to="/admin/transaction/asd">Manage</Link>
    },

    {
        user: "Yaseen",
        amount: 1500,
        discount: 100,
        quantity: 33,
        status: "Shipping",
        action: <Link to="/admin/transaction/asd">Manage</Link>
    },

    {
        user: "Mustafa",
        amount: 2600,
        discount: 240,
        quantity: 200,
        status: "Shipping",
        action: <Link to="/admin/transaction/asd">Manage</Link>
    },


];

const columns = [
    {
        Header: "User",
        accessor: "user",
    },
    {
        Header: "Amount",
        accessor: "amount",
    },
    {
        Header: "Discount",
        accessor: "discount",
    },
    {
        Header: "Quantity",
        accessor: "quantity",
    },
    {
        Header: "Status",
        accessor: "status",
    },
    {
        Header: "Action",
        accessor: "action",
    },
];


const Transaction = () => {

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

    const Table = useCallback(TableHOC(columns, data, "dashboard-product-box", "Transactions", true))

    return (
        <div className='adminContainer' style={phoneActive ? { backgroundColor: 'white', gap: 0 } : null}>
            <AdminSideBar />
            <main>
                {Table()}
            </main>
        </div>
    )
}

export default Transaction
