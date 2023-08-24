import Modal from "../components/Modal";
import { useState } from "react";
import Button from "../components/Button";

export default function ModalPage() {
  const [modalOpen, setModalOpen] = useState(false);

  const handleClick = () => {
    setModalOpen(!modalOpen);
  };
  const handleClose = () => {
    setModalOpen(false);
  };

  const actionBar = (
    <Button onClick={handleClick} primary>
      Agree
    </Button>
  );

  const modal = (
    <Modal onClose={handleClose} actionBar={actionBar}>
      <p>I agree to the terms and conditions above.</p>
    </Modal>
  );

  return (
    <div>
      <Button primary success onClick={handleClick}>
        Modal
      </Button>
      {modalOpen && modal}
    </div>
  );
}
