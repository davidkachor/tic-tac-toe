import styles from './GameScoreBoardItem.module.css'

function GameScoreBoardItem(props) {
    return (
        <div className={styles['scoreboard-log']}>
            <p>{props.name}</p>
        </div>
    )
}

export default GameScoreBoardItem