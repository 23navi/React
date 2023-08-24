import Modal from "../components/Modal";
import { useState } from "react";
import Button from "../components/Button";

export default function ModalPage() {
  const [modalOpen, setModalOpen] = useState(false);

  const handleClick = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <div>
      <Button primary success onClick={handleClick}>
        Modal
      </Button>
      {modalOpen && <Modal />}
    </div>
  );
}
