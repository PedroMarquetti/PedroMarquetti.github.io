import type { NextPage } from "next";
import Head from "next/head";
import Image, { ImageLoader } from "next/image";
import styles from "../styles/Home.module.css";

function imageLoader({ src }: { src: any }): any {
	return src;
}
const Home: NextPage = () => {
	return (
		<div className={styles.container}>
			<Head>
				<title>Pedro Marquetti</title>
				<meta name='description' content='My github pages made with NextJS' />
				<link rel='icon' href='./favicon.ico' />
			</Head>

			<main className={styles.main}>
				<h1 className={styles.title}>Welcome to my Next.JS github pages!</h1>
				<h2>This is still a Work in Proggress</h2>
			</main>

			<footer className={styles.footer}>
				<a
					href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
					target='_blank'
					rel='noopener noreferrer'>
					Powered by{" "}
					<span className={styles.logo}>
						<Image
							loader={imageLoader}
							src='/vercel.svg'
							alt='Vercel Logo'
							width={72}
							height={16}
						/>
					</span>
				</a>
			</footer>
		</div>
	);
};

export default Home;
