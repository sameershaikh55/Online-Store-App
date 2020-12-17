import React from 'react'

// import Data
import Data from './Data.json'

// import link from "RRC"
import { Link } from 'react-router-dom'

const Product = () => {
    return (
        <div className="porduct_page_container">
            <h1 className="product_list_heading"> Shoe Collection </h1>
            <div className="product_list">
                {Object.keys(Data).map((preVal) => {
                    const value = Data[preVal];
                    return(
                        <div className="product">
                            <Link key={preVal} to={`/product/${preVal}`}> 
                                <h2 className="product_heading"> {value.name} </h2>
                                <img className="image" src={value.img} alt={value.name} title={value.name} />
                            </Link>
                                <h2 className="product_price"> <span style={{ letterSpacing: "1.1px", color: "#05386b", fontSize: "22px", fontWeight: "bold" }}> Price: </span> {value.price} </h2>
                        </div>
                        );
                })}
            </div>
        </div>
    )
}

export default Product
