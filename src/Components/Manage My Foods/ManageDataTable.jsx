import React from 'react';
import { useTable } from 'react-table';
import { BiMessageSquareX } from "react-icons/bi";
import { Link } from 'react-router-dom';
const ManageDataTable = ({data}) => {
    console.log(data)
    const columns = React.useMemo(
        () => [
          {
            Header: 'Delete',
            accessor: 'delete',
            Cell: ({ row }) => (
                <button onClick={() => handleDelete(row.original.id)}  type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-2xl p-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600  dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                <BiMessageSquareX/>
                <span className="sr-only">Icon description</span>
              </button>
            ),
          },
          {
            Header: 'Food Image',
            accessor: 'image',
            Cell: ({ value }) => <img className='w-[200px] rounded-lg h-[150px]' src={value} alt="Food" />,
          },
          {
            Header: 'Food Name',
            accessor: 'name',
            
          },
          {
            Header: 'Quantity',
            accessor: 'quantity',
          },
          {
            Header: 'Update',
            accessor: 'update',
            Cell: ({ row }) => (
                <Link to="/updatefood"><button onClick={() => handleUpdate(row.original.id)} type="button" className="text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Edit</button></Link>

            ),
          },
          {
            Header: 'Manage',
            accessor: 'manage',
            Cell: ({ row }) => (
              <Link to="/managesignlefood"><button type="button" className="text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Manage</button>
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
    
      const handleDelete = (id) => {
        // Implement your delete logic here
      };
    
      const handleUpdate = (id) => {
        // Implement your update logic here
      };
    
      const handleManage = (id) => {
        // Implement your manage logic here
      };
    return (
        <div>
            <table {...getTableProps()}>
      <thead>
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
            <tr {...row.getRowProps()}>
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