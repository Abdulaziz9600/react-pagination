import { useEffect, useState } from 'react'
import './App.css'
import Header from './componets/header/Header'
import Main from './componets/main/Main'
import dataContext from './componets/Context/Context'

function App() {
  const [dataNew, setDate] = useState([])
  const [loading,setLoading] = useState(false)
  const [currentPage,setCurrentPage] = useState(1)

  const [totalPage] = useState( 10 )

  const firstIndexPost = currentPage*totalPage
  const lastIndexPost = firstIndexPost-totalPage
  const lastData=dataNew.slice(lastIndexPost,firstIndexPost)
  
  const data ='https://jsonplaceholder.typicode.com/posts'
  
  const fetchDate=async() => {
    const request = await fetch(data)
    const result=await request.json()
    
    setDate(result)
  }
  
  
  useEffect(() =>{
    fetchDate()
  },[])
  
  
const paginat= (num) =>{
  setCurrentPage(num)
}

  
  return (
    <>

 
    <dataContext.Provider value={{lastData}} >
    <div className='container-xl'>
      <div className='row'>
        <div className='col-3 pb-5'><Header loading={loading} set={setLoading}/></div>
        <div className='col-9 pt-5'><Main num={dataNew} paginat={paginat} /></div>
      </div>
    </div>
    </dataContext.Provider>
 

   
    </>
    )
  }
  
  export default App
  