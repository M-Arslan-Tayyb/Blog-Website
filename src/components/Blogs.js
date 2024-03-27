import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext'; // Correct import
import { Link } from 'react-router-dom';
import BlogDetail from './BlogDetails';
const Blogs = () => {
    const { loading, posts } = useContext(AppContext);

    console.log(posts);
  
    return (
        <div >
            {loading ? <h1 className=' grid place-items-center font-bold text-lg'>Loading...</h1> : (
              posts.length===0?<p>No Post Here</p>:(
                posts.map((post)=>(
                  <div className='mb-6'>
                    <BlogDetail post={post} key={post.id}></BlogDetail>
                  </div>
                  
                ))
              )
            )}

        </div>
    );
}

export default Blogs;
