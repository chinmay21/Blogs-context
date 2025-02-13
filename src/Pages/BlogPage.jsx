import React, { useState, useEffect, useContext } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import Spinner from '../components/Spinner';
import BlogDetails from '../components/BlogDetails';
import Header from '../components/Header';

const BlogPage = () => {
  const [blog, setBlog] = useState(null);
  const [relatedBlogs, setRelatedBlogs] = useState([]);
  const location = useLocation();
  const navigation = useNavigate();
  const {setLoading, loading, baseUrl} = useContext(AppContext);
  const blogId = location.pathname.split("/").at(-1);
  const newBaseUrl = "https://codehelp-apis.vercel.app/api/";

  async function fetchRelatedBlogs() {
    setLoading(true);
    let url = `${newBaseUrl}get-blog?blogId=${blogId}`;
    try {
      const result = await fetch(url);
      const data = await result.json(); 
      setBlog(data.blog);
      setRelatedBlogs(data.relatedBlogs);
    }
    catch(error) {
      console.log("Error Occured");
      setBlog(null);
      setRelatedBlogs([]);
    }
    setLoading(false);
  } 

  useEffect(() => {
    if(blogId) {
      fetchRelatedBlogs();
    }
  }, [location.pathname])
  return (
    <div className='w-11/12 max-w-[670px] py-8 flex justify-center items-center flex-col gap-y-7 mt-[66px] mb-[70px]'>
      <Header/>
      <div>
        <button onClick={() => navigation(-1)}>
          Back
        </button>
      </div>
      {
        loading ? (<div><Spinner/></div>) : blog ? 
        (<div>
          <BlogDetails post={blog}/>
          <h2>Related Blogs</h2>
          {
            relatedBlogs.map((post) => (
              <div className='py-[20px]' key={post.id}>
                <BlogDetails post={post}/>
              </div>
            ))
          }
        </div>) : 
        (
          <div>
            <p>No Blog Found</p>
          </div>
        )
      }
    </div>
  )
}

export default BlogPage