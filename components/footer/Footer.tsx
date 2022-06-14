import Link from "next/link";
import Image from "next/image";
import GithubLogo from "../../public/images/GitHub-Mark-32px.png";
import Mail from "../../public/images/mail.png";
import Info from "../../public/images/info.png";
import Home from "../../public/images/home.png";

export default function Footer() {
	const myLoader = ({ src }: any) => {
		return src;
	};
	return (
		<>
			<footer>
				<a
					title='My Github profile'
					href={"https://github.com/pedromarquetti/"}
					target='_blank'
					rel='noreferrer'>
					<Image
						loader={myLoader}
						unoptimized={true}
						src={GithubLogo}
						alt='Visit me on github'></Image>
					<p>My Github profile</p>
				</a>
				<a title='Mail me!' href='mailto:pedro.marquettti@gmail.com'>
					<Image
						loader={myLoader}
						unoptimized={true}
						src={Mail}
						width={32}
						height={32}
						alt='Mail me!'></Image>
					<p>Mail me!</p>
				</a>
				<Link href={"/about"}>
					<a title='About me'>
						<Image
							loader={myLoader}
							unoptimized={true}
							src={Info}
							width={32}
							height={32}
							alt='About'></Image>
						<p>About me</p>
					</a>
				</Link>
				<Link href={"/"}>
					<a title='Home'>
						<Image
							loader={myLoader}
							unoptimized={true}
							src={Home}
							width={32}
							height={32}
							alt='Go home'></Image>
						<p>Home</p>
					</a>
				</Link>
			</footer>
		</>
	);
}
