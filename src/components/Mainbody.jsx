import '../index.css'
// import React from 'react';
// import avatarImage from '../assets/image/photoforwebsite2-04.png';
import employeeDashboardImage from '../assets/image/Screenshot 2023-10-30 230129.png';
import jobFlowImage from '../assets/image/265304657-59649ee8-c6f4-49ea-b6a0-ae1b71b4d114.png';
import travelAPPImage from '../assets/image/Screenshot2.png';
import toDoListImage from '../assets/image/to-DoList.png';
import recipeFinder from '../assets/image/recipeFinder.webp';
import quizApplicationImage from '../assets/image/quizApplication.avif';
// import sampleResume from '../assets/rec/resume-sample.pdf';

function Mainbody() {
    return (
        <div>
            <main>
                <article className="item" id="aboutMe">
                    <div className="itemHeader">
                        <h1>About</h1>
                        <h1>Me</h1>
                    </div>
                    <div className="itemContent" id="aboutMeItemContent">
                        <p>
                            I am a highly skilled and versatile professional with a strong background in both software development and mechanical engineering.
                            With expertise in HTML, CSS, JavaScript, React, MySQL, MongoDB, and more, I excel in full-stack web application development. Simultaneously,
                            I bring over six years of experience as an Intermedia-Senior Level Design Engineer, specializing in product design, research, and innovation.
                            Proficient in tools like Inventor and Solidworks, I have a deep understanding of mechanical engineering principles, particularly in Solid
                            Mechanics and Thermodynamics. I leverage simulation tools, including FEA and CFD, to validate and optimize design concepts.
                        </p>
                    </div>
                </article>
                <article className="item" id="work">
                    <div className="itemHeader">
                        <h1>Work</h1>
                    </div>
                    <div className="itemContent">
                        <figure className="itemContentFigure" id="figureWorkOne"
                            onClick={() =>
                                window.location.href = 'https://management-dashboard-3-10095453001b.herokuapp.com/'}>
                            <img alt="Employee Dashboard" src={employeeDashboardImage} />
                            <div>
                                <h2>Employee Dashboard</h2>
                                <p> a collaborative MERN-stack single-page application that addresses real-world problems by providing a user-focused platform for
                                    task management and forum discussions. It combines a scalable MongoDB back end, a GraphQL API, and an Express.js and Node.js server
                                    with a React front end. User authentication is implemented using JSON Web Tokens (JWT).
                                    The application allows users to create, read, update, and delete tasks, todos within tasks, thoughts in the main forum, and comments
                                    within thoughts. Users can also sign in/out and change their avatars and account information. Additionally, the platform provides a
                                    statistical analysis board that displays user and team statistics related to tasks, todos, and activities.
                                </p>
                            </div>
                        </figure>
                        <figure className="itemContentFigure" id="figureWorkOne"
                            onClick={() =>
                                window.location.href = 'https://github.com/Bemonn/JobFlow'}>
                            <img alt="JobFlow" src={jobFlowImage} />
                            <div>
                                <h2>Task Management App: JobFlow</h2>
                                <p>Jobflow is a website that allows you to create an account and post task so you and fellow employees can track their progress.
                                </p>
                            </div>
                        </figure>
                        <figure className="itemContentFigure" id="figureWorkOne"
                            onClick={() =>
                                window.location.href = 'https://shs-peb.github.io/NavigateUrWeek/'}>
                            <img alt="TravelAPP" src={travelAPPImage} />
                            <div>
                                <h2>TravelAPP: NavigateUrWeek</h2>
                                <p>Introducing the innovative travel planner app, NavigateUrWeek, designed to make your trip
                                    planning experience seamless and stress-free.
                                </p>
                            </div>
                        </figure>
                    </div>
                </article>
                <article className="item" id="contactMe">
                    <div className="itemHeader">
                        <h1>Contact</h1>
                        <h1>Me</h1>
                    </div>
                    <div className="itemContent" id="contactMeItemContent">
                        <div><strong><a href="#">e: ruihang1234@gmail.com</a></strong>
                        </div>
                        <div><strong>m: 0450 xxx xxx</strong></div>
                        <div>
                            <strong><a href="https://www.linkedin.com/in/ruihang-horace-hou-b9b73099/">LinkedIn:
                                https://www.linkedin.com/in/ruihang-horace-hou-b9b73099/</a></strong>
                        </div>
                    </div>
                </article>
                <article className="item" id="resume">
                    <div className="itemHeader">
                        <h1>Resume</h1>
                    </div>
                    <div className="itemContent" id="resumeItemContent">
                        <div>
                            <strong><a href="src\rec\Horace(RuihangHOU) Resume 15092023.pdf"> Sample Resume</a></strong>
                        </div>
                    </div>
                </article>
            </main>
        </div>
    )
}

export default Mainbody;