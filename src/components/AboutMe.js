import React from 'react';

const styles = {
    img: {
        float: 'left',
        margin: '0px 15px 15px 0px',
    }
}

export default function AboutMe() {
    const description = `Hello! Welcome to my portfolio and thank you for visiting. My name is Karen Pion and I am a software developer. Making web applications is my thing. From front end to back end, I've got you covered as a full stack developer. I graduated from the University of Washington's Full Stack Coding Bootcamp and I am on my forever coding journey. Although I love the whole process of building tech, what I find the most passion for is styling tech and just making things look nice, cohesive and have the user experience be elevated just by visiting. Contact me for anything coding and developing.`;

    return (
        <div class="container">
        <div class="row">
        <div class="col-sm-12 col-md-12 col-lg-12 center" id="about-me">
        <img styles={styles.img} src="./assets/images/Karenpion.jpg"
                alt="Karen" />
            {/* <!-- About Me Section --> */}
            <h1>About Me</h1>
            <p>{description}</p>
        </div>
        </div>
    </div>
    )
}