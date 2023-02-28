import './Page.css';
import {SiJava} from 'react-icons/si'
import React from "react";
import List from '@mui/joy/List';
import ListDivider from '@mui/joy/ListDivider';
import ListItem from '@mui/joy/ListItem';
import ListItemButton from '@mui/joy/ListItemButton';

function About() {
    return (
        <section style={{backgroundColor: "#9fbc93"}}>
        <div>
            <h1 className="aboutMe">About</h1>
            <h2 className="aboutMe">Hello. I'm Noam, nice to meet you. Please take a look around!</h2>
            <h3 className="aboutMe">I am a software engineer with a passion for building innovative solutions that make a real difference in people's lives. With a proven track record of success in backend development, I have experience working for a cybersecurity startup in Israel.

                In addition to my professional experience, I also enjoy working on frontend development and developing web applications in my spare time. This passion for both backend and frontend work makes me a great fit for full-stack developer roles.

                Currently located in NYC, I am open to positions in the area or fully remote. As a software engineer, I am always looking for new challenges and opportunities to grow both personally and professionally. I am excited about the prospect of working with talented and motivated individuals to build innovative solutions that make a real difference in the world. Feel free to reach out to me if you think I would be a great fit for your team!</h3>
        </div>
        </section>

    )
}

export default About