import { Suspense } from "react";
import TicketList from "./TicketList";
import Loading from "../loading";
import Link from "next/link";
import Button from "../components/Button";

export default function Tickets() {
	return (
		<main>
			<div className="flex justify-between">
				<Link href="/">
					<Button className="btn-primary" animated>
						{`<`} Go back
					</Button>
				</Link>
				<Link href="/tickets/create">
					<Button className="btn-primary" animated>
						+ Create Ticket
					</Button>
				</Link>
			</div>
			<nav>
				<div className="w-full">
					<h2>Tickets</h2>
					<p>
						<small>Currently open tickets</small>
					</p>
				</div>
			</nav>
			<Suspense fallback={<Loading />}>
				<TicketList />
			</Suspense>
		</main>
	);
}
