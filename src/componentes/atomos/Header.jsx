import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import ScrollToTop from "react-scroll-to-top";
import Logo from "../../assets/images/LogoPeko.png";
import "../../assets/styles/HeaderStyle.css";
import Swal from "sweetalert2";

function Header() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const formdata = useRef();
  const handlerClick = (e) => {
    e.preventDefault();
    const formData = new FormData(formdata.current);
    const correo = formData.get("correo");
    fetch("http://44.218.190.25:3000/Usuarios")
      .then((response) => response.json())
      .then((correosExistentes) => {
        const listaCorreos = correosExistentes.map((correos) => correos.Correo);
        if (listaCorreos.includes(correo)) {
          Swal.fire({
            icon: "error",
            title: "Error al registrar usuario",
            text: `El correo  ${correo}  ya está en uso.`,
          });
        } else {
          const URI = "http://44.218.190.25:3000/Usuarios";
          const opciones = {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              Nombre: formData.get("name"),
              Telefono: formData.get("telefono"),
              Correo: correo,
            }),
          };
          fetch(URI, opciones)
            .then((response) => response.json())
            .then((data) => {
              if (data.message === "Usuario registrado exitosamente") {
                Swal.fire({
                  icon: "success",
                  text: `Correo registrado: ${correo}`,
                  timer: 1500,
                }).then(() => {
                  setShow(false);
                });
              } else {
                Swal.fire({
                  icon: "error",
                  title: "Error al registrar usuario",
                  text: data.error,
                });
              }
            })
            .catch((error) => {
              console.error("Error:", error);
            });
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  return (
    <>
      <div className="navbar">
        <div className="logo">
          <img src={Logo} alt="logo" />
          <h1>Peko</h1>
        </div>

        <div>
          <Link to="/" className="sinlinea">
            <button className="boton">HOME</button>
          </Link>
          <a href="#conocenos" className="sinlinea">
            <button className="boton">CONOCENOS</button>
          </a>
          <a href="#footer" className="sinlinea">
            <button className="boton">CONTACTO</button>
          </a>
          <button onClick={handleShow} className="boton">
            REGISTRAR
          </button>
        </div>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Registrate</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form ref={formdata}>
            <Form.Group className="mb-1" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="text"
                placeholder="Nombre"
                autoFocus
                name="name"
              />
              <Form.Control
                type="telephone"
                placeholder="Telefono"
                autoFocus
                name="telefono"
              />
              <Form.Control
                type="email"
                placeholder="Correo"
                autoFocus
                name="correo"
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
          <Button variant="primary" onClick={handlerClick}>
            Enviar
          </Button>
        </Modal.Footer>
      </Modal>

      <div className="App">
        <ScrollToTop smooth color="#451c04" />
      </div>
    </>
  );
}

export default Header;
