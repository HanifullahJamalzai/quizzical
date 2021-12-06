import React from "react";

export default function intro(props) {
	return (
		<div className="intro--wrapper">
			<h1 className="intro--title">Quizzical</h1>
			<p className="intro--description">Some description if needed</p>
			<button className="intro--button" onClick={props.intro}>
				Start quiz
			</button>
		</div>
	);
}
