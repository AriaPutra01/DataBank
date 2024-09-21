import { useDarkMode } from "@/hooks/useDarkMode";
import SunIcon from "@/icons/Sun";
import MoonIcon from "@/icons/Moon";

export default function DarkModeToggle({ className }) {
	const [isDarkMode, toggleDarkMode] = useDarkMode();

	return (
		<button
			onClick={toggleDarkMode}
			type="button"
			className={`${className} text-slate-600 hover:text-slate-500 dark:text-yellow-600 dark:hover:text-yellow-500 hover:bg-slate-400/50 dark:hover:bg-yellow-700/50 focus:outline-none focus:ring-2 focus:ring-slate-200 dark:focus:ring-yellow-700 rounded-lg text-sm p-2.5`}>
			{isDarkMode ? <SunIcon /> : <MoonIcon />}
		</button>
	);
}
