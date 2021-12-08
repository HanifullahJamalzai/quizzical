import React from "react";

export default function Answer(props) {
	// console.log(props);
	// const answerElement = props.answer.map((item, index) => {
	// 	<button key={index} className="answer--button">
	// 		{item.answer}
	// 	</button>;
	// });
	// return { answerElement };
	return (
		<button key={props.index} className="answer--button">
			{console.log(props)}
		</button>
	);
}
