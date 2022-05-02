import styles from './GameScoreBoard.module.css'
import Title from "../UI/Title";
import GameScoreBoardItem from "./GameScoreBoardItem";
import Button from "../UI/Button";
import {useDispatch, useSelector} from "react-redux";
import {setPage} from "../../store/ui-slice";
import {resetGame} from "../../store/game-slice";

function GameScoreBoard(props) {
    const dispatch = useDispatch()
    const winnerHistory = useSelector(state => state.game.winnerHistory)

    const resetHandler = () => {
        dispatch(setPage('GAME_MODE_MENU'))
        dispatch(resetGame())
    }
    const playAgainHandler = () => {
        dispatch(setPage('GAME_FIELD'))
    }

    return (
        <div className={styles.scoreboard}>
            <Title className={styles['scoreboard__title']} >Winners</Title>
            <div className={styles['scoreboard__logs-container']}>
                {winnerHistory.map((e,i) => <GameScoreBoardItem name={e} key={'id'+(i+1)}/>)}
            </div>
            <div className={styles['scoreboard__btn-container']}>
                <Button onClick={playAgainHandler} className={styles['scoreboard__btn']}>Play Again</Button>
                <Button onClick={resetHandler} className={styles['scoreboard__btn']}>Reset</Button>
            </div>
        </div>
    )
}

export default GameScoreBoard