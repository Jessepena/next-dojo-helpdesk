import Image from "next/image";
import Logo from "./dojo-logo.png";
import { NavLink } from "./NavLink";
import ThemeHandler from "./ThemeHandler";

export default function Navbar() {
	return (
		<nav>
			<Image
				src={Logo}
				alt="Dojo Helpdesk logo"
				width={70}
				placeholder="blur"
				quality={100}
			/>
			<NavLink href="/">
				<h1>Jesse's Helpdesk</h1>
			</NavLink>
			<NavLink href="/">Dashboard</NavLink>
			<NavLink href="/tickets">Tickets</NavLink>
			<NavLink href="/tickets/create">Create</NavLink>
			<ThemeHandler />
		</nav>
	);
}
