import React from 'react';
import img1 from './images/perfect-home.png'
import img2 from './images/recipe-finder-recipe.png'
import img3 from './images/weather-dashboard.png'
import img4 from './images/work-day-scheduler.png'
import img5 from './images/note-taker.png'
import img6 from './images/workout-tracker.png'
import img7 from './images/budget-tracker.png'

const styles = {
    margin: {
        marginBottom: '50px'
    }
}

export default function MyWork() {
    return (
        <div>
            <div className="container center pretty">
                <h1>My Work</h1>
                {/* <!-- Perfect Home Section --> */}
                <div className="row">
                <div style={styles.margin} className="col-sm-12 col-md-9 col-lg-9 col-xl-9 col-xxl-9">
                    <h2>Perfect Home </h2>
                    <a href="https://perfect-home-finder.herokuapp.com/" target="_blank" rel="noreferrer"><img className="pre-hover flex-image" src={img1} alt="Perfect Home"/></a>
                    <a href="https://github.com/KeithMurph/PerfectHome" target="_blank" rel="noreferrer">Click here to go to the repository</a>
                </div>
                <hr></hr>

                {/* <!-- Recipe Finder Section --> */}
                <div style={styles.margin} className="row">
                    <div style={styles.margin} className="col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3 ">
                        <h2 className="reduce">Special Recipe Finder</h2>
                        <a href="https://ksapir.github.io/recipe-finder" target="_blank" rel="noreferrer"><img className="pre-hover"
                        src={img2} alt="Recipe Finder"/></a>
                        <a href="https://github.com/ksapir/recipe-finder" target="_blank" rel="noreferrer">Click here to go to the repository</a>
                    </div>

                      {/* <!-- Note Taker Section --> */}
                    <div style={styles.margin} className="col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                        <h2 className="reduce">Note Taker</h2>
                        <a href="https://note-taker-1992.herokuapp.com/" target="_blank" rel="noreferrer"><img className="pre-hover"
                        src={img5} alt="Work Day Scheduler"/></a>
                        <a href="https://github.com/ksapir/note-taker" target="_blank" rel="noreferrer">Click here to go to the
                        Repository</a>
                    </div>

                       {/* <!-- Workout Tracker Section --> */}
                    <div style={styles.margin} className="col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                        <h2 className="reduce">Workout Tracker</h2>
                        <a href="https://floating-badlands-61761.herokuapp.com/" target="_blank" rel="noreferrer"><img className="pre-hover"
                        src={img6} alt="Work Day Scheduler"/></a>
                        <a href="https://github.com/ksapir/workout-tracker" target="_blank" rel="noreferrer">Click here to go to the
                        Repository</a>
                    </div>
                </div>
                <hr></hr>
                <div className="row">
                       {/* <!-- Budget Tracker Section --> */}
                    <div style={styles.margin} className="col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                        <h2 className="reduce">Budget Tracker</h2>
                        <a href="https://lit-taiga-45772.herokuapp.com/" target="_blank" rel="noreferrer"><img className="pre-hover"
                        src={img7} alt="Work Day Scheduler"/></a>
                        <a href="https://github.com/ksapir/budget-trackers" target="_blank" rel="noreferrer">Click here to go to the
                        Repository</a>
                    </div>

                    {/* <!-- Weather Dashboard Section --> */}
                    <div style={styles.margin} className="col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                        <h2 className="reduce">Weather Dashboard</h2>
                        <a href="https://ksapir.github.io/weather-dashboard" target="_blank" rel="noreferrer"><img className="pre-hover"
                        src={img3} alt="Weather Dashboard"/></a>
                        <a href="https://github.com/ksapir/weather-dashboard" target="_blank" rel="noreferrer">Click here to go to the
                        repository</a>
                    </div>

                    {/* <!-- Work Day Scheduler Section --> */}
                    <div style={styles.margin} className="col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                        <h2 className="reduce">Work Day Scheduler</h2>
                        <a href="https://ksapir.github.io/work-day-scheduler" target="_blank" rel="noreferrer"><img className="pre-hover"
                        src={img4} alt="Work Day Scheduler"/></a>
                        <a href="https://github.com/ksapir/work-day-scheduler" target="_blank" rel="noreferrer">Click here to go to the
                        Repository</a>
                    </div>
                </div>
                </div>
            </div>
        </div>
    
    );
}