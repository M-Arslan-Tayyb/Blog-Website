import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Pagination = () => {
  const { pages, totalPages, setPageOfBlog } = useContext(AppContext);

  return (
    
     
        <div className='flex fixed bottom-0 bg-white w-full justify-around p-2 border-t-2'>
          <div className='flex gap-6'>
            {pages > 1 && (
              <button className='p-1 rounded border' onClick={() => { setPageOfBlog(pages - 1) }}>Previous</button>
            )}
            {pages < totalPages && (
              <button className='p-1 rounded border' onClick={() => { setPageOfBlog(pages + 1) }}>Next</button>
            )}
          </div>
          <div>
            <span className='font-semibold'>Page {pages} of {totalPages}</span>
          </div>
        </div>
      
    
  );
};

export default Pagination;
