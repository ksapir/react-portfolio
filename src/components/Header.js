import React from 'react';

const styles = {
    nav: {
        marginRight: '20px'
    }
}

export default function Header() {
    return (
        <div>
            <header>
                <h1>Karen Pion</h1>
                <nav styles={styles.nav}>
                    <a href="#about-me">About Me</a>
                    <a href="#my-work">My Work</a>
                    <a href="#contact-me">Contact Me</a>
                    <a href="#my-resume">My Resume</a>
                </nav>
            </header>
        </div>
    )
}