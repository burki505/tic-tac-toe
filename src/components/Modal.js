import React, { forwardRef, useRef, useEffect } from 'react';
import ReactDOM from "react-dom";
import { gsap } from "gsap";
import img from "../img/1.png"
import "./Modal.css";

const Backdrop = forwardRef((props,ref) => {


    const myRef = useRef();



    // useEffect(() => {
    //   gsap.to(myRef.current, { opacity: 0, delay: 3.5 })
    // },[ref]);
  
    
  
    

    return <div ref={myRef} className='backdrop'>
        <p>...Loading</p>
        <img src={img} alt="" />
    </div>
});

const Modal = () => {
    return (
        <div>
            {ReactDOM.createPortal(<Backdrop />,document.getElementById("modal"))}
        </div>
    )
};

export default Modal
