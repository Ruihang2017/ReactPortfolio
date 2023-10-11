import '../index.css'
// import React from 'react';
// import avatarImage from '../assets/image/photoforwebsite2-04.png';
import jobFlowImage from '../assets/image/265304657-59649ee8-c6f4-49ea-b6a0-ae1b71b4d114.png';
import travelAPPImage from '../assets/image/Screenshot2.png';
import toDoListImage from '../assets/image/to-DoList.png';
import recipeFinder from '../assets/image/recipeFinder.webp';
import quizApplicationImage from '../assets/image/quizApplication.avif';
// import sampleResume from '../assets/rec/resume-sample.pdf';


function Mainbody(){
    return(
        <div>
            <main>
                <article className="item" id="aboutMe">
                    <div className="itemHeader">
                        <h1>About</h1>
                        <h1>Me</h1>
                    </div>
                    <div className="itemContent" id="aboutMeItemContent">
                        <p>A Intermedia-Senior Level Design Engineer with four years of industrial experience,
                            specialised in product design,research and innovation. I am a highly motivated and organised
                            employee
                            who likes to take extra steps for a satisfactory result. I am proficient in 3D CAD design
                            (Solidworks
                            and Inventor) with a strong computer programming background. I like to take on the challenges,
                            research
                            into unknown and learning about cutting-edge technologies.</p>
                    </div>
                </article>
                <article className="item" id="work">
                    <div className="itemHeader">
                        <h1>Work</h1>
                    </div>
                    <div className="itemContent">
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
                                window.location.href ='https://shs-peb.github.io/NavigateUrWeek/'}>
                            <img alt="TravelAPP" src={travelAPPImage} />
                            <div>
                                <h2>TravelAPP: NavigateUrWeek</h2>
                                <p>Introducing the innovative travel planner app, NavigateUrWeek, designed to make your trip
                                    planning experience seamless and stress-free.
                                </p>
                            </div>
                        </figure>
                        <figure className="itemContentFigure" id="figureWorkThree"
                            onClick={() =>
                                window.location.href = 'https://ruihang2017.github.io/01-Challenge-HTML-Git-CSS/'}>
                            <img alt="Recipe Finder" src={recipeFinder} />
                            <div>
                                <h2>Recipe Finder</h2>
                                <p>A recipe finder website that allows users to search for recipes based
                                    on ingredients or categories.</p>
                            </div>
                        </figure>
                        <figure className="itemContentFigure" id="figureWorkFour"
                            onClick={() =>
                                window.location.href = 'https://ruihang2017.github.io/01-Challenge-HTML-Git-CSS/'}>
                            <img alt="To-Do List" src={toDoListImage} />
                            <div>
                                <h2>To-Do List</h2>
                                <p>A web application that allows users to create and manage their to-do
                                    lists. </p>
                            </div>
                        </figure>
                        <figure className="itemContentFigure" id="figureWorkFive"
                            onClick={() =>
                                window.location.href = 'https://ruihang2017.github.io/01-Challenge-HTML-Git-CSS/'}>
                            <img alt="Quiz Application" src={quizApplicationImage} />
                            <div>
                                <h2>Quiz Application</h2>
                                <p>An interactive quiz application where users can answer
                                    multiple-choice questions and receive immediate feedback on their answers. </p>
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
                            <strong><a href="src\rec\resume-sample.pdf"> Sample Resume</a></strong>
                        </div>
                    </div>
                </article>

            </main>
        </div>
    )
}

export default Mainbody;