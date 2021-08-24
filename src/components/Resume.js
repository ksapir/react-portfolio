import React from 'react';
import img2 from './images/karen-resume-1.jpg'
import img1 from './images/karen-resume.jpg'

const styles = {
    pretty: {  
        alignContent:'center',
        alighSelf: 'center',
        padding: '20px',
        margin: '20px auto',
        border: '2px solid black'
    }
}

export default function Resume() {
    return(
        <div class="container">
        <div style={styles.pretty} id="my-resume">
            <h1>My Resume</h1>
            <div id="scroll">
                <a href="./assets/images/karen-resume.pdf" target="_blank" download>
                    <img class="flex-image" src={img1} alt="My Resume" /></a>
                <a href="./assets/images/karen-resume.pdf" target="_blank" download>
                    <img class="flex-image" src={img2} alt="My Resume Page 2" />
                </a>
            </div>
        </div>
    </div>
    )
}