import React from 'react';
import img1 from './images/karen-resume.jpg'

const styles = {
    center: {
        margin: 'auto',
    },
    img: {
        width: '100%',
        height: '100%',
    }
}
export default function Resume() {
    return(
        <div className="container">
        <div className="pretty">
            <h1>My Resume</h1>
            <div id="scroll" style={styles.center}>
                <a href={img1} download>
                    <img style={styles.img} class="flex-image" src={img1} alt="My Resume" /></a>
            </div>
        </div>
    </div>
    )
}