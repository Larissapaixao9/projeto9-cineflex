import Header from "./Header"
import { Link } from "react-router-dom"
export default function Home(){
    return(
        <>
          <h1 className="margin">Selecione o filme</h1>
          <Link to="/Movie">
             <div className="box"></div>
          </Link>
          
        </>
    )
}