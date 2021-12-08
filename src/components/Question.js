// import { nanoid } from "nanoid";
import React from "react";

export default function Question(props) {
	return (
		<div className="question--container">
			<h2 className="question--description">{props.question.question}</h2>
			<div className="answer--container">
				{props.question.randomAnswers.map((answer, index) => (
					<button
						key={index}
						className="answer--button"
						onClick={() => props.handleClick(props.question.question, answer)}
						style={{
							background:
								props.question.wrong === answer
									? "#F8BCBC"
									: props.question.highlight === answer
									? "#94D7A2"
									: props.question.answer === answer
									? "#D6DBF5"
									: "white",
							opacity:
								answer !== props.question.highlight &&
								props.question.highlight &&
								"0.7",
						}}
					>
						{answer}
					</button>
				))}
			</div>
			<hr />
		</div>
	);
}

// 	return (
// 		<div className="questionContainer">
// 			<p className="question">{props.question.question}</p>
// 			<div className="answersContainer">
// 				{/*We iterate through the random answers property of each question to
// 		  evaluate its status*/}
// 				{props.question.randomAnswers.map((answer, inx) => (
// 					<button
// 						key={inx}
// 						className="answers"
// 						onClick={() => props.click(props.question.question, answer)}
// 						style={{
// 							background:
// 								//props.question.wrong has the correct answer. I compare it to the right answer in the prop random answers to highlight it red if the user didnt choose it. Only wrong answered questions will have the property "wrong".
// 								props.question.wrong === answer
// 									? "#F8BCBC"
// 									: //All chosen answers will be highlighted in green background. Only questions that have passed through the checkanswers process will have the highlight property.
// 									props.question.highlight === answer
// 									? "#94D7A2"
// 									: //all selected answers in the ui will have a gray background until the checking process. Only questions that have a selected answer by the user will have the "answer" property.
// 									props.question.answer === answer
// 									? "#D6DBF5"
// 									: "white",
// 							//All incorrect or unselected answers will have an opacity of 0.7 after the go thourgh the checking proccess wich will add the highlight prop.
// 							opacity:
// 								answer !== props.question.highlight &&
// 								props.question.highlight &&
// 								"0.7",
// 						}}
// 					>
// 						{answer}
// 					</button>
// 				))}
// 			</div>
// 		</div>
// 	);
// }

// {

// }
