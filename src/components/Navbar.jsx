import '../index.css'
import avatarImage from '../assets/image/photoforwebsite2-04.png';

function Navbar(){
    return(
        <div>
            <header>
                <div className="webMenu">

                    <nav className="nav">
                        <ul>
                            <li>
                                <h1><a href="#aboutMe">About Me</a></h1>
                            </li>
                            <li>
                                <h1><a href="#work">Work</a></h1>
                            </li>
                            <li>
                                <h1><a href="#contactMe">Me</a></h1>
                            </li>
                            <li>
                                <h1><a href="#resume">Resume</a></h1>
                            </li>
                        </ul>
                    </nav>

                </div>
                <figure className="webCover">
                    <img className="avatar" alt="avatar" src={avatarImage} />
                    <div id="welcomeMessage">
                        <h1>Ruihang HOU's portfolio</h1>
                    </div>
                </figure>

            </header>
        </div>
    )
}

export default Navbar;