import React from 'react'
import { TextField, Paper, Button } from '@material-ui/core'

const Contact = () => {
    return (
        <div className="contact_us_page">
            {/* <div className="contact_us_content_container"> */}
                <Paper className="contact_us_content_container" elevation={4}>
                    <h2 style={{ fontWeight: "normal", fontSize: "35px" }}> Feedback </h2>
                    <p> send us your valuable feedback about our store products and services </p>
                    <TextField style={{ marginTop: "15px", width: "100%" }} id="outlined-basic" label="Email" variant="outlined" /> 
                    <br />
                    <TextField style={{ width: "100%", marginTop: "20px" }}
                                id="outlined-multiline-static"
                                label="Write Message.."
                                multiline
                                rows={7}
                                variant="outlined"
                                />
                    <br />
                    <Button variant="contained" color="secondary"
                                    style={{ background: "#05386b",
                                            color: "white",
                                            width: "100%",
                                            marginTop: "20px",
                                            height: "50px",
                                            fontWeight: "bold",
                                            letterSpacing: "2.5px"
                                            }}
                            >
                                    Submit
                    </Button>
                    <p style={{ textAlign: "center", marginTop: "8px" }}> Thanks For visiting our Store! </p>
                </Paper>
            {/* </div> */}
        </div>
    )
}

export default Contact;