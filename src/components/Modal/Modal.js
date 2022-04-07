import React, { useRef, useEffect } from "react";
import classes from "./Modal.module.scss";

// import ReactDOM from "react-dom";

// const modalRoot = document.getElementById("modal-root");
const Modal = ({ open, onClose, children }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    console.log(open);
    const modal = modalRef.current;
    console.log(modal);
    if (modal) {
      if (open) {
        modal.classList.remove(classes.out);
        modal.classList.add(classes.open);
        document.body.classList.add(`${classes.modalActive}`);
      } else {
        modal.classList.remove(classes.open);
        modal.classList.add(classes.out);
        document.body.classList.remove(`${classes.modalActive}`);
      }
    }
  }, [open]);

  if (!open) {
    return null;
  }

  return (
    <div ref={modalRef} className={classes.modalContainer}>
      <div className={classes.modalBackground}>
        <div className={classes.modal}>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
