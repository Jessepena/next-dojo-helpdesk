import "./globals.css";
import { Montserrat } from "next/font/google";

//components
import Navbar from "./components/Navbar";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["500"] });

export const metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={montserrat.className}>
				<Navbar />
				{children}
			</body>
		</html>
	);
}
