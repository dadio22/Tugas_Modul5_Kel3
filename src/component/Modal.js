import Modal from "react-bootstrap/Modal";
import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import { FontContext } from "../tekkom";

export default function MyVerticallyCenteredModal(props) {
  const font = useContext(FontContext);

  console.log("ww", font);
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">MODAL</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4 style={{ fontFamily: font.value }}>Informasi Lebih Detail</h4>
        <p>{props.hobi}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.changefont}>Ganti Font</Button>
      </Modal.Footer>
    </Modal>
  );
}
