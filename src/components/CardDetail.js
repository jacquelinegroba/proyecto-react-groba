import ItemCount from "./ItemCount"

const onAdd = (param) => {console.log("La cantidad comprada es " + param)}

const CardDetail = ({datos}) => {
    return(
<div className="card mb-3" style={{ maxwidth: '540px' }}> 
  <div className="row g-0">
    <div className="col-md-4">
      <img src={datos.image} className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">{datos.title}</h5>
        <p className="card-text">{datos.detail}</p>
        <ItemCount initial={1} stock={5} onAdd={onAdd}/>
      </div>
    </div>
  </div>
</div>
    )
}

export default CardDetail;