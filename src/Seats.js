import { useParams } from "react-router-dom"
import React from 'react'
import { Link } from "react-router-dom"
import Footer from "./Footer";
import { useState , useEffect} from 'react' 
import axios from 'axios';
import "./style.css";

function SeatsDescription(){
    return(
        <div className='displayAndJustify'>
            <div >
            <div className='descriptiontext'>Selecionado</div>
            <div className='seats'>.</div>
            </div>
            <div>
            <div className='descriptiontext'>Disponível</div>
            <div className='seats'>.</div>
            </div>

            <div>
            <div className='descriptiontext'>Indisponível</div>
            <div className='seats2'>.</div>
            </div>
        </div>
    )
}

function SeatRender({name, isAvailable}){
    return(
        <div >
            <div className='seats'>{name}</div>


            </div>
    )

}

function SeatRender2({name,isAvailable}){
    return(
        <div >
            <div className='seats2'>{name}</div>
            </div>
    )

}
export default function Seats(){
    const {SeatID}=useParams()
    const [seatInfo,setSeatInfo]=React.useState({})
    const[showseats,setShowseats]=React.useState([])

    React.useEffect(()=>{
        const promise=axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${SeatID}/seats`)
    
        promise.then(response=>{
            setSeatInfo({...response.data})
            setShowseats([...response.data.seats])
        })
    },[]
    )
   
 
    console.log(showseats)
   
    return(
        <div>
            <p className='margin Roboto400'>Selecione o(s) assento(s)</p>
            <div className='display'>
            {showseats.map(item=>{
                return(
                    item.isAvailable==='true' ?  <SeatRender name={item.name} isAvailable={item.isAvailable}/> :  <SeatRender2 name={item.name} isAvailable={item.isAvailable}/>
                )
            })}
            <SeatsDescription />
            <Footer/>
            
            </div>
        </div>
    )
    }


