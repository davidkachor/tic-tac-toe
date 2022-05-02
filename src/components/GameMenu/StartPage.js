import styles from './StartPage.module.css'
import {useDispatch} from "react-redux";
import {setPage} from "../../store/ui-slice";
import ContainerContent from "../UI/ContainerContent";
import Button from "../UI/Button";
import Title from "../UI/Title";

function StartPage(props) {
    const dispatch = useDispatch()
    const clickHandler = () => {
        dispatch(setPage('GAME_MODE_MENU'))
    }

    return (
        <ContainerContent className={styles['start-page']}>
            <Title className={styles['start-page__title']}>Tic-Tac-Toe!</Title>
            <Button onClick={clickHandler} className={styles['start-page__btn']}>Start!</Button>
        </ContainerContent>
    )
}

export default StartPage




