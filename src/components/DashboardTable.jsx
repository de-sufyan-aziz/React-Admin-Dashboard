import React from 'react'
import TableHOC from './TableHOC'


const columns = [
    {
        Header: 'Id',
        accessor: '_id'
    },
    {
        Header: 'Quantity',
        accessor: 'quantity'
    },
    {
        Header: 'Discount',
        accessor: 'discount'
    },
    {
        Header: 'Amount',
        accessor: 'amount'
    },
    {
        Header: 'Status',
        accessor: 'status'
    },

];

function DashboardTable({ data }) {

    return TableHOC(columns, data, "transaction-box", "Top Transaction")();
}

export default DashboardTable
