import { Link } from 'react-router-dom';

const Item = ({ products }) => {
  return (
    <div className="col-lg-4 col-md-6 col-sm-12 p-2 d-flex justify-content-evenly">
      <div className="card border border-dark" style={{ width: '18rem' }}>
        <img src={products.thumbnail} alt="" className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title d-flex justify-content-center">{products.title}</h5>
          <div className="d-flex justify-content-center">
            <Link to={`item/${products.id}`}>
              <button type="button" className="btn btn-dark ">
                Detalles
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;