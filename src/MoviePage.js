import { useParams } from "react-router-dom"
import React from 'react'
import { useState , useEffect} from 'react' 

import axios from 'axios';
import "./style.css";


export default function MoviePage(){

    const {myID}=useParams()
    const [movieInfo,setMovieInfo]=React.useState({})
   
    React.useEffect(()=>{
            const promise=axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${myID}/showtimes`)

            promise.then(response=>{
                setMovieInfo({...response.data})
            })
        },[]
    )
    return(
        <>
            <h1 className="margin">MOVIEPAGE</h1>
            <img src={movieInfo.posterURL} />
        </>
    )
}