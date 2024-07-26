import React from 'react';
import "./modal.css"
import {IoCloseCircle, IoMail } from "react-icons/io5"
import { FaPhoneAlt } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";


interface ModalProps {
    show: boolean;
    onClose: () => void;
  }


  const Modal: React.FC<ModalProps> = ({ show, onClose }) => {
    if (!show) {
      return null;
    }

    const handleWp = () => {
        const url = `https://wa.me/${656588717}?text=${encodeURIComponent("Si quieres escribirme estaré encantado de charlar contigo / If you want to write to me I will be happy to chat with you.")}`;
        window.open(url, '_blank');
    };
  
    return (
      <div className="modal-overlay" onClick={onClose}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          
            <IoCloseCircle size={40} onClick={onClose} className="modal-close" />
            <div className='modal-content__data'>
                <FaPhoneAlt className='modal-content__data--modal-icon'/>
                <IoLogoWhatsapp style={{cursor: 'pointer'}} onClick={handleWp} className='modal-content__data--modal-icon' />
                <span> +34 656 588 717</span>
            </div>
            <div className='modal-content__data'>
                <IoMail className='modal-content__data--modal-icon' /><span>danielsanguino1980@gmail.com</span>
            </div>
        </div>
      </div>
    );
  };
  
  export default Modal;
