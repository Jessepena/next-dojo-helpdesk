import Link from "next/link";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
	const response = await fetch("http://localhost:4000/tickets");
	const tickets = await response.json();
	return tickets.map((ticket) => ({
		id: ticket.id,
	}));
}

async function getTicket(id) {
	const response = await fetch(`http://localhost:4000/tickets/${id}`, {
		next: {
			revalidate: 60,
		},
	});

	if (!response.ok) {
		notFound();
	}

	return response.json();
}
export default async function TicketDetails({ params }) {
	const ticket = await getTicket(params.id);
	return (
		<main>
			<nav>
				<div>
					<h2>Ticket details</h2>
					<div>
						<Link href="/">
							<button className="btn-primary">Go back</button>
						</Link>
					</div>
				</div>
			</nav>
			<div className="card">
				<h3>{ticket.title}</h3>
				<small>created by {ticket.user_email}</small>
				<p>{ticket.body}</p>
				<div className={`pill ${ticket.priority}`}>
					{ticket.priority} priority
				</div>
			</div>
		</main>
	);
}
