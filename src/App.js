import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./Home"
import Header from "./Header"
import MoviePage from "./MoviePage"
import Seats from "./Seats"
import "./style.css";
import SuccessfulOrder from "./SuccessfulOrder"
export default function App(){
    return(
        <>
            <BrowserRouter>
                <Header />
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/Movie/:myID" element={<MoviePage />}/>    
                <Route path="/Seats" element={<Seats />}/>
                <Route path="/Success" element={<SuccessfulOrder />}/>     
                </Routes>
            </BrowserRouter>
        </>
    )

}