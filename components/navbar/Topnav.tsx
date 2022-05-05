import { Dropdowntype } from "../../types/types";
import styles from "../../styles/Nav.module.css";
import Switch from "../switch/Switch";

export default function Topnav(props: {
	dropDown: Dropdowntype;
	changeDrop: any;
}) {
	const { changeDrop } = props;
	const handleHover = (e: object) => {
		changeDrop(e);
	};

	// example of list item to add to Nav
	// <li
	// 	id={"newnote"}
	// 	onClick={handleHover}
	// 	onMouseOver={handleHover}
	// 	className={styles.item}
	// 	tabIndex={0}
	// 	onKeyDown={handleHover}>
	// 	<Switch></Switch>
	// </li>;
	return (
		<ul className={styles.list}>
			<li className={styles.item} tabIndex={0} style={{ width: 13 }}>
				<Switch></Switch>
			</li>
		</ul>
	);
}
