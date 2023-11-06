import React, { useState, useEffect, useContext } from 'react';
import { useTable } from 'react-table';
import ManageDataTable from './ManageDataTable';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../Provider/AuthProvider';

const ManageMyFoods = () => {
  const [foods, setFoods] = useState([])
  useEffect(()=>{
    fetch('http://localhost:5000/getallfood/v1')
    .then(res=>res.json())
    .then(food=>setFoods(food))
  },[])
  const { user } = useContext(AuthContext);
  const email = user.email
  console.log(email)
    // const axios = useAxios()

    const getFoods = async ()=>{
        const res = await fetch(`http://localhost:5000/getallfood/v1?donaremail=${email}`)
        // const res = await axios.get('/getallfood/v1')
        return res.json();
    }
    const {data, isLoading, isError, error, refetch} = useQuery({
        queryKey: ['food', email],
        queryFn: getFoods,
    })

    if(isLoading){
        return <p>loading....</p>
    }
    if(isError){
        return <p>{error.message}</p>
    }
    console.log(data)

    // const [data, setData] = useState([]);
    // useEffect(() => {
    //     // Replace 'apiUrl' with the actual API URL from which you want to fetch data.
    //     fetch('MOCK_DATA.json')
    //       .then((response) => response.json())
    //       .then((data) => {
    //         setData(data);
    //       });
    //   }, []);
    //   console.log(data)
    
    return (
        <div className='mt-16 mx-auto w-[80vw] rounded-lg'>
             <ManageDataTable data={data} refetch={refetch}></ManageDataTable>
        </div>
    );
};

export default ManageMyFoods;