import styles from "../../styles/About.module.css";
import Link from "next/link";

export default function About(props: any) {
	const myLoader = ({ src }: any) => {
		return src;
	};
	return (
		<div className={styles.main}>
			<h1 className={styles.title}>Hello there!</h1>
			<h2>My name is Pedro, nice to meet you!</h2>
			<h3>Some info about me:</h3>
			<div className={styles.info}>
				<p>
					I like learning about a lot of stuff, and am always learning and
					trying to improve{""}
				</p>
				<Link href={"/about/dev"}>
					<h4 className={styles.link}>
						{" "}
						<u>I like to code sometimes!</u>
					</h4>
				</Link>
				<p>
					A while back, I started watching Mr Robot, that made me interested in
					learning Python. <br />
					After a while I decided to learn JavaScript, React, then Rust. <br />
					Click the link above to check out some projects
				</p>
				<Link href={"/about/biomedicine"}>
					<h4 className={styles.link}>
						{" "}
						<u>I like how the human body works!</u>
					</h4>
				</Link>
				<p>
					After studying biomedicine for 5 years, I discovered how much I like
					the human body. <br />I have a huge interest in genetics +
					development, I even did research on the PAX6 gene, (soon) click the
					link above to find more about it!
				</p>

				{/* <Image
					src={
						"https://github-readme-stats.vercel.app/api?username=pedromarquetti&show_icons=true&theme=dark"
					}
					loader={myLoader}
					width={400}
					height={400}
					alt='stats'></Image> */}
			</div>
		</div>
	);
}
