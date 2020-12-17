import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import Data from './Data.json'

// importing material ui contents 
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const ProductDetail = () => {

    // for product quantity
    let [quantity, setQuantity] = useState(1);

    const numberDown = () => {
        if(quantity >= 2){
            setQuantity(--quantity)
        }else {
            return 1;
        }
    }
    
    const numberUp = () => {
        setQuantity(++quantity)
    }


    const { id } = useParams();
    const value = Data[id];

    return (
        <div className="product_detail_page_container">
            <h1 className="product_detail_heading"> Product Detail </h1>
            <div className="product_detail_container">
                <img className="product_detail_image" src={value.img} alt={value.name} title={value.name} />            
                <div className="right_side_product_detail">
                    <h1 style={{ color: "#05386b",
                                 letterSpacing: "1.5px",
                                 marginBottom: "40px",
                                 fontSize: "40px",
                                 fontWeight: "normal"
                                }}> 
                                {value.name} 
                    </h1>
                    <h3 style={{ marginTop: "20px", marginBottom: "18px" }}> Rating: <span style={{ zoom: "1.4" }}> {value.rating} </span> </h3>
                    <div style={{ marginTop: "-10px" }}>
                        <FormControl style={{ width: "200px" }}>
                            <InputLabel style={{ color: "black", fontSize: "20px" }}>Size</InputLabel>
                            <Select>
                            <MenuItem value={10}>10</MenuItem>
                            <MenuItem value={20}>12</MenuItem>
                            <MenuItem value={30}>14</MenuItem>
                            <MenuItem value={30}>16</MenuItem>
                            <MenuItem value={30}>18</MenuItem>
                            <MenuItem value={30}>20</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                    <div className="product_quantity">
                        <h3 style={{ letterSpacing: "1px",
                                     fontSize: "20px",
                                     marginTop: "-5px"
                                    }}> 
                                     Quantity: &nbsp; 
                        </h3>
                        <Button style={{ boxShadow: "0px 0px 15px #ccc",
                                         zoom: "0.5",
                                         height: "50px", 
                                         background: "rgba(255,0,0,0.6)"
                                        }} 
                                        onClick={numberDown} varient="contained">
                            <RemoveIcon />
                        </Button>
                        <h3 style={{ marginLeft: "15px",
                                     marginRight: "15px",
                                     fontWeight: "bold"
                                    }}> 
                                    {quantity} 
                        </h3>
                        <Button style={{ boxShadow: "0px 0px 15px #ccc",
                                         height: "50px", 
                                         zoom: "0.5",
                                         background: "rgba(0,255,0,0.5)"
                                        }} 
                                        onClick={numberUp} varient="contained">
                            <AddIcon />
                        </Button>
                    </div>
                    <h2 style={{ marginTop: "20px", fontSize: "30px" }}> Price: {value.price} </h2>
                    <Button variant="contained" color="secondary"
                            style={{ background: "#05386b",
                                     marginTop: "25px",
                                     width: "220px",
                                     height: "40px",
                                     fontWeight: "bold",
                                     letterSpacing: "2px"
                                    }}
                     >
                        Buy Now
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default ProductDetail
