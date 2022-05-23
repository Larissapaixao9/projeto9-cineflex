export default function Footer({fonte,title,hour,day}){
    return(
       <div className="footer">
          <div className="DodisplayFlex">
          <div className="MolduraBranca"><img className="FooterImage" src={fonte} /></div> 
          <div ><p className="marginLeft Roboto400">{title} <br/> {day}  {hour}</p></div> 
          </div>
      
       </div>
    )
}