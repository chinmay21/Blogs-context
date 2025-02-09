import './App.css'
import Header from './components/Header'
import Blogs from './components/Blogs'
import Pagination from './components/Pagination'
import { useContext, useEffect } from 'react'
import { AppContext } from './context/AppContext'
import { Route, Routes } from 'react-router-dom'

function App() {
  const {fetchBlogPost} = useContext(AppContext);
  useEffect(() => {
    fetchBlogPost();
  }, []);
  return (
    <div className='w-full h-full flex flex-col gap-y-1 justify-center items-center'>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </div>
  )
}

export default App
