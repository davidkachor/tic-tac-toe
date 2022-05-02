import styles from './GameModePage.module.css'
import personIcon from '../UI/btn-images/person-icon.svg'
import computerIcon from '../UI/btn-images/computer-icon.svg'
import ContainerContent from "../UI/ContainerContent";
import Title from "../UI/Title";
import ButtonByDiv from "../UI/ButtonByDiv";
import {useDispatch} from "react-redux";
import {setGameMode} from "../../store/game-slice";
import {setPage} from "../../store/ui-slice";

function GameModePage(props) {
    const dispatch = useDispatch()

    const onClickHandler = mode => {
        return () => {
            dispatch(setGameMode(mode))
            dispatch(setPage('INPUT_USER_NAME_1'))
        }
    }

 return (
     <ContainerContent className={styles['game-mode']}>
         <Title className={styles['game-mode__title']}>Choose the game mode!</Title>
         <div className={styles['game-mode__game-modes-list']}>
             <ButtonByDiv onClick={onClickHandler('PLAYER-COMPUTER')} value='PvsC' className={styles['__game-mode-card']}>
                 <img width="80" src={personIcon} alt="player-1"/>
                 <p>VS</p>
                 <img width="80" src={computerIcon} alt="player-2"/>
             </ButtonByDiv>
             <ButtonByDiv onClick={onClickHandler('PLAYER-PLAYER')} value='PvsP' className={styles['__game-mode-card']}>
                 <img width="80" src={personIcon} alt="player-1"/>
                 <p>VS</p>
                 <img width="80" src={personIcon} alt="player-2"/>
             </ButtonByDiv>
         </div>
     </ContainerContent>
 )
}

export default GameModePage