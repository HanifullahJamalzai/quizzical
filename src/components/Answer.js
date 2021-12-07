import { nanoid } from "nanoid";
import React from "react";
export default function Answer(props) {
	console.log(props.answer);
	const answerElement = props.answer.map((item, index) => {
		<button key={index} className="answer--button">
			{item.answer}
		</button>;
	});
	return { answerElement };
}
