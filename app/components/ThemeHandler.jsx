"use client";
import { useEffect } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import ThemeSwitch from "./ThemeSwitch/ThemeSwitch";

function ThemeHandler() {
	const [theme, setTheme] = useLocalStorage("theme", "dark");
	const [checkedTheme, setCheckedTheme] = useLocalStorage("checkedTheme", true);

	useEffect(() => {
		document.querySelector("html").className = theme;
	}, [theme]);

	const handleTheme = () => {
		theme === "light" ? setTheme("dark") : setTheme("light");
		theme === "light" ? setCheckedTheme(true) : setCheckedTheme(false);
	};

	return <ThemeSwitch handleTheme={handleTheme} checkedTheme={checkedTheme} />;
}

export default ThemeHandler;
