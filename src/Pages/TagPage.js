import React from 'react'
import Header from '../components/Header'
import { useLocation, useNavigate } from 'react-router-dom'
import Blogs from '../components/Blogs';
import Pagination from '../components/Pagination';

const TagPage = () => {
    const navigation = useNavigate();
    const location = useLocation();
    const tag = location.pathname.split('/').at(-1);

    return (
        <div >
            <Header />
            <div  className='mt-20 w-[50%] mx-[25%] font-semibold '>
                <div className='mb-4 '>
                    <button className='p-1 bg-gray-100 border rounded ' onClick={() => navigation(-1)}>Back</button>
                </div>
                <h2 className='text-2xl font-bold'>
                    Blog Tagged <span>#{tag}</span>
                </h2>
            </div>
            <Blogs />
            <Pagination />
        </div>
    )
}

export default TagPage