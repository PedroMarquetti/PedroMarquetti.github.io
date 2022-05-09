import styles from "../../../styles/Nav.module.css";

export default function Item(props: {
	id: string; // will be accessed by dropdown
	handleHover: any;
	text: string; // will be displayed on TopNav
}): JSX.Element {
	const { id, handleHover, text } = props;
	return (
		<li
			id={id}
			tabIndex={0}
			onClick={handleHover}
			onMouseOver={handleHover}
			onKeyDown={handleHover}
			className={styles.item}
			style={{ width: 13 }}>
			{text}
		</li>
	);
}
