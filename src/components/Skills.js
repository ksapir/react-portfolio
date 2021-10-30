import React from 'react';

const styles = {
    title: {
        fontFamily: 'Montserrat'
    },
    body: {
        fontSize: '24px',
    }
}

export default function Skills() {
    return (
        <div className="pretty">
            <h2>Techincal Skills:</h2>
            <ul>
                <p style={styles.body}><b style={styles.title}>Programming Languages:</b> HTML, CSS, Javascript</p>
                <p style={styles.body}><b style={styles.title}>Database Management:</b> MySQL, Sequelize, MongoDB, Mongoose</p>
                <p style={styles.body}><b style={styles.title}>Libraries/Frameworks:</b> Jquery, React.js, Express.js, Moment.js, Bootstrap, Foundation</p>
                <p style={styles.body}><b style={styles.title}>Other Tech:</b> Node.js, Handlebars, Git, Heroku, AJAX</p>
            </ul>    
        </div>
    )
}