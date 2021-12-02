import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faYoutubeSquare,faTwitterSquare, faFacebookSquare} from "@fortawesome/free-brands-svg-icons"

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
                <a href="https://www.facebook.com/mvvictorio/"><FontAwesomeIcon icon={faFacebookSquare} className="title is-size-1 mx-1 has-text-white-ter"></FontAwesomeIcon></a>
                <a href="https://twitter.com/OnTheMark18"><FontAwesomeIcon icon={faTwitterSquare} className="title is-size-1 mx-1 has-text-white-ter"/></a>
                <a href="https://www.youtube.com/c/OnTheMark"><FontAwesomeIcon icon={faYoutubeSquare} className="title is-size-1 mx-1 has-text-white-ter" /></a>
                
                
                </section>
                
            </div>
            <div className="column has-text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat voluptatum et aliquam quo dicta rem impedit blanditiis id. 
                Obcaecati cumque dolorum velit consequuntur perspiciatis distinctio accusantium corrupti accusamus, earum aut.
            </div>
            <div className="column has-text-white">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus molestias nisi culpa impedit
                placeat. Facilis impedit tenetur magnam aperiam ab. Quo atque natus omnis distinctio, non neque nam 
                quos nesciunt rem tempore voluptatibus in eos ex perspiciatis repellendus corporis tempora suscipit, 
                ducimus quis assumenda ad architecto, placeat itaque tenetur? Laborum!
            </div>
        </div>
    )
}

export default Resume;