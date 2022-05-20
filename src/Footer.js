export default function Footer({fonte,title}){
    return(
       <div className="footer">
          <div><img className="FooterImage" src={fonte} /></div> 
          <div ><p className="marginLeft Roboto400">{title}</p></div> 
       </div>
    )
}