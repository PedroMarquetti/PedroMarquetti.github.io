import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import Link from "next/link";
import { ThemeProvider, useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Switch from "../components/switch/Switch";

function MyApp({ Component, pageProps }: AppProps) {
	const { theme, setTheme } = useTheme();

	const ThemeChanger = () => {
		const [mounted, setMounted] = useState(false);
		const { theme, setTheme } = useTheme();

		// When mounted on client, now we can show the UI
		useEffect(() => setMounted(true), []);

		if (!mounted) return null;
		const handleChange = (e: any) => {
			console.log(e);
		};
		return (
			<>
				<Switch></Switch>
			</>
			// <div>
			// 	The current theme is: {theme}
			// 	<button onClick={() => setTheme("light")}>Light Mode</button>
			// 	<button onClick={() => setTheme("dark")}>Dark Mode</button>
			// </div>
		);
	};

	const Footer = () => {
		return (
			<>
				<footer>
					{/* <Link href={"/about"}>About</Link>
				<Link href={"/"}>Home</Link> */}
					{/* <ThemeChanger></ThemeChanger> */}
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

	return (
		<ThemeProvider>
			<Switch></Switch>
			<DefaultHeader />
			<Component {...pageProps} />
			{/* <Footer /> */}
		</ThemeProvider>
	);
}

export default MyApp;
