/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useTable } from 'react-table';
import { BiMessageSquareX } from "react-icons/bi";
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import axios from 'axios';
const ManageDataTable = ({data, refetch}) => {
    // console.log(data)
    const [products, setProducts] = useState(data)
    const columns = React.useMemo(
        () => [
          {
            Header: 'Delete',
            accessor: '_id',
            Cell: ({ row }) => (
                <button onClick={() => handleDelete(row.original._id)}  type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-2xl p-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600  dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                <BiMessageSquareX/>
                <span className="sr-only">Icon description</span>
              </button>
            ),
          },
          {
            Header: 'Food Image',
            accessor: 'foodImage',
            Cell: ({ value }) => <img className='w-[200px] rounded-lg h-[150px]' src={value} alt="Food" />,
          },
          {
            Header: 'Food Name',
            accessor: 'foodName',
            
          },
          {
            Header: 'Quantity',
            accessor: 'foodquantity',
          },
          {
            Header: 'Update',
            accessor: 'update',
            Cell: ({ row }) => (
                <Link  to={`/updatefood/${row.original._id}`}><button type="button" className="text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Edit</button></Link>

            ),
          },
          {
            Header: 'Manage',
            accessor: 'manage',
            Cell: ({ row }) => (
              <Link to={`/managesignlefood/${row.original._id}`}><button type="button" className="text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Manage</button>
              </Link>
            ),
          },
        ],
        []
      );
    
      // Create a new table instance
      const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
      } = useTable({
        columns,
        data,
      });
    
      const handleDelete = (id)=>{

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`https://b8a11-server-side-jannat-jui.vercel.app/getallfood/v1/${id}`, {withCredentials: true})
                // .then(res=>res.json())
                .then(data => {
                    // console.log(data.data);
                    if (data.data.deletedCount > 0) {
                        Swal.fire(
                            'Deleted!',
                            'Your food has been deleted.',
                            'success'
                        )
                        refetch()
                    }
                })
              
            }
          })
        }
    return (
        <div>
            <table className='h-fit space-y-4' {...getTableProps()}>
      <thead className=''>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()}>{column.render('Header')}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr className='' {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return (
                  <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
            
        </div>
    );
};

export default ManageDataTable;