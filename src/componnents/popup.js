import React, { Component, useState, useEffect } from "react";import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import "./popup.css"
import { saveAs } from 'file-saver';
 import download from "downloadjs" 
let dn = function ()
{
  download("/yanaISLoveYanaIsLife.png")
}

export default function AlertDialogSlide() {
  const [smShow, setSmShow] = useState(false);
  const [lgShow, setLgShow] = useState(true);
  return (
    <>
      {/* <Button onClick={() => setLgShow(true)}>Large modal</Button> */}
      <Modal
        //size="sm"
        show={lgShow}
        onHide={() => setLgShow(false)} 
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Body>
        <div classname = "heder"> Open zoom ?</div>
          <div id = "zoombox" > 
           <p className = "zoombody">    { `https://zoom.eu whats to open this application.` }
           
           </p>
           </div>
           <div className = "Buttons">
           <Button onClick = { () => {setLgShow(false)}} >cancel</Button>
           <button type="button" onClick = {()=>{ dn()} } class="btn btn-link">open zoom</button>
           </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
