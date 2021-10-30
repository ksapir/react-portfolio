import React from 'react';
import img1 from './images/There-and-back-again.png'
import img2 from './images/perfect-home.png'
import img3 from './images/recipe-finder.png'
import img4 from './images/weather-dashboard.png'
import img5 from './images/workout-tracker.png'
import img6 from './images/budget-tracker.png'
import img7 from './images/workout-tracker.png'
import img8 from './images/budget-tracker.png'

const projects= [
    {
        name: "There and Back Again",
        description: "A fun and interactive application that encourages users to exercise. Users can walk to Mordor by logging their miles and the application will determine and display which parts on their journey they have reached.",
        tech: "HTML, CSS, Javascript, React, NoSQL, MongoDB, Mongoose",
        link: 'https://there-and-back-again-front.herokuapp.com/',
        repo: "https://github.com/ksapir/There-And-Back-Again",
        img: img1,
    },
    {
        name: "Perfect Home",
        description: "Not every pet will fit every person. Find a pet suitable for you by taking our survey and researching breeds on this application. Creating an account will enable the user to place a pet up for adoption.",
        tech: "HTML, CSS, Javascript, MySQL, Sequelize, Express.js, Bcrypt, Handlebars",
        link: "https://perfect-home-finder.herokuapp.com/",
        repo: "https://github.com/KeithMurph/PerfectHome",
        img: img2,
    },
    {
        name: "Recipe Finder",
        description: "This recipe finder uses a pair of databases to form an extensive library of recipes from which the app randomly selects based on a user-defined broad dietary restriction.",
        tech: "HTML, CSS, Javascript",
        link: "https://ksapir.github.io/recipe-finder",
        repo: "https://github.com/ksapir/recipe-finder",
        img: img3
    },
    {
        name: "Weather Dashboard",
        description: "This weather app will find current weather conditions as well as supply the user with a 5 day forecast of the weather for the city of their choosing. The user can also save the city so that is is more quickly accessible.",
        tech: "HTML, CSS, Javascript",
        link: "https://ksapir.github.io/weather-dashboard/",
        repo: "https://github.com/ksapir/weather-dashboard",
        img: img4
    },
    {
        name: "Workout Tracker",
        description: "Like a lot of difficult things, when it comes to exercising, being held accountable can have great influence on the results. This workout tracker will help with just that. Enter what kind of workout you're doing as well as all the details and you'll be able to track your statistics.",
        tech: "Javascript, MongDB, Express.js",
        link: "https://floating-badlands-61761.herokuapp.com/",
        repo: "https://github.com/ksapir/workout-tracker",
        img: img5
    },
    {
        name: "Budget Tracker",
        description: "Sometimes in life we just don't have any internet access. With the Budget-Tracker, you'll be able to track your debits and credits even offline. Once you get back online, those transactions will be uploaded and reflected.",
        tech: "PWA, Javascript, HTML, CSS",
        link: "https://lit-taiga-45772.herokuapp.com/",
        repo: "https://github.com/ksapir/budget-trackers",
        img: img6
    },
    ]

export default function ProjectCards() {
    return(
        <div className="wrapper">
            {projects.map((project)=> (
        <div className="card">
                <a href={project.link} target="_blank" rel="noreferrer"><img className="pre-hover flex-image" src={project.img} alt="Project Image"/></a>
                <h2 className="card-title">{project.name}</h2>
                <p className="card-description">{project.description}</p>
                <p>Technologies Used: <b>{project.tech}</b></p>
                <a target="blank" href={project.repo}><button className="card-btn">View Repository</button></a>
        </div>
            ))}
        </div>
    )
}