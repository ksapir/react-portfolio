import React from 'react';

const styles = {
    nav: {
        marginRight: '20px'
    },
    a: {
        marginRight: '5px',
        marginLeft: '5px'
    }
}

export default function Header() {
    return (
        <div>
            <header>
                <h1>Karen Pion</h1>
                <nav style={styles.nav}>
                    <a style={styles.a} href="#about-me">About Me  </a>
                    <a style={styles.a} href="#my-work"> My Work  </a>
                    <a style={styles.a} href="#contact-me"> Contact Me</a>
                    <a style={styles.a} href="#my-resume"> My Resume</a>
                </nav>
            </header>
        </div>
    )
}