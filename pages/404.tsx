import Link from "next/link";
import styles from "../styles/error.module.css";
export default function FourOhFour() {
	return (
		<div className={styles.error}>
			<h1>404 - Page not found... </h1>
			<h2>
				Use the footer below to{" "}
				<Link href='/'>
					<u>go back home</u>
				</Link>
			</h2>
		</div>
	);
}
