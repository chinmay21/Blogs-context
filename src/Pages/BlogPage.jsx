import React, { useState, useLocation, useNavigation, useContext } from 'react'
import { AppContext } from '../context/AppContext';

const BlogPage = () => {
  const [blog, setBlog] = useState(null);
  const [relatedBlogs, setRelatedBlogs] = useState([]);
  const location = useLocation();
  const navigation = useNavigation();
  const {setLoading, loading, baseUrl} = useContext(AppContext);
  const blogId = location.pathname.split("/").at(-1);

  async function fetchRelatedBlogs() {
    setLoading(true);
    let url = `${baseUrl}?blogId=${blogId}`;
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
  return (
    <div>

    </div>
  )
}

export default BlogPage