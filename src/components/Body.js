import React from "react";
import "../App.css";

function Body() {
    return(
        <div className="columns">
            <div className="column my-6 py-6">
                <section className="section">
                    <h1 className="title has-text-black is-size-2"> I am <span className="has-text-primary">Mark Vincent Victorio</span></h1>
                    <p className = "mb-5">I am an aspiring individual in the field of Computer Science, I would describe myself as resourceful, hardworking and crafty. I always seek to challenge myself in any craft, hobby and skill that I pick-up. I believe that I am a creative soul that seeks to create in every opportunity that I get.</p>
                    <a href="/assets/Resume.pdf"><button className="button is-primary mr-1">Resume</button> </a>
                    <a className="button is-primary mx-5" href = "https://github.com/MarkVictorio?tab=repositories">Portfolio</a>
                </section>
            </div>
            <div className="column is-three-fifths has-text-centered">
                <img src="/assets/Background.png" alt='background' className = "is-3by2 px-6"/>                
            </div>
        </div>
    )
}

export default Body;
