function isGameWon(player, clickedSections) {
	const isSectionIsPlayers = section => player === section.player
	const filterById = (arr, id1, id2, id3) =>
		arr.filter(e => e.id === id1 || e.id === id2 || e.id === id3)

	return (
		filterById(clickedSections, 'f1', 'f2', 'f3').filter(e =>
			isSectionIsPlayers(e)
		).length === 3 ||
		filterById(clickedSections, 'f4', 'f5', 'f6').filter(e =>
			isSectionIsPlayers(e)
		).length === 3 ||
		filterById(clickedSections, 'f7', 'f8', 'f9').filter(e =>
			isSectionIsPlayers(e)
		).length === 3 ||
		filterById(clickedSections, 'f1', 'f4', 'f7').filter(e =>
			isSectionIsPlayers(e)
		).length === 3 ||
		filterById(clickedSections, 'f2', 'f5', 'f8').filter(e =>
			isSectionIsPlayers(e)
		).length === 3 ||
		filterById(clickedSections, 'f3', 'f6', 'f9').filter(e =>
			isSectionIsPlayers(e)
		).length === 3 ||
		filterById(clickedSections, 'f1', 'f5', 'f9').filter(e =>
			isSectionIsPlayers(e)
		).length === 3 ||
		filterById(clickedSections, 'f3', 'f5', 'f7').filter(e =>
			isSectionIsPlayers(e)
		).length === 3
	)
}

export default isGameWon
