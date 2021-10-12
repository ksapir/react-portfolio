import React from 'react';
import img1 from './images/karen-resume.jpg'


export default function Resume() {
    return(
        <div className="container">
        <div className="pretty">
            <h1>My Resume</h1>
            <div id="scroll">
                <a href={img1} download>
                    <img class="flex-image" src={img1} alt="My Resume" /></a>
            </div>
        </div>
    </div>
    )
}