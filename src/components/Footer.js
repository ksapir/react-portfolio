import React from 'react';

const styles ={
    center: {
        alignItems: 'center',
        textAlign: 'center',
    }
}

export default function Footer() {
    return (
        <div>
        <footer styles={styles.center}>
            <a href="https://github.com/ksapir"><i class="fab fa-github fa-3x"></i></a>
            
            <a href="https://www.linkedin.com/in/karenpion/"><i class="fab fa-linkedin fa-3x"></i></a>
    </footer>
           <p style={styles.center}> &copy; Karen Pion
           </p>
    </div>
    )
}