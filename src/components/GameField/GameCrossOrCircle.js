import styles from './GameCrossOrCircle.module.css'

function GameCrossOrCircle(props) {
    let content

    if (props.content === 'circle') {
        content = <div className={styles.circle}/>
    } else if (props.content === 'cross') {
        content = <div className={styles.cross1}><div className={styles.cross2}/></div>
    }

    return content
}

export default GameCrossOrCircle