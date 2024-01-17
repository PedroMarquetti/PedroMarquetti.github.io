import Link from "next/link";
import { Icon } from "@blueprintjs/core";
import { GitBranch, SendMessage, InfoSign, Home } from "@blueprintjs/icons";

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
					rel='noreferrer'
				>
					<Icon icon={<GitBranch size={20} />} />
					<p>My Github profile</p>
				</a>
				<a title='Mail me!' href='mailto:pedro.marquettti@gmail.com'>
					<Icon icon={<SendMessage size={20} />} />
					<p>Mail me!</p>
				</a>
				<Link href={"/about"}>
					<a title='About me'>
						<Icon icon={<InfoSign size={20} />} />

						<p>About me</p>
					</a>
				</Link>
				<Link href={"/"}>
					<a title='Home'>
						<Icon icon={<Home size={20} />} />
						<p>Home</p>
					</a>
				</Link>
			</footer>
		</>
	);
}
