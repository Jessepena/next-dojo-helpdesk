"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

export function NavLink({ href, children }) {
	const pathname = usePathname();
	const isActive = pathname === href;

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1, scale: 1 }}
			transition={{ duration: 0.1 }}
			whileHover={{ scale: 1.05 }}
		>
			<Link href={href} className={isActive ? "active" : ""}>
				{children}
			</Link>
		</motion.div>
	);
}
