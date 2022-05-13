import SModal from "./style";
import gameover from "../../assets/gameover.png";
import { useState } from "react";

function Modal() {
  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <>
      <SModal>
        <button onClick={toggleModal} className="btn-modal">
          Open
        </button>
        {modal && (
          <div className="modal">
            <div onClick={toggleModal} className="overlay"></div>
            <div className="modal-content">
              <img src={gameover}></img>
              <button onClick={toggleModal} className="close-modal">
                X
              </button>
            </div>
          </div>
        )}
      </SModal>
    </>
  );
}

export default Modal;
