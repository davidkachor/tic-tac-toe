import styles from './Button.module.css'

function Button(props) {
	return (
		<button
			onClick={props.onClick}
			id={props.id}
			className={styles.btn + ' ' + props.className}
		>
			{props.children}
		</button>
	)
}

export default Button
