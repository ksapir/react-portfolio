import React from 'react';

const styles = {
    pretty: {  
        alignContent:'center',
        alighSelf: 'center',
        padding: '20px',
        margin: '20px auto',
        border: '2px solid black'
    }
}


export default function ContactMe() {
    return(
        // <!-- Contact Me Section -->
    <div class="container">
        <div style={styles.pretty} class="center" id="contact-me">
            <h1>Contact Me</h1>
            <p>(561) 441-2962</p>
            <a href="mailto: karenlpion@gmail.com">Email |</a>
            <a href="https://github.com/ksapir" target="_blank" rel="noreferrer"> Github |</a>
            <a href="https://www.linkedin.com/in/karenpion/" target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
    </div>
    )
}