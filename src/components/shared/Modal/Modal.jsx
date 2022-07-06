
import { createPortal } from "react-dom";
import {useModal} from "../hooks/useModal";

import styles from "./modal.module.css";

const modalEl = document.getElementById('modal-root');


function Modal({closeModal,children}){
  const { handleClose } = useModal({ closeModal });
  
    return createPortal(
      (<div className={styles.backdrop} onClick={handleClose}>
        <div className={styles.content}>
          {children}
        </div>
      </div>
      ), modalEl
    );
  }


export default Modal;


  // componentDidMount() {
  //   document.addEventListener('keydown', this.handleClose);
  // }
  // componentWillUnmount() {
  //   document.removeEventListener('keydown', this.handleClose);
  // }
  // handleClose = (e)=> {
  //   if (e.code === 'Escape') {
  //     this.props.closeModal();
  //   }
  //   if (e.target === e.currentTarget) {
  //     this.props.closeModal();
  //     return
  //   }
  // }