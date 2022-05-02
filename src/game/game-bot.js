const gameBot = freeSections => {
	const randomNum = (min, max) =>
		Math.floor(Math.random() * (max - min + 1) + min)
	const randomSection = freeSections[randomNum(0, freeSections.length - 1)]
	document.getElementById(randomSection) &&
		document.getElementById(randomSection).click()
}

export default gameBot
