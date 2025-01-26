import React from "react";
import { useTable, Column, useSortBy, usePagination } from "react-table";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";

export default function TableHOC(columns, data, containerClassname, heading, showPagination = false) {

    return function HOC() {
        const {
            getTableProps,
            getTableBodyProps,
            headerGroups, page,
            prepareRow, getSorted,
            nextPage,
            previousPage,
            canNextPage,
            canPreviousPage,
            pageCount,
            state: { pageIndex } } = useTable({ columns, data, initialState: { pageSize: 5, } },
                useSortBy,
                usePagination);

        return <div className={containerClassname}>

            <h2 className="heading">{heading}</h2>
            <table className="table" {...getTableProps()}>
                <thead>
                    {headerGroups.map((headerGroup) => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map(column => (
                                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                                    {column.render("Header")}
                                    <span className="sorted-icon">{column.isSorted ? <FaAngleUp /> : ""}</span>
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {page.map(row => {
                        prepareRow(row);
                        return (
                            <tr {...row.getRowProps}>
                                {row.cells.map(cell => (
                                    <td {...cell.getCellProps()}>
                                        {cell.render("Cell")}
                                    </td>
                                ))}
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            {
                showPagination && <div className="table-pagination">
                    <button disabled={!canPreviousPage} onClick={previousPage}>prev</button>
                    <span>{`${pageIndex + 1} of ${pageCount}`}</span>
                    <button disabled={!canNextPage} onClick={nextPage}>next</button>
                </div>
            }
        </div>;
    }
}