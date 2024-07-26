import { useState } from "react";
import "./header.css";
import Modal from "../modal";



export const Header = () => {


  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <Modal show={showModal} onClose={toggleModal}/>
      <main className="header-main">
        <a href="https://www.linkedin.com/in/dani-sanguino/" target="_blank">
          <button className="header-main__linkedin">
            <img src="./assets/linkedin-icon.svg" className="header-main__linkedin--icon"/>
          </button>
        </a>
        <a href="https://github.com/danisanguino" target="_blank">
          <button className="header-main__github">
            <img src="./assets/github-icon.svg" className="header-main__github--icon"/>
          </button>
        </a>
        
          <button onClick={toggleModal} className="header-main__contact">
            <p>Contact</p>
          </button>
        
      </main>
    </>
  )
}
