// import ApplicationLogo from "@/Components/ApplicationLogo";
import DarkModeToggle from "@/Components/DarkModeToggle";
import CrossIcon from "@/icons/Cross";
import MoneyIcon from "@/icons/Money";
import { Link } from "@inertiajs/react";

export default function Guest({ children }) {
	return (
		<div
			className="relative overflow-hidden w-screen h-screen bg-center bg-cover"
			style={{ backgroundImage: "url('/image/kurp2.jpg')" }}>
			<Link href="/">
				<CrossIcon className="absolute z-10 top-[3rem] left-[3rem] text-slate-800 dark:text-slate-200" />
			</Link>

			<DarkModeToggle className="absolute z-10 top-[2rem] right-[2rem]" />

			<div className="bg-slate-200/50 shadow-md sm:flex justify-center items-center transition-all dark:bg-slate-800/50 absolute top-0 left-0 right-0 bottom-0">
				<div className="overflow-auto w-full h-screen sm:h-auto sm:max-w-md dark:bg-slate-800/50 sm:rounded-lg px-[2rem] pb-[1rem] p-[2rem]">
					<MoneyIcon className="size-[4rem] w-full text-center mb-[2rem] dark:text-slate-200 text-slate-800" />
					{children}
				</div>
			</div>
		</div>
	);
}
