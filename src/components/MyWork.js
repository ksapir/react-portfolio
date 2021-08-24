import React from 'react';

export default function MyWork() {
    return (
        <div>
            <div class="container center border" id="my-work">
                <h1>My Work</h1>
                {/* <!-- Perfect Home Section --> */}
                <div>
                    <h2>Perfect Home </h2>
                    <a href="https://perfect-home-finder.herokuapp.com/" target="_blank" rel="noreferrer"><img class="pre-hover flex-image" src="./assets/images/perfect-home.png" alt="Perfect Home"/></a>
                    <a href="https://github.com/KeithMurph/PerfectHome" target="_blank" rel="noreferrer">Click here to go to the repository</a>
                </div>
                

                {/* <!-- Recipe Finder Section --> */}
                <div class="row">
                    <div class="col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3 center project-gallery">
                        <h2 class="reduce">Special Recipe Finder Web App</h2>
                        <a href="https://ksapir.github.io/recipe-finder" target="_blank" rel="noreferrer"><img class="pre-hover"
                        src="./assets/images/recipe-finder-recipe.png" alt="Recipe Finder"/></a>
                        <a href="https://github.com/ksapir/recipe-finder" target="_blank" rel="noreferrer">Click here to go to the repository</a>
                    </div>

                    {/* <!-- Weather Dashboard Section --> */}
                    <div class="col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3 center project-gallery">
                        <h2 class="reduce">Weather Dashboard Web App</h2>
                        <a href="https://ksapir.github.io/weather-dashboard" target="_blank" rel="noreferrer"><img class="pre-hover"
                        src="./assets/images/weather-dashboard.png" alt="Weather Dashboard"/></a>
                        <a href="https://github.com/ksapir/weather-dashboard" target="_blank" rel="noreferrer">Click here to go to the
                        repository</a>
                    </div>

                    {/* <!-- Work Day Scheduler Section --> */}
                    <div class="col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3 center project-gallery">
                        <h2 class="reduce">Work Day Scheduler</h2>
                        <a href="https://ksapir.github.io/work-day-scheduler" target="_blank" rel="noreferrer"><img class="pre-hover"
                        src="./assets/images/work-day-scheduler.png" alt="Work Day Scheduler"/></a>
                        <a href="https://github.com/ksapir/work-day-scheduler" target="_blank" rel="noreferrer">Click here to go to the
                        Repository</a>
                    </div>
                </div>
            </div>
        </div>
    
    );
}