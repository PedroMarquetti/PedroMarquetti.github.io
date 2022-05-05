import React from "react";
import { Dropdowntype } from "../../types/types";
import styles from "../../styles/Nav.module.css";

export default function Dropdown(props: {
	dropDown: Dropdowntype["type"];
	handleClick: any;
}): JSX.Element {
	const {
		dropDown, // dropdown type
		handleClick, // handle dropdown click
	} = props;

	const handleItemClick = (e: any) => {
		const id: string = e.target.id;
		handleClick(id);
	};

	// example of dropdown item
	// case "newnote":
	//     return (
	//         <ul className={styles.dropList}>
	//             <li
	//                 id={"new-note"}
	//                 onClick={handleItemClick}
	//                 className={styles.dropItem}>
	//                 New Note
	//             </li>
	//             <li
	//                 id={"archive"}
	//                 onClick={handleItemClick}
	//                 className={styles.dropItem}>
	//                 Archive
	//             </li>
	//         </ul>
	//     );
	switch (dropDown) {
		case "":
			return <></>;
		default:
			return <></>;
	}
	return <></>;
}
