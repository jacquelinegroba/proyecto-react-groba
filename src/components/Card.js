import { Link } from "react-router-dom";

const Card = ({datos}) => {
    return(
 <div className="card" style={{width: "18rem"}}>
  <img src={datos.image}className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{datos.title}</h5>
    <p className="card-text">{datos.detail}</p>
    <Link to={`item/${datos.id}`}><button type="button" className="btn btn-dark ">Detalles</button></Link>
  </div>
</div>
    )
}

export default Card;