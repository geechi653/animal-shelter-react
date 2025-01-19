function Hero() {
  return (
    <div className="container d-flex align-items-center justify-content-between my-5 bg-danger bg-opacity-50 p-5">
      <div>
        <h1 className="text-dark">Find Your Perfect!</h1>
        <h1 className="text-primary">Companion!</h1>
        <p className="text-secondary">
          Adopt a furry friend today and bring joy to your home.
        </p>
        <div className="d-flex gap-3">
          <button className="btn btn-primary">Adopt a pet</button>
          <button className="btn btn-secondary">Learn more</button>
        </div>
        <div className="d-flex gap-5 mt-4">
          <div>
            <h4 className="fw-bold text-dark mb-0">50+</h4>
            <p className="fw-bold text-danger">Pets available!</p>
          </div>
          <div>
            <h4 className="fw-bold text-dark mb-0">200+</h4>
            <p className="fw-bold text-danger">Happy Adoptions</p>
          </div>
          <div>
            <h4 className="fw-bold text-dark mb-0">15+</h4>
            <p className="fw-bold text-danger">Years of Service</p>
          </div>
        </div>
      </div>
      <img
        src="src/assets/animals.png"
        alt="animals"
        className="img-fluid w-50 border rounded-3 d-none d-md-block"
      />
    </div>
  );
}

export default Hero;
