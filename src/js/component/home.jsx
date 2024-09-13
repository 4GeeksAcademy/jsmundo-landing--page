import React from "react";


//include images into your bundle
import Navbar from "./navbar";
import Card from "./card";
import Jumbotron from "./jumbotron";
import Footer from "./footer";
//create your first component
const Home = () => {
	return (

		<>
			<Navbar /> 
			<div className="container fluid">
				<Jumbotron />
				<div className="row  g-0">
					<div className="col-12 col-md-6 col-lg-3">
						<Card />
					</div>
					<div className="col-12 col-md-6 col-lg-3">
						<Card />
					</div>
					<div className="col-12 col-md-6 col-lg-3">
                      <Card />
					</div>
					<div className="col-12 col-md-6 col-lg-3">
						<Card />
					</div>
				</div>
			</div>
			<Footer  />
		</>
	);
};

export default Home;
