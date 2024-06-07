




function Card(props){
    return(
      <div className="card-contact">
      <img src={props.image} className="Card-Image"/>
     
     <div className="Card-heading">
      <img src={props.images}id="card-image2"/>
      <p id="card-statuse">{props.name}</p>
      </div>
      <p id="Card-status">{props.style}</p>
      <p id="hindi">{props.comment}</p>
       

       <div className="Card-figures">
       <p className="Card-figures">{props.views}</p>
       <p className="Card-figures">{props.votes}</p>
       <p className="Card-figures">{props.time}</p>
       <p className="Card-figures" id="rates">{props.rating}</p>
       </div>
      </div>

       
    )
}
export default Card;