import { nanoid } from "nanoid";
import React from "react";
import Answer from "./Answer";

export default function Question(props) {
	console.log(props);
	return (
		<div className="question--container">
			<h2 className="question--description">{props.question}</h2>
			<div className="answer--container">
				{props.incorrect_answers.map((answer) => (
					<Answer answer={answer} correct={answer.correct_answer} />
				))}
			</div>
			<hr />
		</div>
	);
}
