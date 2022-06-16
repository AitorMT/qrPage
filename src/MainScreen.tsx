import React from 'react';
import './estilos/index.sass';
import Img from './images/image-qr-code.png';
const MainScreen = () => {
    return (
        <>
            <div className={'container'}>
                <img src={Img} alt={'qr'}/>
                <h1>Improve your front-end skills by building projects</h1>
                <p>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
            </div>
        </>
    );
};

export default MainScreen;
