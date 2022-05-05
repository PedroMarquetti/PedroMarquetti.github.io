import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { ThemeProvider, useTheme } from "next-themes";
import Footer from "../components/footer/Footer";
import { useState, useEffect } from "react";
import Navbar from "../components/navbar/Navbar";

function MyApp({ Component, pageProps }: AppProps) {
	const [mounted, setMounted] = useState(false);

	const { theme, setTheme } = useTheme();
	const handleClick = (e: any) => {};
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
	useEffect(() => setMounted(true), []);

	if (!mounted) return null;
	return (
		<ThemeProvider>
			<DefaultHeader />
			{/* <Switch /> */}
			<Navbar handleClick={handleClick}></Navbar>
			<Component {...pageProps} />
			<Footer />
		</ThemeProvider>
	);
}

export default MyApp;
