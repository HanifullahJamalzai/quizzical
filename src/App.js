import React, { useState, useEffect } from "react";
import "./components/style.css";
import Intro from "./components/Intro";
import Question from "./components/Question";
import { Alert, LinearProgress } from "@mui/material";
function App() {
	const [data, setData] = useState([]);
	const [start, setStart] = useState(false);
	const [checkedAnswers, setCheckedAnswers] = useState(false);
	const [score, setScore] = useState(0);

	useEffect(() => {
		fetch(
			"https://opentdb.com/api.php?amount=5&category=9&difficulty=easy&type=multiple"
		)
			.then((res) => res.json())
			.then((data) => setData(data.results));
	}, [start]);

	function setRandomAnswers(arrData) {
		setData((prevState) => {
			return prevState.map((question) => {
				const randomAnswers = [];
				const newAllAnswers = [];
				const allAnswers = [
					...question.incorrect_answers,
					question.correct_answer,
				];

				for (let i = 0; i < allAnswers.length; i++) {
					randomAnswers.push(i);
				}
				for (let i = 0; i < allAnswers.length; i++) {
					const randomIndex = Math.floor(Math.random() * randomAnswers.length);
					const randomValueIndex = randomAnswers[randomIndex];
					randomAnswers.splice(randomIndex, 1); //from randomAnswers i erase one of the index values so is not used again so i dont push the same answer to newAllAnswers
					newAllAnswers.push(allAnswers[randomValueIndex]);
				}
				return {
					...question,
					randomAnswers: [...newAllAnswers],
				};
			});
		});
	}
	//if our data doesnt have the prop randomAnswers i call setRandomAnswers to create it
	if (!data.every((item) => item.randomAnswers)) {
		setRandomAnswers(data);
	}
	function handleClick(id, answerClicked) {
		if (!checkedAnswers) {
			setData((prevData) => {
				return prevData.map((question) => {
					if (question.question === id) {
						return {
							...question,
							answer: answerClicked,
						};
					} else return question;
				});
			});
		}
	}
	function checkAnswers() {
		if (data.every((val) => val.answer)) {
			setData((prevState) => {
				return prevState.map((question) => {
					if (question.answer !== question.correct_answer) {
						return {
							...question,
							wrong: question.correct_answer,
							height: question.answer,
						};
					} else {
						return {
							...question,
							highlight: question.answer,
						};
					}
				});
			});
			setCheckedAnswers(true);
		} else {
			alert("You must select an answer for every question");
			// console.log("error");
			// <Alert severity="info">
			// 	You should select an answer for every Question
			// </Alert>;
			// <Alert severity="error">This is an error alert — check it out!</Alert>
		}
		setScore(
			data.reduce((acc, item) => {
				let num = 0;
				if (item.correct_answer === item.answer) {
					acc += 1;
				}
				return acc;
			}, 0)
		);
	}
	function newGame() {
		setCheckedAnswers(false);
		setScore(0);
		setStart((prevState) => !prevState);
	}
	const dataElement = data.map((question, index) => (
		<Question key={index} question={question} handleClick={handleClick} />
	));

	return (
		<div>
			<svg
				className="top--svg"
				width="158"
				height="141"
				viewBox="0 0 158 141"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M63.4095 81.3947C35.1213 50.8508 -2.68211 21.7816 1.17274 -19.6933C5.43941 -65.599 39.854 -105.359 82.4191 -123.133C122.797 -139.994 170.035 -130.256 205.822 -105.149C235.947 -84.0141 236.823 -43.8756 246.141 -8.27104C256.17 30.0508 282.521 70.8106 260.501 103.779C237.538 138.159 188.991 143.432 147.931 138.768C112.318 134.723 87.7505 107.677 63.4095 81.3947Z"
					fill="#FFFAD1"
				/>
			</svg>

			{!start && (
				<Intro
					start={() => {
						setStart((prevIntro) => !prevIntro);
					}}
				/>
			)}

			{start && data.length > 0
				? dataElement
				: start && <LinearProgress variant="buffer" value="progress" />}

			{checkedAnswers && (
				<p className="score">
					You scored {score}/{data.length} correct answers
				</p>
			)}
			{start && !checkedAnswers ? (
				<button className="check--button" onClick={checkAnswers}>
					Check answers
				</button>
			) : (
				start && (
					<button className="check--button" onClick={newGame}>
						Play again
					</button>
				)
			)}

			<svg
				className="bottom--svg"
				width="148"
				height="118"
				viewBox="0 0 148 118"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M-5.55191 4.90596C35.9614 1.77498 82.2425 -9.72149 112.306 19.1094C145.581 51.0203 155.282 102.703 142.701 147.081C130.767 189.18 93.7448 220.092 51.8208 232.476C16.5281 242.902 -15.4332 218.605 -49.1007 203.738C-85.3375 187.737 -133.641 182.993 -145.741 145.239C-158.358 105.868 -132.269 64.5881 -103.064 35.3528C-77.7328 9.99541 -41.2727 7.60006 -5.55191 4.90596Z"
					fill="#DEEBF8"
				/>
			</svg>
		</div>
	);
}

export default App;
