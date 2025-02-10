import React, { useState, useLocation, useNavigation } from 'react'

const BlogPage = () => {
  const [blog, setBlog] = useState(null);
  const [relatedBlogs, setRelatedBlogs] = useState([]);
  const location = useLocation();
  const navigation = useNavigation();
  return (
    <div>

    </div>
  )
}

export default BlogPage