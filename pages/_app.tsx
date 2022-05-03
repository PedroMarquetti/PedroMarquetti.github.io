import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import Link from "next/link";
const Footer = () => {
	return (
		<>
			<footer>
				<Link href={"about"}>About</Link>
				<Link href={"/"}>Home</Link>
			</footer>
		</>
	);
};
const DefaultHeader = () => {
	return (
		<Head>
			<title>Pedro Marquetti&apos;s Github Pages</title>
			<meta name='description' content='My github pages made with NextJS' />
			<meta content='text/html;charset=UTF-8' />
			<meta name='author' content='Pedro H L Marquetti' />
			<link rel='icon' href='./favicon.ico' />
		</Head>
	);
};

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<DefaultHeader />
			<Component {...pageProps} />
			<Footer />
		</>
	);
}

export default MyApp;
