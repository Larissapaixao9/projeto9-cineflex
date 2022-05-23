import React from 'react'
import { Navigate, useNavigate, useParams } from "react-router-dom"
import { useLocation, Link } from "react-router-dom"
export default function SuccessfulOrder(){
    const myLocation=useLocation()
    const {title,date, hour,name, cpf}=myLocation.state
    
    return(
        <>
            <div>
                <h1 className='Roboto700 margin'>Pedido feito com sucesso!</h1>
            <strong>   <p >Filme e sessão</p></strong> 
                <p>{title}</p>
                <p>{date} -  {hour}</p>
                <strong>   <p>ingressos</p></strong> 
                <p>INGRESSOS</p>
                <strong>   <p>Comprador</p></strong> 
                <p>Nome: {name}</p>
                <p>CPF:{cpf} </p>
                <Link to="/"><button >Voltar pra Home</button></Link>
            </div>
        </>
    )
}