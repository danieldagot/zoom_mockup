import React from 'react';
import logo from './logo.svg';
import './App.css';
import AlertDialogSlide from "./componnents/popup"
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div  className = "container" > 
      <div className = "zoomlogo">  zoom </div>
      <div className= "box">
        <div className ="iner_box">
          <p id  ="loading"  >Launching...</p>
          <div id = "manege">
          Please click <strong>Open Zoom Meetings</strong> if you see the system dialog.
      </div>
          <p id = "links"> nothing prompts from browser, click here to launch the meeting, or download & run Zoom.</p>
        </div>
      </div>
    <AlertDialogSlide />       
    </div>
  );
}

export default App;
