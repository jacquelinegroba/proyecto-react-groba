import Card from "./Card";

const CardList = ( { datos } ) =>{
    return (
        <div className='row p-2'>
        {datos.map((item) => (
        <Card key={item.id} datos={item}/>
        ))}
    </div>
    )
}

export default CardList