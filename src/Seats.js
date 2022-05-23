import { Navigate, useNavigate, useParams } from "react-router-dom"
import React from 'react'
import { Link } from "react-router-dom"
import Footer from "./Footer";
import { useState , useEffect} from 'react' 
import axios from 'axios';
import "./style.css";
import Form from "./Form";
import SuccessfulOrder from "./SuccessfulOrder"


export default function Seats(){
    const {SeatID}=useParams()
    const [seatInfo,setSeatInfo]=React.useState({})
    const[showseats,setShowseats]=React.useState([])
    const [seatInfo2,setSeatInfo2]=React.useState({})
    const [seatInfo3,setSeatInfo3]=React.useState({})
    const[click,setClick]=React.useState([])
    const[click2,setClick2]=React.useState([0])
    const [name, setName] = React.useState('');
    const [cpf, setCpf] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [seatColor,setSeatColor]=React.useState(false);
    const navigate=useNavigate()

    function SeatsDescription(){
        return(
            <div className='displayAndJustify'>
                <div className="margin-rigth">
                
                <div className=' seatsSelect '>.</div>
                <div className='descriptiontext'>Selecionado</div>
                </div>
                <div className="margin-rigth">
                
                <div className='seatsAvailable'>.</div>
                <div className='descriptiontext'>Disponível</div>
                </div>
    
                <div className="margin-rigth">
                
                <div className='seatsNotAvailable'>.</div>
                <div className='descriptiontext'>Indisponível</div>
                </div>
            </div>
        )
    }

  const [data, setData] = React.useState({
      ids: [],
      name:"",
      cpf:""
  });

  function submit(e){
    e.preventDefault();
    axios.post('https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many',{
        ids: seatInfo.id,
        name:data.name,
        cpf:data.cpf
    })
    .then(response=>{
        console.log(response.data);
        navigate("/Success",{state:{title:seatInfo.title,date:seatInfo3.date, hour:seatInfo2.name,name:name, cpf:cpf}} );
        
    })
  }
 
  function Handle(e){
    const newdata={...data}
    newdata[e.target.id]=e.target.value
    setName(data.name)
    setCpf(data.cpf)
    setData(newdata)
    console.log(newdata)
  }

    React.useEffect(()=>{
        const promise=axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${SeatID}/seats`)
    
        promise.then(response=>{
            setSeatInfo({...response.data.movie})
            setSeatInfo2({...response.data})
            setSeatInfo3({...response.data.day})
            setShowseats([...response.data.seats])
        })
    },[]
    )
    
    function seatClicked(){
        setSeatColor(seatColor=> !seatColor)
        console.log(seatColor)
    }
    let toggleClass=seatColor ? 'seats3' : 'seats';
    function SeatRender({name, isAvailable, click2}){
        if(isAvailable==true){
            return(
                <div >
                    <div onClick={seatClicked} className={toggleClass}>{name}</div>
                    </div> 
            )
        }
    }
    
    function SeatRender2({name,isAvailable}){
        return(
            <div >
                <div className='seats2' onClick={()=>setClick([click+1])}>{name}</div>
                </div>
        )
    }

    if(click>=1){
        alert('Esse assento não está disponível')
    }

    return(
        <div>
            <p className='center Roboto400'>Selecione o(s) assento(s)</p>
            <div className='display'>
            {showseats.map(item=>{
                return(
                    item.isAvailable===true ?  <SeatRender  name={item.name} isAvailable={item.isAvailable}/> :  <SeatRender2 name={item.name} isAvailable={item.isAvailable}/>
                )
            })}
            <SeatsDescription />
            <div className="AlignCenter">
        <form onSubmit={(e)=>submit(e)}>
            <label> Nome do comprador:</label>
            <input required minLength={3} onChange={(e)=>Handle(e)} id="name" value={data.name} type="text" placeholder="Digite seu nome..." />
            <label> CPF do comprador:</label>
            <input required minLength={11} onChange={(e)=>Handle(e)} id="cpf" value={data.cpf} type="text" placeholder="Digite seu CPF..." />
            <button>Reservar assento(s)</button>
        </form>
        
        </div>

            <Footer fonte={seatInfo.posterURL} title={seatInfo.title} day={seatInfo3.weekday} hour={seatInfo2.name}/>
            
            </div>
        </div>
    )
    }


