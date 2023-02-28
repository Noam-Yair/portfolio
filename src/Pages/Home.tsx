import React from "react";
import "./Home.css"
function Home() {
    return (
        <div>
            <section>
            <div className="bg"></div>
            <div className="bg bg2"></div>
            <div className="bg bg3"></div>
            <div className="content">
                <h1 className="reveal" style={{fontSize: "10vh"}}>Hi there</h1>
                <div style={{lineHeight: "1.5vh"}}>
                    <h3 className="name">My name is <div style={{color: "#c47b88", display: "inline"}}>Noam Yair.</div></h3>
                    <h3 className="name"> I'm a Backend / Full-Stack developer</h3>
                </div>
            </div>
            </section>
            </div>
    )
}

export default Home