import React from 'react';
import {Link} from 'react-router-dom'

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
                    <a style={styles.a} ><Link to='/'>About Me</Link></a>
                    <a style={styles.a} ><Link to='/mywork'>My Work</Link></a>
                    <a style={styles.a} ><Link to='/contact'>Contact Me</Link></a>
                    <a style={styles.a} ><Link to='/resume'>Resume</Link></a>
                </nav>
            </header>
        </div>
    )
}