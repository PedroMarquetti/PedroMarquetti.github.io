import styles from "../../styles/Switch.module.css";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

const ThemeChanger = () => {
	const [mounted, setMounted] = useState(false);
	const { theme, setTheme } = useTheme();

	// When mounted on client, now we can show the UI
	useEffect(() => setMounted(true), []);

	if (!mounted) return null;

	return (
		<div>
			The current theme is: {theme}
			<button onClick={() => setTheme("light")}>Light Mode</button>
			<button onClick={() => setTheme("dark")}>Dark Mode</button>
			data-theme {document.documentElement.getAttribute("data-theme")}
		</div>
	);
};

export default function Switch() {
	const [mounted, setMounted] = useState(false);
	const { theme, setTheme } = useTheme();

	console.log("curr theme on Switcher>> ", theme);
	const check: boolean = theme === "dark" ? false : true;
	console.log("curr check>>> ", check);

	const handleChange = (e: any) => {
		console.log("handling change>>>e.target.checked);>>  ", e.target.checked);
		console.log("handling change>>> check>> ", check, "theme== ", theme);

		if (!e.target.checked) {
			console.log("setting theme to dark");

			setTheme("dark");
		} else {
			console.log("setting theme to light");

			setTheme("light");
		}
	};
	// When mounted on client, now we can show the UI
	useEffect(() => setMounted(true), []);

	if (!mounted) return null;
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
