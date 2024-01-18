import Link from "next/link";
import styles from "../styles/error.module.css";
import { Icon } from "@blueprintjs/core";
import { Home } from "@blueprintjs/icons";
export default function FourOhFour() {
	return (
		<div className={styles.error}>
			<h1>404 - Page not found... </h1>
			<h2>
				Use the footer below to{" "}
				<Link href='/'>
					<a title='home'>
						<Icon icon={<Home size={20} />}></Icon>
						<u> go back home</u>
					</a>
				</Link>
			</h2>
		</div>
	);
}
