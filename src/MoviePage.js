import { useParams } from "react-router-dom"
import React from 'react'
import { Link } from "react-router-dom"
import Footer from "./Footer";
import { useState , useEffect} from 'react' 
import axios from 'axios';
import "./style.css";

function DateHour({date,weekday,children}){
    return(
        <div>
        <p className="Roboto400">
            {weekday} -{date} 
        </p>
        <div className="displayFlex Roboto400">{children}</div>
    </div>
    )
}

export default function MoviePage({setscreens}){

    const {myID}=useParams()
    console.log('HEY',myID)
    const [movieInfo,setMovieInfo]=React.useState({})
    const[date,setDate]=React.useState([])

    
    const {days}=movieInfo //Desestruração, uma vez q days é parte de movieInfo, o valor total da array com os dias, fica armazenado em days
    const [teste,setTeste]=React.useState([])
 
    React.useEffect(()=>{
            const promise=axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${myID}/showtimes`)

            promise.then(response=>{
                setMovieInfo({...response.data})
                setDate(response.data.days)
            
            })
        },[]
    )

        console.log(date)
       

    return(
        <div className="ALignCenter">
            <div className='margin ALignCenter'><h1 className="MovieSelectText">Selecione o Horário</h1></div>
           {date.map(item=>{
               return(
                   <DateHour weekday={item.weekday} date={item.date}>
                      {item.showtimes.map(time=>{
                          return(
                              <Link key={time.id}  to={`/Seats/${time.id}`} >
                                  <div className="HourBox White">
                                      {time.name}
                                  </div>
                              </Link>
                          )
                      })}
                   </DateHour>
               )
           })}
            
            
            <Footer fonte={movieInfo.posterURL} title={movieInfo.title}/>
           
            
        </div>
    )
           
}