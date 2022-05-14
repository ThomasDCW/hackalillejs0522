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
            <Link to="/gameover">
              <div onClick={toggleModal} className="overlay"></div>

              <div className="modal-content">
                <img src={gameover} className />
                <p>
                  De toute façon il est déjà trop tard... La responsabilité de
                  l’Homme sur le réchauffement climatique est sans équivoque.
                </p>
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
