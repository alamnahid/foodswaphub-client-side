import React, { useState, useEffect, useContext } from 'react';
import ManageDataTable from './ManageDataTable';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../Provider/AuthProvider';
import Spinner from '../Spinner/Spinner';

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
        return <Spinner></Spinner>
    }
    if(isError){
        return <p>{error.message}</p>
    }
    console.log(data.length)
    
    return (
        <div className='mt-16 mx-auto w-[80vw] rounded-lg'>
            {
                data.length===0 ? <div className='flex w-[80vw] h-[50vh] justify-center items-center'>
                    <h1 className='text-4xl font-bold'>You haven't added any food yet</h1>
                </div>
                :

             <ManageDataTable data={data} refetch={refetch}></ManageDataTable>
            }
        </div>
    );
};

export default ManageMyFoods;