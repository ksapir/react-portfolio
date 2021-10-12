import React from 'react';

const styles ={
    space: {
        margin: '80px 550px 0px',
        display: 'flex',
        justifyContent: 'space-around',
    },
    center: {
        textAlign: 'center',
    }
}

export default function Footer() {
    return (
        <div>
        <footer style={styles.space}>
            <a href="https://github.com/ksapir"><i class="fab fa-github fa-3x"></i></a>
            
            <a href="https://www.linkedin.com/in/karenpion/"><i class="fab fa-linkedin fa-3x"></i></a>
    </footer>
           <p style={styles.center}> &copy; Karen Pion
           </p>
    </div>
    )
}