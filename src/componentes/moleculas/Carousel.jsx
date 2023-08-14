import Carousel from 'react-bootstrap/Carousel';

function Carrusel() {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-40"
          src="https://img.freepik.com/foto-gratis/resumen-desenfoque-defocused-restaurante-cafeteria-interior-cafe_1203-9267.jpg?w=900&t=st=1691693099~exp=1691693699~hmac=433558162e111258f11b2d35169bb90f4bdc42a253a05052ab3e06e4e1733bad"
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-40"
          src="https://img.freepik.com/fotos-premium/desenfoque-desenfocado-cafeteria-cafeteria-restaurante_1339-44924.jpg?w=900"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-40"
          src="https://img.freepik.com/foto-gratis/restaurante-borroso-abstracto_74190-4449.jpg?t=st=1691699362~exp=1691699962~hmac=e0db5adce927d618b97e41ee1322ce051f256d4e1d84f1d74ab34f3c6ff7158d"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carrusel;