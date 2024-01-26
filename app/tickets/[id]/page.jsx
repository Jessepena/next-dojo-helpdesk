import Button from "@/app/components/Button";
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
			<div className="flex justify-between">
				<Link href="/tickets">
					<Button className="btn-primary" animated>
						{`<`} Go back
					</Button>
				</Link>
			</div>
			<nav>
				<h2>Ticket details</h2>
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
