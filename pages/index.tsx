import type { NextPage } from "next";
import styles from "../styles/Home.module.css";

function imageLoader({ src }: { src: any }): any {
	return src;
}
const Home: NextPage = () => {
	return (
		<div>
			<div className={styles.main}>
				<h1 className={styles.title}>Welcome to my Next.JS github pages!</h1>
				<h2>This is still a Work in Proggress</h2>
				<p>
					I have a degree in biomedicine and can code{" "}
					<code>print(&quot;hello world&quot;)</code>{" "}
				</p>
				<p>
					I&apos;ll post here some basic projects, some info, maybe some
					tutorials? who knows... take a look around
				</p>
				<p>
					The{" "}
					<a
						target='_blank'
						rel='noreferrer'
						href='https://www.flaticon.com/free-icons/mail'
						title='mail icons'>
						&quot;Mail icon&quot;
					</a>
					,{" "}
					<a
						target='_blank'
						rel='noreferrer'
						href='https://www.flaticon.com/free-icons/about'
						title='about icons'>
						&quot;About icon&quot;
					</a>{" "}
					and{" "}
					<a
						target='_blank'
						rel='noreferrer'
						href='https://www.flaticon.com/free-icons/home'
						title='home icons'>
						&quot;Home icon&quot;
					</a>{" "}
					can be found at{" "}
					<a
						target='_blank'
						rel='noreferrer'
						href='https://www.flaticon.com'
						title='Flat icons'>
						Flat Icon
					</a>{" "}
					website
				</p>
			</div>
		</div>
	);
};

export default Home;
