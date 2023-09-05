import { useDispatch } from "react-redux";
import { useEffect } from "react";
import PropTypes from "prop-types";
import { ModalOverlay } from "./Modal.styled";
import { closeModal } from "../../redux/Slice";

const Modal = ({ children }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.code === "Escape") {
        console.log("Close Esc");
        dispatch(closeModal());
      }
    };
    window.addEventListener("keydown", handleEscape);
    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [dispatch]);

  return (
    <ModalOverlay
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          console.log("Close overlay");
          dispatch(closeModal());
        }
      }}
    >
      {children}
    </ModalOverlay>
  );
};
Modal.propTypes = {
  children: PropTypes.element.isRequired,
};
export default Modal;
