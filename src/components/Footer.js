import React from 'react';

const styles ={
    space: {
        marginTop: '95px'
    }
}

export default function Footer() {
    return (
        <div>
        <footer style={styles.space}>
            <a href="https://github.com/ksapir"><i class="fab fa-github fa-3x"></i></a>
            <a href="https://www.linkedin.com/in/karenpion/"><i class="fab fa-linkedin fa-3x"></i></a>
        <p>
            &copy; Karen Pion
        </p>
    </footer>
    </div>
    )
}