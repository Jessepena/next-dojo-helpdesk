"use client";

import { motion } from "framer-motion";

export default function Button({ onClick, animated, className, children }) {
	if (animated) {
		return (
			<motion.div
				transition={{ duration: 0.1 }}
				whileHover={{ scale: 1.05 }}
				whileTap={{ scale: 0.95 }}
			>
				<button onClick={onClick} className={className}>
					{children}
				</button>
			</motion.div>
		);
	} else {
		return (
			<button onClick={onClick} className={className}>
				{children}
			</button>
		);
	}
}
