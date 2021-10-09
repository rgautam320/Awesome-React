import React from "react";
import { Helmet } from "react-helmet";

const About = () => {
	return (
		<>
			<Helmet>
				<title>Awesome React App - About</title>
				<meta name="description" content="Awesome React App - About Page" />
			</Helmet>
			<div className="about__about">
				<h1 className="about__title">About</h1>
			</div>
		</>
	);
};

export default About;
