import React from 'react'
import { Navigate, useNavigate, useParams } from "react-router-dom"
import { useLocation, Link } from "react-router-dom"
export default function SuccessfulOrder(){
    const myLocation=useLocation()
    const {title,date, hour,name, cpf,seat}=myLocation.state
    
    return(
        <>
            <div className='margin-Left'>
                <h1 className='Roboto700 margin'>Pedido feito com sucesso!</h1>
            <strong>   <p className='FontRoboto700'>Filme e sessão</p></strong> 
                <p>{title}</p>
                <p>{date} -  {hour}</p>
                <strong>   <p className='FontRoboto700'>ingressos</p></strong> 
                {seat.map(item=><p className='Roboto400'>Assento: {item} </p>)}
                <strong>   <p className='FontRoboto700'>Comprador</p></strong> 
                <p className='Roboto400'>Nome: {name}</p>
                <p className='Roboto400'>CPF:{cpf} </p>
                <Link to="/"><button >Voltar pra Home</button></Link>
            </div>
        </>
    )
}