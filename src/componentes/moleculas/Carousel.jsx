import "../../assets/styles/Carousel.css"
import slide1 from "../../assets/images/Latte.jpg";
import slide2 from "../../assets/images/expresso.jpg";
import slide3 from "../../assets/images/Doppio.jpg";
import slide4 from "../../assets/images/cafe-r.jpg";
import slide5 from "../../assets/images/cafe-e.jpg";

function Carrusel() {
  return (
    <>
      <div className="container-carusel">
        <div className="card"><img className="d-block" src={slide5} alt="Second slide" /></div>
        <div className="card"><img className="d-block" src={slide1} alt="Second slide" /></div>
        <div className="card"><img className="d-block" src={slide2} alt="Second slide" /></div>
        <div className="card"><img className="d-block" src={slide3} alt="Second slide" /></div>
        <div className="card"><img className="d-block" src={slide4} alt="Second slide" /></div>
      </div>
    </>
  );
}

export default Carrusel;