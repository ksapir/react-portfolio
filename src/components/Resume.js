import React from 'react';

export default function Resume() {
    return(
        <div class="container">
        <div class="center border" id="my-resume">
            <h1>My Resume</h1>
            <div id="scroll">
                <a href="./assets/images/karen-resume.pdf" target="_blank" download>
                    <img class="flex-image" src="./assets/images/karen-resume.jpg" alt="My Resume" /></a>
                <a href="./assets/images/karen-resume.pdf" target="_blank" download>
                    <img class="flex-image" src="./assets/images/karen-resume-1.jpg" alt="My Resume Page 2" />
                </a>
            </div>
        </div>
    </div>
    )
}