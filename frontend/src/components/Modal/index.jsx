import SModal from "./style";
import gameover from "../../assets/gameover.png";
import { useContext } from "react";
import statsContext from "../../services/contexts/index";
import { Link } from "react-router-dom";

function Modal() {
  const { modal, setModal } = useContext(statsContext);

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <>
      <SModal>
        {modal && (
          <div className="modal">
            <div onClick={toggleModal} className="overlay"></div>
            <Link to="/gameover">
              <div className="modal-content">
                <img src={gameover} />
                <button onClick={toggleModal} className="close-modal">
                  X
                </button>
              </div>
            </Link>
          </div>
        )}
      </SModal>
    </>
  );
}

export default Modal;
