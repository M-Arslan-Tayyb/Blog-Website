import React from 'react';
import { NavLink } from 'react-router-dom';

const BlogDetails = ({ post }) => {
  return (
    <div className='w-[50%] mx-[25%] mt-20 mb-20 '>
      <NavLink to={`/blog/${post.id}`}>
        <p className='font-bold text-[16px] mb-1'>{post.title}</p>
      </NavLink>
        
      <p>
        <span>By </span>
        <span className='italic'>{post.author}</span>
        <span> on </span> 
        <NavLink to={`/categories/${post.category?.replaceAll(" ","-")}`}>
          <span className='italic font-semibold underline'>{post.category}</span> 
        </NavLink>
      </p>
        
      <p><span>Posted on </span> {post.date}</p>
        
      <p className='mt-3 mb-1'>{post.content}</p>
        
      {post.tags && post.tags.map((tag, index) => (
        <NavLink to={`/tags/${tag.replaceAll(" ","-")}`} key={index}>
          <span className='text-blue-700'>
            <span>#</span><span className='underline'>{tag}</span>
          </span>
        </NavLink>
      ))}
    </div>
  );
}

export default BlogDetails;
