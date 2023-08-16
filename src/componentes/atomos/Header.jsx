import '../../assets/styles/HeaderStyle.css'
import Logo from "../../assets/images/LogoPeko.png"
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { Link } from "react-router-dom";

function Header() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div className="navbar">
        <div className='logo'>
          <img src={Logo} alt="logo" />
          <h1>Peko</h1>
        </div>

        <div>
          <Link to="/" className='sinlinea'><button className='boton'>HOME</button></Link>
          <Link to="/card" className='sinlinea'><button className='boton'>CONOCENOS</button></Link>
          <a src="#footer" className='sinlinea'><button className='boton'>CONTACTO</button></a>
          <button onClick={handleShow} className='boton'>REGISTRAR</button>
        </div>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Registrate</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-1" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="text"
                placeholder="Nombre"
                autoFocus
              />
              <Form.Control
                type="telephone"
                placeholder="Telefono"
                autoFocus
              />
              <Form.Control
                type="email"
                placeholder="Correo"
                autoFocus
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Enviar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Header;