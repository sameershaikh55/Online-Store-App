import React from 'react'
import StoreImage from "../Image/store-image.svg"
import Button from '@material-ui/core/Button';
import { NavLink } from 'react-router-dom';


const Home = () => {
    return (
        <div className="home_page_container">
            <div className="home_page_content_container">
                <div className="home_page_intro">
                    <h1 className="intro">
                        Welcome to Our Store
                    </h1>
                    <h1 className="brand_name"> BUY ONLINE </h1>
                    <p className="phrase"> 
                        Fashion & Clothing is the one makes you look awesome and unique <br /> from others! 
                    </p>
                    <p className="phrase" style={{ marginTop: "17px" }}> Click Below to see Our Products </p>
                    <NavLink to="/product">
                        <Button variant="contained" color="secondary"
                                style={{ background: "#05386b",
                                        color: "white",
                                        width: "200px",
                                        marginTop: "9px",
                                        height: "40px",
                                        fontWeight: "bold",
                                        letterSpacing: "2.5px"
                                        }}
                        >
                                Products ➤
                        </Button>
                    </NavLink>
                </div>
                <div>
                    <img className="home_page_image" src={StoreImage} alt={StoreImage} />
                </div>
            </div>
        </div>
    )
}

export default Home
