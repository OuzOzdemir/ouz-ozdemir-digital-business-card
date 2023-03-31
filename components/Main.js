import React from "react"

export default function main() {
    return (
        <main className="main-container">
        <img className="card-img" src="https://imgur.com/o6ww4TR.png" alt="card-img"></img>
        <div className="name">Oguzhan Ozdemir</div>
        <div className="title">Frontend Developer</div>
        <div className="website">github.com/OuzOzdemir</div>
        <div className="contact">
        <div className="button1"><img className= "icon" src="https://imgur.com/9fPNmf5.png"/> Email</div>
        <div className="button2"><img className= "icon" src="https://imgur.com/XfNd6Jp.png"/>Linkedin</div>
        </div>
        
        <div className="about-container">
        <div className="head-about">About</div>
        <div className="text">I’ve graduated with a Marine Engineering Bachelor of Science Degree from Istanbul Technical University. I have been working on commercial oil/chemical tanker vessels since 2016 overseas. I decided to make a career change; therefore, I stopped my career at sea to become frontend developer in December 2022.
        </div>
        <div className="head-about">Interests</div>
        <div className="text">Body building. Basketball. Coffee  Movies. Manga. Anime Series. Hiking. Cooking. Music.</div>
        </div>
        </main>
    )
}