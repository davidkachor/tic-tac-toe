import styles from './Title.module.css'

function Title(props) {
	return (
		<div className={styles.title + ' ' + props.className}>
			<p>{props.children}</p>
		</div>
	)
}

export default Title
