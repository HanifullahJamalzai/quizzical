import { nanoid } from "nanoid";
import React from "react";
export default function Answer(props) {
	console.log(props);
	return (
		<button key={nanoid} className="answer--button">
			{props.answer}
		</button>
	);
}
