import styles from './InputNamePage.module.css'

import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { addPlayers } from '../../store/game-slice'
import { setPage } from '../../store/ui-slice'

import Title from '../UI/Title'
import Button from '../UI/Button'

function InputNamePage(props) {
	const dispatch = useDispatch()
	const { gameMode } = useSelector(state => state.game)
	const page = useSelector(state => state.ui.page)
	const [enteredName, setEnteredName] = useState('')

	const changeHandler = event => setEnteredName(event.target.value.trim())

	const clickHandler = () => {
		const playerName = enteredName
			.split('')
			.map((e, i) => (i === 0 ? e.toUpperCase() : e))
			.join('')

		if (gameMode === 'PLAYER-COMPUTER' || page === 'INPUT_USER_NAME_2') {
			dispatch(setPage('GAME_FIELD'))
		} else dispatch(setPage('INPUT_USER_NAME_2'))

		if (gameMode === 'PLAYER-COMPUTER') {
			dispatch(addPlayers('COMPUTER'))
		} else if (gameMode === 'PLAYER-COMPUTER' && page === 'INPUT_USER_NAME_2') {
			dispatch(addPlayers(playerName))
		} else dispatch(addPlayers(playerName))
		setEnteredName('')
	}

	return (
		<div className={styles['write-your-name']}>
			<Title className={styles['write-your-name__title']}>
				{props.children}
			</Title>
			<div className={styles['write-your-name__input']}>
				<label>
					<input
						type="text"
						value={enteredName}
						onChange={changeHandler}
						className={styles['input-name']}
					/>
				</label>
				<Button onClick={clickHandler} className={styles['accept-name-btn']}>
					Accept!
				</Button>
			</div>
		</div>
	)
}

export default InputNamePage
