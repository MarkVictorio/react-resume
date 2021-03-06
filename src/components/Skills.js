import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faJsSquare, faPython, faReact, faBootstrap, faHtml5,faCss3Alt,faSass, faJava} from "@fortawesome/free-brands-svg-icons";

function Skills(){
    return(
        <>
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
                    <FontAwesomeIcon icon={faJava} className="title is-size-1 mx-2 has-text-white-ter"/>
                    <FontAwesomeIcon icon={faHtml5} className="title is-size-1 mx-2 has-text-white-ter"/>
                    <FontAwesomeIcon icon={faCss3Alt} className="title is-size-1 mx-2 has-text-white-ter"/>
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
        </>
    )
}

