import styles from './GameField.module.css'

import React, { useState, useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { setWinner } from '../../store/game-slice'
import { setPage } from '../../store/ui-slice'

import GameFieldSection from './GameFieldSection'
import Title from '../UI/Title'

import isGameWon from '../../game/is-game-won'
import gameBot from '../../game/game-bot'

function GameField() {
	const dispatch = useDispatch()
	const { gameMode, players } = useSelector(state => state.game)

	const firstPlayerIndex = useRef(Math.floor(Math.random() * 2))
	console.log(firstPlayerIndex)
	let playersInTheGame
	switch (firstPlayerIndex) {
		case 0:
			playersInTheGame = [
				{ num: 1, playerName: players[0], sign: 'cross' },
				{ num: 2, playerName: players[1], sign: 'circle' },
			]
			break
		default:
			playersInTheGame = [
				{ num: 1, playerName: players[1], sign: 'cross' },
				{ num: 2, playerName: players[0], sign: 'circle' },
			]
			break
	}
	const [player, setPlayer] = useState(playersInTheGame[0])
	const [isComputersTurn, setIsComputersTurn] = useState(
		gameMode === 'PLAYER-COMPUTER' && player.playerName === 'Computer'
	)
	const clickedSections = useRef([])
	const freeSections = useRef([
		'f1',
		'f2',
		'f3',
		'f4',
		'f5',
		'f6',
		'f7',
		'f8',
		'f9',
	])

	useEffect(() => {
		if (gameMode === 'PLAYER-COMPUTER' && player.playerName === 'Computer') {
			setTimeout(() => {
				gameBot(freeSections.current)
				setIsComputersTurn(false)
				console.log('bot targets')
			}, 1000)
		}
	}, [gameMode, player.playerName])

	function clickHandler(event) {
		setPlayer(player.num === 1 ? playersInTheGame[1] : playersInTheGame[0])

		clickedSections.current = [
			...clickedSections.current,
			{ player: player.playerName, id: event.target.id },
		]
		freeSections.current = freeSections.current.filter(
			e => e !== event.target.id
		)
		gameMode === 'PLAYER-COMPUTER' &&
			!isComputersTurn &&
			setIsComputersTurn(true)

		if (isGameWon(player.playerName, clickedSections.current)) {
			dispatch(setWinner(player.playerName))
			dispatch(setPage('GAME_RESULT'))
		}
		if (clickedSections.current.length === 9) {
			dispatch(setWinner(player.playerName))
			dispatch(setPage('Nobody'))
		}
	}

	return (
		<div className="game">
			<div className={styles['game-field']}>
				{Array.from(Array(9), (e, i) => (
					<GameFieldSection
						isComputersTurn={isComputersTurn}
						onClick={clickHandler}
						sign={player.sign}
						id={'f' + (i + 1)}
						key={'f' + (i + 1)}
					/>
				))}
			</div>
			<Title className={styles['game__title']}>
				{player.playerName}'s Turn!
			</Title>
		</div>
	)
}

export default GameField
