import Image from "next/image";
import Logo from "./dojo-logo.png";
import { NavLink } from "./NavLink";

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
			<h1>Dojo Helpdesk</h1>
			<NavLink href="/">Dashboard</NavLink>
			<NavLink href="/tickets">Tickets</NavLink>
			<NavLink href="/create">Create</NavLink>
		</nav>
	);
}
