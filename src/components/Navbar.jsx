
function Navbar() {
  return (
    <nav className="navbar navbar-dark navbar-expand-lg bg-primary sticky-top ">
    <div className="container-fluid ">
      <a className="navbar-brand bg-danger p-1 border rounded" href="#"><i className="fa-solid fa-paw fa-lg me-2"></i>Happy Tails</a>   
      {/* can't tell if the extra space looks better or not after the icon (i.e if me-1 is better)*/}
      <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse " id="navbarNav">
        <ul className="navbar-nav ms-auto " >
          <li className="nav-item ">
            <a className="nav-link active"  aria-current="page" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Adopt</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  )
}

export default Navbar
