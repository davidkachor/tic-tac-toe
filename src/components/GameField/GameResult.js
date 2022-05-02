import styles from './GameResult.module.css'
import Title from "../UI/Title";
import Button from "../UI/Button";
import {useDispatch, useSelector} from "react-redux";
import {setPage} from "../../store/ui-slice";

function GameResult(props) {
    const dispatch = useDispatch()
    const winner = useSelector(state => state.game.winner)

    const scoreboardHandler = () => {
        dispatch(setPage('SCOREBOARD'))
    }
    const playAgainHandler = () => {
        dispatch(setPage('GAME_FIELD'))
    }

    return (
        <div className={styles['game-result']}>
            <Title className={styles['game-result__title']}>{winner} Won!</Title>
            <div className={styles['game-result__btn-holder']}>
                <Button onClick={playAgainHandler} className={styles['game-result__btn']}>Play Again</Button>
                <Button onClick={scoreboardHandler} className={styles['game-result__btn']}>Score board</Button>
            </div>
        </div>
    )
}

export default GameResult