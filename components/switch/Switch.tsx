import styles from "../../styles/Switch.module.css";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export default function Switch() {
	const { theme, setTheme } = useTheme();

	const check: boolean = theme === "dark" ? false : true;

	const handleChange = (e: any) => {
		if (!e.target.checked) {
			setTheme("dark");
		} else {
			setTheme("light");
		}
	};
	return (
		<div className={styles.switch_container}>
			<input
				className={styles.checkbox}
				type='checkbox'
				checked={check}
				// current input (checkbox) status>> true == dark && false ==  light mode
				name='theme-switcher'
				id='theme-switcher'
				onChange={handleChange}
			/>
			<label className={styles.label} htmlFor='theme-switcher'>
				<span className={styles.inner}></span>
				<span className={styles.switch}></span>
			</label>
		</div>
	);
}
