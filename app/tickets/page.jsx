import { Suspense } from "react";
import TicketList from "./TicketList";
import Loading from "../loading";
import Link from "next/link";

export default function Tickets() {
	return (
		<main>
			<nav>
				<div className="w-full">
					<h2>Tickets</h2>
					<p>
						<small>Currently open tickets</small>
					</p>
					<div className="flex justify-between">
						<Link href="/">
							<button className="btn-primary">Go back</button>
						</Link>
						<Link href="/tickets/create">
							<button className="btn-primary">Create Ticket</button>
						</Link>
					</div>
				</div>
			</nav>
			<Suspense fallback={<Loading />}>
				<TicketList />
			</Suspense>
		</main>
	);
}
