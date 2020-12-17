import React from 'react'
import AboutImage from '../Image/about-page-image.svg'
import { NavLink } from 'react-router-dom'
import { Button } from '@material-ui/core'

const About = () => {
    return (
        <div className="about_page_container">
            <div className="about_page_intro">
                <h1 className="about_intro">Welcome to our <br /> About Page</h1>
                <p className="phrase"> we are providing your favorite brand products in best quality at your doorstep </p>
                <NavLink to="/contact">
                        <Button variant="contained" color="secondary"
                                style={{ background: "#05386b",
                                        color: "white",
                                        width: "200px",
                                        marginTop: "25px",
                                        height: "40px",
                                        fontWeight: "bold",
                                        letterSpacing: "2.5px"
                                        }}
                        >
                                Contact US ➤
                        </Button>
                </NavLink>
            </div>
            <div>
                <img className="about_page_image" src={AboutImage} alt={AboutImage} />
            </div>
        </div>
    )
}

export default About
