import React, { useState } from "react";
import Dropdown from "./Dropdown/Dropdown";
import { Dropdowntype } from "../../types/types";
import Topnav from "./Topnav/Topnav";
import styles from "../../styles/Nav.module.css";

export default function Navbar(props: { handleClick: any }) {
	const { handleClick } = props;

	const [dropDown, updateState] = useState<Dropdowntype>({
		isEnabled: false,
		type: "",
	});
	const changeDrop = (e: any) => {
		const id = e.target.id;
		if (!dropDown.isEnabled || dropDown.isEnabled) {
			updateState({
				isEnabled: true,
				type: id,
			});
		}
	};

	return (
		<nav
			onMouseLeave={() => {
				updateState({ isEnabled: false, type: "" });
			}}
			className={styles.main}>
			<Topnav dropDown={dropDown} changeDrop={changeDrop} />
			{dropDown.isEnabled ? (
				<Dropdown dropDown={dropDown.type} handleClick={handleClick} />
			) : null}
		</nav>
	);
}
