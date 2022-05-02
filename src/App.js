import { useSelector } from 'react-redux'

import StartPage from './components/GameMenu/StartPage'
import GameModePage from './components/GameMenu/GameModePage'
import InputNamePage from './components/GameMenu/InputNamePage'
import GameField from './components/GameField/GameField'
import GameResult from './components/GameField/GameResult'
import GameScoreBoard from './components/GameScoreBoard/GameScoreBoard'

function App() {
	const page = useSelector(state => state.ui.page)
	const { gameMode } = useSelector(state => state.game)

	let content

	switch (page) {
		default:
			content = <StartPage />
			break
		case 'GAME_MODE_MENU':
			content = <GameModePage />
			break
		case 'INPUT_USER_NAME_1':
			if (gameMode === 'PLAYER-COMPUTER') {
				content = <InputNamePage>Enter your name!</InputNamePage>
			} else if (gameMode === 'PLAYER-PLAYER') {
				content = <InputNamePage>Enter the name of player 1!</InputNamePage>
			}
			break
		case 'INPUT_USER_NAME_2':
			content = <InputNamePage>Enter the name of player 2!</InputNamePage>
			break
		case 'GAME_FIELD':
			content = <GameField />
			break
		case 'GAME_RESULT':
			content = <GameResult />
			break
		case 'SCOREBOARD':
			content = <GameScoreBoard />
			break
	}

	return content
}

export default App
