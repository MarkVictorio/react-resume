import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutubeSquare,faTwitterSquare, faFacebookSquare} from "@fortawesome/free-brands-svg-icons";
import '../App.css';
function Resume() {
    return (
        <div className="has-text-centered" id ='about-me'>
            <figure className="image is-128x128 is-inline-block">
                <img src="/assets/profileimage.jpg" className = "is-rounded"/>
            </figure>
            <h1 className = "title is-size-4 has-text-white mb-5">Name: Mark Vincent M. Victorio</h1>

            <section>
                <section>
                    <h1 className = "title is-size-5 has-text-white my-5">Education: Bachelor of Science in Computer Science</h1>
                    <h1 className="title is-size-5 has-text-white my-5">Social Media:</h1>
                    <section className=" my-3 mx-6">
                        <a href="https://www.facebook.com/mvvictorio/"><FontAwesomeIcon icon={faFacebookSquare} className="title is-size-1 mx-2 has-text-white-ter" id ="socials"/></a>
                        <a href="https://twitter.com/OnTheMark18"><FontAwesomeIcon icon={faTwitterSquare} className="title is-size-1 mx-2 has-text-white-ter" id ="socials"/></a>
                        <a href="https://www.youtube.com/c/OnTheMark"><FontAwesomeIcon icon={faYoutubeSquare} className="title is-size-1 mx-2 has-text-white-ter" id ="socials" /></a>
                    </section>
                </section>
            </section>
            
        </div>
    )
}

export default Resume;