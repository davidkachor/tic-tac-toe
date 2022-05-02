import styles from './ContainerContent.module.css'

function ContainerContent(props) {
	return <div className={styles['content-container']}>{props.children}</div>
}

export default ContainerContent
