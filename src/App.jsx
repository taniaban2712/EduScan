import React,{Component} from 'react'
import Webcam from 'react-webcam';
import WebcamCapture from './webcam/webcam';
import './App.css';

class App extends Component{
  render(){
    return(
      <div>

        <div className=''>
          <h1 className='head'>EduScan - Smart Attendance Manager</h1>
          <WebcamCapture/>
        </div>
        
      </div>
    )
  }
};

export default App;