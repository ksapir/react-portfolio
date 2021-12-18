import React from 'react';
import Skills from './Skills'
import img from './images/Karenpion.jpg'

const styles = {
    img: {
        float: 'left',
        margin: '0px 15px 15px 0px',
    }
}

export default function AboutMe() {
    const description = "My name is Karen and I am a web developer. Graduating from the University of Washington's Full Stack Coding Bootcamp enabled me to become the developer I am today. I love all aspects of web developing from contributing to User Experience to writing routes to correctly call on API's. I'm a proponent for mentorships, project collaboration and working with both the developers and technologies of the future. I believe that anyone can be taught the skills to becoming a developer, but it is the personal attributes of an individual that is the most valuable and will ultimately determine how successful one is in their goals. If you feel the same or would like to connect feel free to contact me.";

    return (
        <div className="container">
        <div className="row">
        <div className="col-sm-12 col-md-12 col-lg-12 center" id="about-me">
        <img style={styles.img} src={img}
                alt="Karen" />
            {/* <!-- About Me Section --> */}
            <h1>About Me</h1>
            <p>{description}</p>
        </div>
        </div>
        <Skills />
    </div>
    )
}