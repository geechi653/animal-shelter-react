function Card({ name, age, shortDescription, fullDescription }) {
  return (
    <div className="col-12 col-md-4 mb-4">
      <div className="card h-100">
        <img
          src={`src/assets/${name}.png`}
          alt={name}
          className="card-img-top"
        />
        <div className="card-body">
          <h5 className="card-title">
            {name} - {age}
          </h5>
          <p className="card-text">{shortDescription}</p>
        </div>
        <p className="card-footer">{fullDescription}</p>
        <div className="card-footer text-center">
          <button className="btn btn-primary">Adopt</button>
        </div>
      </div>
    </div>
  );
}

export default Card;
