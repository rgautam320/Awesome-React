import React from "react";
import Hero from "../Components/Hero/Hero";
import { Helmet } from "react-helmet";

const Home = () => {
	return (
		<>
			<Helmet>
				<title>Awesome React App - Home</title>
				<meta name="description" content="Awesome React App - Home Page" />
			</Helmet>
			<div className="home__home">
				<Hero />
			</div>
		</>
	);
};

export default Home;
