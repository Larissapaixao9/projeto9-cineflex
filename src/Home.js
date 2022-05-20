import React from 'react'
import Header from "./Header"
import { Link } from "react-router-dom"
import axios from 'axios'
import image from './img/image 3.png'

function PostImage({fonte,id}){
  return(
    <>
      <div>
        <Link to={`/Movie/${id}`}>
        <img className='MovieImage' src={fonte}/>
        </Link>
      </div>
    </>
  )
}

export default function Home(){
  const [images,setImages]=React.useState([])
  React.useEffect(()=>{
    const promise=axios.get('https://mock-api.driven.com.br/api/v5/cineflex/movies');
    promise.then(response=>{
      console.log(response.data)
      setImages([...response.data])
    })
  },[])
  
    return(
        <>
        <div className='margin'><h1 className="MovieSelectText">Selecione o filme</h1></div>
          
     
          
          <div className='MoviesContainer'>
            {images.map(item=> <PostImage fonte={item.posterURL} id={item.id}/>)}
          </div>
        </>
    )
}