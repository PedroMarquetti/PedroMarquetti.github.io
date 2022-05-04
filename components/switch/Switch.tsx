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

	const check: boolean = theme === "dark" ? false : true;

	const handleChange = (e: any) => {
		if (!e.target.checked) {
			setTheme("dark");
		} else {
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
