import "../../assets/styles/HeaderStyle.css";
import Logo from "../../assets/images/icon.png";
import { useState, useRef } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Swal from "sweetalert2";

function Header() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const formdata = useRef();

  const handlerClick = (e) => {
    e.preventDefault();
    const formData = new FormData(formdata.current);
    const correo = formData.get('correo');
    let URI = "http://localhost:3000/Usuarios";
    let options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        Nombre: formData.get("name"),
        Telefono: formData.get("telefono"),
        Correo: formData.get("correo"),
      }),
    };
    fetch(URI, options)
      .then((response) => response.json())
      .then((data) => {
        if (data.message === "Usuario registrado exitosamente") {
          Swal.fire({
            position: "top-end",
            width: 200,
            icon: "success",
            title: "Usuario Registrado",
            text: `Correo registrado: ${correo}`,
            showConfirmButton: false,
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
  };
  return (
    <>
      <div className="navbar">4
        <div className="logo">
          <img src={Logo} alt="logo" />
          <h1>Peko</h1>
        </div>

        <div>
          <button className="boton">HOME</button>
          <button className="boton">CONOCENOS</button>
          <button className="boton">CONTACTO</button>
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
    </>
  );
}

export default Header;