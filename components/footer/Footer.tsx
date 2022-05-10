import Link from "next/link";
import Image from "next/image";
import GithubLogo from "../../public/images/GitHub-Mark-32px.png";

export default function Footer() {
	const myLoader = ({ src }: any) => {
		return src;
	};
	return (
		<>
			<footer>
				<a
					href={"https://github.com/pedromarquetti/"}
					target='_blank'
					rel='noreferrer'>
					<Image
						loader={myLoader}
						unoptimized={true}
						src={GithubLogo}
						alt='Visit me on github'></Image>
					<p>my Github profile</p>
				</a>
				{/* <Link href={"https://github.com/pedromarquetti/"} target={"_blank"}>
					<a>
						<Image
							loader={myLoader}
							unoptimized={true}
							src={GithubLogo}
							alt='Visit me on github'></Image>
						<p>my Github profile</p>
					</a>
				</Link> */}
				<Link href={"/about"}>About me</Link>
				<Link href={"/"}>Home</Link>
			</footer>
		</>
	);
}
