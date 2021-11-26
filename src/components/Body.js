import React from "react";
import "../App.css";

function Body() {
    return(
        <div className="columns">
            <div className="column my-6 py-6">
                <section className="section">
                    <h1 className="title has-text-black is-size-2"> I am <span className="has-text-primary">Mark Vincent Victorio</span></h1>
                    <p className = "mb-5"> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis veritatis doloribus quibusdam placeat aliquam, eaque rem architecto? Tempora id facilis, quod minus perspiciatis mollitia excepturi. Ducimus modi nam quo minima tenetur praesentium aliquam corrupti, cumque doloremque amet? Asperiores, hic facere, delectus laboriosam eius tenetur aut, vel accusamus veritatis officia officiis.</p>
                    <button className="button is-primary mr-5">Contact</button>
                    <a className="button is-primary mx-5" href = "https://github.com/MarkVictorio?tab=repositories">Portfolio</a>
                </section>
            </div>
            <div className="column is-three-fifths has-text-centered">
                <img src="/images/Background.png" className = "is-3by2 px-6"/>                
            </div>
        </div>
    )
}

export default Body
