import styles from './Button.module.css'

function ButtonByDiv(props) {
	return (
		<div
			onClick={props.onClick}
			id={props.value}
			className={styles.btn + ' ' + props.className}
		>
			{props.children}
		</div>
	)
}

export default ButtonByDiv
