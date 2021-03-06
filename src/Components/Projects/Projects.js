import React from 'react';
import {useSpring, animated } from 'react-spring';

function ProjectCardsInfo(props) {

    const style = useSpring({opacity: 1, from: { opacity:0 }});

    return(
        <animated.div className="m-card-info" style={style}>
            <p className="m-card-title">{props.title}</p>
            <p className="m-card-sub-title">{props.subTitle}</p>
            <a href={props.link} target= "_blank" rel="noopener noreferrer">View the Application </a>
            <br></br>
            <a href={props.gitLink} target= "_blank" rel="noopener noreferrer">View on GitHub </a>

            </animated.div>
    );
    
}

export default ProjectCardsInfo;