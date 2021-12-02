import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faYoutubeSquare,faTwitterSquare, faFacebookSquare,
     faJsSquare, faPython, faReact, faBootstrap, faHtml5,faCss3Alt,faSass} from "@fortawesome/free-brands-svg-icons"
import { faCode, faFlask } from "@fortawesome/free-solid-svg-icons"
function Resume() {
    return (
        <div className="columns m-6">
            <div className="column has-text-centered">
                <figure className="image is-128x128 is-inline-block">
                    <img src="/images/profileimage.jpg" className = "is-rounded"/>
                </figure>
                <h1 className = "title is-size-4 has-text-white mb-5">Name: Mark Vincent M. Victorio</h1>
                <section className="has-text-left">
                <h1 className = "title is-size-5 has-text-white my-2 mx-1">Education: Bachelor of Science in Computer Science</h1>
                <h1 className="title is-size-5 has-text-white my-1 ml-1">Interests/Hobbies:</h1>
                <p className="is-size-5 has-text-white ml-6">
                Game development <br />3D Modeling <br />Digital Arts <br />Youtube / Video Creation <br />Web Development
                </p>
                <h1 className="title is-size-5 has-text-white my-1 ml-1">Social Media:</h1>
                </section>
                <section className="has-text-centered is-flex my-3 mx-6">
                <a href="https://www.facebook.com/mvvictorio/"><FontAwesomeIcon icon={faFacebookSquare} className="title is-size-1 mx-1 has-text-white-ter"/></a>
                <a href="https://twitter.com/OnTheMark18"><FontAwesomeIcon icon={faTwitterSquare} className="title is-size-1 mx-1 has-text-white-ter"/></a>
                <a href="https://www.youtube.com/c/OnTheMark"><FontAwesomeIcon icon={faYoutubeSquare} className="title is-size-1 mx-1 has-text-white-ter" /></a>
                </section>
                
            </div>
            <div className="column">
                <section className ="mt-6">
                    <p className="has-text-white">I am familiar with several programming languages, I am mostly comfortable using python, but I am gaining more and more interest in JavaScript and Typescript. Although I am not limited to these two the rest of the Programming Languages and Frameworks that I am familiar with are listed below. </p>
                    <h1 className="title has-text-white is-size-5 mt-4"><FontAwesomeIcon icon={faCode} className="title is-size-5 mx-1 has-text-white-ter" />Programming Languages:</h1>
                </section>
                <section className="ml-6 my-3 is-flex">
                    <FontAwesomeIcon icon={faJsSquare} className="title is-size-1 mx-1 has-text-white-ter"/>
                    <FontAwesomeIcon icon={faPython} className="title is-size-1 mx-1 has-text-white-ter"/>
                    <FontAwesomeIcon icon={faReact} className="title is-size-1 mx-1 has-text-white-ter"/>
                    <FontAwesomeIcon icon={faBootstrap} className="title is-size-1 mx-1 has-text-white-ter"/>
                </section>
                <section className="ml-6 is-flex">
                    <FontAwesomeIcon icon={faFlask} className="title is-size-1 mx-1 has-text-white-ter"/>
                    <FontAwesomeIcon icon={faHtml5} className="title is-size-1 mx-1 has-text-white-ter"/>
                    <FontAwesomeIcon icon={faCss3Alt} className="title is-size-1 mx-1 has-text-white-ter"/>
                    <FontAwesomeIcon icon={faSass} className="title is-size-1 mx-1 has-text-white-ter"/>
                </section>
                <h1 className="title is-size-5 has-text-white ml-6 my-3"> MySQL</h1>
                <h1 className="title is-size-5 has-text-white ml-6 my-3"> Google Firebase</h1>
                <h1 className="title is-size-5 has-text-white ml-6 my-3"> MongoDB </h1>

            </div>
            <div className="column has-text-white">
                <section className ="mt-6">
                    <p className="has-text-white">Apart from programming, I have accumulated useful skills and proficiencies in several software like the following: </p>
                    <h1 className="title has-text-white is-size-5 mt-4"><FontAwesomeIcon icon={faCode} className="title is-size-5 mx-1 has-text-white-ter" />Software:</h1>
                    <h1 className="title is-size-5 has-text-white ml-6 my-3">Adobe Photoshop</h1>
                    <h1 className="title is-size-5 has-text-white ml-6 my-3">Adobe Premiere</h1>
                    <h1 className="title is-size-5 has-text-white ml-6 my-3">Audacity</h1>
                    <h1 className="title is-size-5 has-text-white ml-6 my-3">Blender</h1>
                    <h1 className="title is-size-5 has-text-white ml-6 my-3">ClipStudio Paint</h1>
                    <h1 className="title is-size-5 has-text-white ml-6 my-3">Microsoft Office Suite</h1>
                </section>
            </div>
        </div>
    )
}

export default Resume;