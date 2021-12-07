import { nanoid } from "nanoid";
import React, { useState } from "react";
import Answer from "./Answer";

export default function Question(props) {
	// console.log(props.question.randomAnswers);
	// const answerElement = props.question.randomAnswers.map((answer, index) => {
	// 	// <Answer key={index} />;
	// 	<div>
	// 		<button key={index} className="answer--button">
	// 			{answer.answer}
	// 		</button>
	// 		;
	// 		<hr />;
	// 	</div>;
	// });
	// const answerElement = props.question.randomAnswers.map((answer, index) => {
	// 		<div>
	// 			<button key={index} className="answer--button">
	// 				{answer}
	// 			</button>
	// 			<hr />
	// 		</div>
	// }
	return (
		<div className="question--container">
			<h2 className="question--description">{props.question.question}</h2>
			<div className="answer--container">
				{props.question.randomAnswers.map((answer, index) => {
					// <Answer key={index} />;
					<div>
						<button key={index} className="answer--button">
							{answer}
						</button>
					</div>;
				})}
				<hr />
			</div>
		</div>
	);
}
