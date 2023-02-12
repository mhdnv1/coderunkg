import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import HomeRequest from '../../Pages/Home/HomeRequest/HomeRequest';
import {GiRingingBell} from 'react-icons/gi';
import '../../style.scss'

function Example() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      {/* <Button variant="primary"  */}
      <GiRingingBell style={{position:'fixed', bottom:"20px", right:'20px', zIndex:"3"}} className="btn_modal" onClick={handleShow} />
      {/* </Button> */}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
        </Modal.Header>
         <HomeRequest/>
      </Modal>
    </>
  );
}

export default Example