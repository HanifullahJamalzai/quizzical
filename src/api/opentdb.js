// import React, { useState, useEffect } from "react";
// function opentdb() {
// const [data, setData] = useState()
// const [startGame, setStartGame] = useState(false)
// useEffect( () =>{
const data = fetch(
	"https://opentdb.com/api.php?amount=5&category=9&difficulty=easy&type=multiple"
)
	.then((res) => res.json())
	.then((data) => data.result);
// },[startGame])
// return()
// }

export default data;
