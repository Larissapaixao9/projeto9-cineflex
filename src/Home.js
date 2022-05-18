import React from 'react'
import Header from "./Header"
import { Link } from "react-router-dom"
import axios from 'axios'
import image from './img/image 3.png'

function PostImage({fonte}){
  return(
    <>
      <div>
        <img className='MovieImage' src={fonte}/>
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
          
          <Link to="/Movie">
             <div className="box"></div>
          </Link>
          
          <div className='MoviesContainer'>
            {images.map(item=> <PostImage fonte={item.posterURL}/>)}
          </div>
        </>
    )
}