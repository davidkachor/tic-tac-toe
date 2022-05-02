import { createSlice } from '@reduxjs/toolkit'

const gameSlice = createSlice({
	name: 'GAME_DATA',
	initialState: {
		gameMode: null,
		players: [],
		winner: null,
		winnerHistory: [],
	},
	reducers: {
		setGameMode(state, action) {
			state.gameMode = action.payload
		},
		addPlayers(state, action) {
			state.players.push(action.payload)
		},
		clearPlayers(state) {
			state.players = []
		},
		setWinner(state, action) {
			state.winner = action.payload
			state.winnerHistory.push(action.payload)
		},
		clearWinnerHistory(state) {
			state.winnerHistory = []
		},
		resetGame(state) {
			state.gameMode = ''
			state.players = []
			state.players = []
			state.winnerHistory = []
		},
	},
})

export const {
	resetGame,
	addPlayers,
	clearPlayers,
	clearWinnerHistory,
	setGameMode,
	setWinner,
} = gameSlice.actions
export default gameSlice
