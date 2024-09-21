import DarkModeToggle from "@/Components/DarkModeToggle";
import ReactIcon from "@/icons/React";
import { Link, Head } from "@inertiajs/react";
export default function Welcome({ auth }) {
	return (
		<>
			<Head title="Welcome" />
			<div
				className="w-screen h-screen bg-center bg-cover"
				style={{ backgroundImage: "url('/image/kurp2.jpg')" }}
			/>
			<div className="absolute flex flex-col justify-around sm:justify-between overflow-hidden z-10 top-0 left-0 right-0 bottom-0 selection:bg-[#0041ab] dark:bg-slate-800/50 bg-center bg-cover selection:text-white">
				<header className="sm:mt-[2rem] flex justify-around items-center gap-2">
					<div className="hidden lg:flex lg:justify-center">
						<ReactIcon className="size-[3rem] text-blue-800 dark:text-blue-200" />
					</div>
					<nav className="-mx-3 flex justify-center items-center col-start-3">
						<div className="sm:me-6">
							<DarkModeToggle />
						</div>
						{auth.user ? (
							<Link
								href={route("dashboard")}
								className="rounded-md px-3 py-2 text-white ring-1 ring-transparent transition hover:text-white/70 focus:outline-none focus-visible:ring-[#0041ab] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white">
								Dashboard
							</Link>
						) : (
							<>
								<Link
									href={route("login")}
									className="rounded-md px-3 py-2 text-white ring-1 ring-transparent transition hover:text-white/70 focus:outline-none focus-visible:ring-[#0041ab] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white">
									Log in
								</Link>
								<Link
									href={route("register")}
									className="rounded-md px-3 py-2 text-white ring-1 ring-transparent transition hover:text-white/70 focus:outline-none focus-visible:ring-[#0041ab] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white">
									Register
								</Link>
							</>
						)}
					</nav>
				</header>
				<main>
					<div>
						<div class="mx-auto max-w-2xl">
							<div class="hidden sm:mb-8 sm:flex sm:justify-center">
								<div class="relative rounded-full px-3 py-1 text-sm leading-6 text-white ring-2 ring-slate-200 dark:ring-indigo-600 hover:ring-slate-100 dark:hover:ring-indigo-400">
									Solusi pengelolaan data yang cerdas untuk bisnis Anda.
								</div>
							</div>
							<div class="text-center">
								<h1 class="text-4xl px-6 sm:px-0 font-bold tracking-tight  text-white dark:text-indigo-100 sm:text-6xl">
									Tingkatkan produktivitas tim Anda.
								</h1>
								<p class="mt-6 px-6 sm:px-0 text-xl leading-8 text-blue-900 font-bold dark:text-blue-200">
									Kelola data Anda dengan lebih efisien. Fitur pencarian,
									pelaporan, dan visualisasi data yang akurat.
								</p>
							</div>
						</div>
					</div>
				</main>
				<footer className="sm:mb-[1rem] text-center lg:text-lg font-bold text-blue-950 dark:text-white/70">
					Develop By{" "}
					<a
						href="https://github.com/AriaPutra01"
						className="text-red-600 hover:text-blue-600 hover:font-bold">
						AriaPutra01
					</a>
				</footer>
			</div>
		</>
	);
}
