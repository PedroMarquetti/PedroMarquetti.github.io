import styles from "../../styles/Switch.module.css";
import { useTheme } from "next-themes";

export default function Switch() {
	const { theme, setTheme } = useTheme();

	const check: boolean = theme === "dark" ? false : true;

	const handleChange = (e: any) => {
		if (e.target.getAttribute("aria-checked") === "true") {
			setTheme("dark");
		} else {
			setTheme("light");
		}
	};

	return (
		<div className={styles.switch_container}>
			<button
				title='theme switch'
				name='theme switch'
				role='switch'
				onClick={handleChange}
				aria-checked={check}
				id='theme-switch'
				className='switch'>
				<span aria-hidden='true'>light</span>
				<span aria-hidden='true'>dark</span>
			</button>
			<label htmlFor='theme-switch' className={styles.label}>
				Theme Switch
			</label>
			{/* <button
				role='switch'
				onClick={handleChange}
				aria-checked={check}
				id='theme-switch'
				className={styles.buttonSwitch}>
				<span>on</span>
				<span>off</span>
			</button>
			<label htmlFor='theme-switch' className={styles.labelSwitch}>
				Theme Switch
			</label> */}
		</div>
	);
}
