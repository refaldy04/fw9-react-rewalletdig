import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './Style.css';
import { Link } from 'react-router-dom';

function Example() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button as="button" className="modal-fw9" variant="primary" onClick={handleShow}>
        Continue
      </Button>

      <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="d-flex justify-content-center gap-3 fw9-input my-5">
            <div className="square">
              <input type="text" className="rounded-3 text-center fs-1" />
            </div>
            <div className="square">
              <input type="text" className="rounded-3 text-center fs-1" />
            </div>
            <div className="square">
              <input type="text" className="rounded-3 text-center fs-1" />
            </div>
            <div className="square">
              <input type="text" className="rounded-3 text-center fs-1" />
            </div>
            <div className="square">
              <input type="text" className="rounded-3 text-center fs-1" />
            </div>
            <div className="square">
              <input type="text" className="rounded-3 text-center fs-1" />
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          {/* <Button variant="secondary" onClick={handleClose}>
            Close
          </Button> */}
          <Link className="modal-fw9 rounded text-light d-flex justify-content-center align-items-center" to="/status-success" variant="primary">
            Understood
          </Link>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Example;
