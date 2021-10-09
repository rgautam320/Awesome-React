import React from "react";

import Button from "@material-ui/core/Button";

import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../../Data/reducers/reducers";

const Hero = () => {
	const count = useSelector((state) => state.counter.value);
	const dispatch = useDispatch();

	return (
		<>
			<h1 className="text-center hero__title">Counter</h1>
			<div className="hero__counter d-flex align-items-center justify-content-center">
				<Button onClick={() => dispatch(decrement())} variant="outlined" color="secondary">
					Decrement
				</Button>
				<h4 className="hero__count">{count}</h4>
				<Button onClick={() => dispatch(increment())} variant="outlined" color="primary">
					Increment
				</Button>
			</div>
		</>
	);
};

export default Hero;
