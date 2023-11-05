import React, { useState, useEffect } from 'react';
import { useTable } from 'react-table';
import ManageDataTable from './ManageDataTable';

const ManageMyFoods = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        // Replace 'apiUrl' with the actual API URL from which you want to fetch data.
        fetch('MOCK_DATA.json')
          .then((response) => response.json())
          .then((data) => {
            setData(data);
          });
      }, []);
      console.log(data)
    
    return (
        <div className='mt-16 mx-auto w-[80vw] rounded-lg'>
             <ManageDataTable data={data}></ManageDataTable>
        </div>
    );
};

export default ManageMyFoods;