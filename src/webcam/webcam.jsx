import React,{useState} from "react";
import axios from 'axios';
import Webcam from 'react-webcam';
import './webcam.css';

const WebcamCapture=()=>{
    const webcamref=React.useRef(null);
    const VideoConstraints={
        width:700,
        height:700,
        facingMode:'user'
    };
    const [name,setName]=useState("")
    const capture=React.useCallback(
        ()=>{
            const imageSrc=webcamref.current.getScreenshot();
            console.log(`imageSrc=${imageSrc}`)
            axios.post("http://127.0.0.1:5000/api",{data:imageSrc})
            .then(res=>{
                console.log(`response=${res}`)
                setName(res.data)
            })
            .catch(error=>{
                console.log(`error=${error}`)
            })
        },
        [webcamref]
    );
    return(
        <>
            <div>
                <Webcam audio={false} height={400} ref={webcamref} screenshotFormat="image/jpeg" width={500} videoConstraints={VideoConstraints}/>
            </div>
            <div>
                <button className='btn' onClick={capture}>Click to take the picture!</button>
                <h2>{name}</h2>
            </div>
        </>
    );
};

export default WebcamCapture;