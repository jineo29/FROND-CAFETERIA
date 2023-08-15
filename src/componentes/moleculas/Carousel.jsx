import Carousel from 'react-bootstrap/Carousel';
import "../../assets/styles/Carousel.css"
import slide1 from "../../assets/images/Latte.jpg";
import slide2 from "../../assets/images/expresso.jpg";
import slide3 from "../../assets/images/Doppio.jpg";

function Carrusel() {
  return (
    <div className='carru-cont'>
      <div className="slider container mb-3">
        <Carousel>
          <Carousel.Item className='slide'>
            <img
              className="d-block"
              src={slide1}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item className='slide'>
            <img
              className="d-block"
              src={slide2}
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item className='slide'>
            <img
              className="d-block"
              src={slide3}
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}

export default Carrusel;