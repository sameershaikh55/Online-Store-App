import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";

// import all components for  Navbar
import Home from "./Components/Home";
import Product from "./Components/Product";
import About from "./Components/About";
import Contact from "./Components/Contact";
import ProductDetail from "./Components/ProductDetail";
import Navbar from "./Components/Navbar";
import ErrorPage from "./Components/ErrorPage";
import Footer from "./Components/Footer";

// Error Image
import ErrImg from "./Image/ErrorPageSvg.svg";

function App() {
	return (
		<div className="page_container">
			<img src={ErrImg} alt="ErrorPage" className="errorImg" />
			<h4 className="errorText">
				This Website is not Responsive for Small Devices, Please Open it on your
				Laptop Or Desktop...!!!
			</h4>
			<div className="container">
				<Navbar />
				<Switch className="comp_container">
					<Route exact path="/" component={Home} />
					<Route exact path="/product" component={Product} />
					<Route exact path="/product/:id" component={ProductDetail} />
					<Route exact path="/about" component={About} />
					<Route exact path="/contact" component={Contact} />
					<Route path="*" component={ErrorPage} />
				</Switch>
			</div>
			<div className="footer_container">
				<Footer />
			</div>
		</div>
	);
}

export default App;
