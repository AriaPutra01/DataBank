import { useState } from "react";
import { usePage } from "@inertiajs/react";
import Dropdown from "@/Components/Dropdown";
import NavLink from "@/Components/NavLink";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink";
import DarkModeToggle from "@/Components/DarkModeToggle";
import ArrowDownIcon from "@/icons/ArrowDown";
import CrossIcon from "@/icons/Cross";
import BarIcon from "@/icons/Bar";
import MoneyIcon from "@/icons/Money";

export default function Authenticated({ header, children }) {
	const user = usePage().props.auth.user;
	const usertype = usePage().props.auth.user.usertype;
	const [showingNavigationDropdown, setShowingNavigationDropdown] =
		useState(false);

	return (
		<div className="min-h-screen bg-slate-100 dark:bg-slate-900 transition-all">
			<nav className="fixed top-0 left-0 right-0 z-20 bg-white dark:bg-slate-800 border-b border-slate-100 dark:border-slate-700 transition-all">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex justify-between h-16">
						<div className="flex">
							<div className="shrink-0 flex items-center">
								<MoneyIcon className="w-[1rem] text-slate-800 dark:text-slate-200" />
							</div>

							<div className="hidden space-x-8 lg:-my-px lg:ms-10 lg:flex">
								<NavLink
									href={route("dashboard")}
									active={route().current("dashboard")}>
									Dashboard
								</NavLink>
							</div>

							<div className="hidden space-x-8 lg:-my-px lg:ms-10 lg:flex">
								<NavLink
									href={route("rekening.index")}
									active={route().current("rekening.index")}>
									Data Rekening
								</NavLink>
							</div>

							{usertype !== "user" && (
								<div className="hidden space-x-8 lg:-my-px lg:ms-10 lg:flex">
									<NavLink
										href={route("rekening.create")}
										active={route().current("rekening.create")}>
										Tambah Data User
									</NavLink>
								</div>
							)}

							{usertype === "admin" && (
								<div className="hidden space-x-8 lg:-my-px lg:ms-10 lg:flex">
									<NavLink
										href={route("registration-requests.index")}
										active={route().current("registration-requests.index")}>
										Permohonan Daftar
									</NavLink>
								</div>
							)}

							{usertype === "admin" && (
								<div className="hidden space-x-8 lg:-my-px lg:ms-10 lg:flex">
									<NavLink
										href={route("UserRekening.index")}
										active={route().current("UserRekening.index")}>
										User Control
									</NavLink>
								</div>
							)}
						</div>

						<div className="hidden lg:flex lg:items-center lg:ms-6">
							<DarkModeToggle />
							<div className="ms-3 relative">
								<Dropdown>
									<Dropdown.Trigger>
										<span className="inline-flex rounded-md">
											<button
												type="button"
												className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-slate-500 dark:text-slate-400 bg-white dark:bg-slate-800 hover:text-slate-700 dark:hover:text-slate-300 focus:outline-none transition ease-in-out duration-150">
												{user.name}

												<ArrowDownIcon className="ms-2" />
											</button>
										</span>
									</Dropdown.Trigger>

									<Dropdown.Content>
										<Dropdown.Link href={route("profile.edit")}>
											Profile
										</Dropdown.Link>
										<Dropdown.Link
											href={route("logout")}
											method="post"
											as="button">
											Log Out
										</Dropdown.Link>
									</Dropdown.Content>
								</Dropdown>
							</div>
						</div>

						{/* Hamburger button */}
						<div className="-me-2 flex items-center lg:hidden">
							<div className="pt-2 pb-3 px-4">
								<DarkModeToggle />
							</div>
							<button
								onClick={() =>
									setShowingNavigationDropdown(
										(previousState) => !previousState
									)
								}
								className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 dark:text-slate-500 hover:text-slate-500 dark:hover:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-900 focus:outline-none focus:bg-slate-100 dark:focus:bg-slate-900 focus:text-slate-500 dark:focus:text-slate-400 transition duration-150 ease-in-out">
								<BarIcon
									className={
										!showingNavigationDropdown ? "inline-flex" : "hidden"
									}
								/>
								<CrossIcon
									className={
										showingNavigationDropdown ? "inline-flex" : "hidden"
									}
								/>
							</button>
						</div>
					</div>
				</div>

				<div
					className={
						(showingNavigationDropdown ? "block" : "hidden") +
						" lg:hidden border-b-2 bg-white dark:bg-slate-800"
					}>
					<div className="pt-2 pb-3 space-y-1">
						<ResponsiveNavLink
							href={route("dashboard")}
							active={route().current("dashboard")}>
							Dashboard
						</ResponsiveNavLink>
					</div>

					<div className="pt-2 pb-3 space-y-1">
						<ResponsiveNavLink
							href={route("rekening.index")}
							active={route().current("rekening.index")}>
							Data Rekening
						</ResponsiveNavLink>
					</div>

					{usertype !== "user" && (
						<div className="pt-2 pb-3 space-y-1">
							<ResponsiveNavLink
								href={route("rekening.create")}
								active={route().current("rekening.create")}>
								Tambah Data User
							</ResponsiveNavLink>
						</div>
					)}

					{usertype === "admin" && (
						<div className="pt-2 pb-3 space-y-1">
							<ResponsiveNavLink
								href={route("registration-requests.index")}
								active={route().current("registration-requests.index")}>
								Permohonan Daftar
							</ResponsiveNavLink>
						</div>
					)}

					{usertype === "admin" && (
						<div className="pt-2 pb-3 space-y-1">
							<ResponsiveNavLink
								href={route("UserRekening.index")}
								active={route().current("UserRekening.index")}>
								User Control
							</ResponsiveNavLink>
						</div>
					)}

					<div className="pt-4 pb-1 border-t border-slate-200 dark:border-slate-600">
						<div className="px-4 flex justify-between">
							<div>
								<div className="font-medium text-base text-slate-800 dark:text-slate-200">
									{user.name}
								</div>
								<div className="font-medium text-sm text-slate-500">
									{user.email}
								</div>
							</div>
							<div>
								<div className="uppercase font-medium text-base text-slate-100 dark:text-slate-300 bg-cyan-600 dark:bg-cyan-800 p-2 rounded-md">
									{user.usertype}
								</div>
							</div>
						</div>

						<div className="mt-3 space-y-1">
							<ResponsiveNavLink href={route("profile.edit")}>
								Profile
							</ResponsiveNavLink>
							<ResponsiveNavLink
								method="post"
								href={route("logout")}
								as="button">
								Log Out
							</ResponsiveNavLink>
						</div>
					</div>
				</div>
			</nav>

			{header && (
				<header className="mt-[4rem] bg-white dark:bg-slate-800 transition-all shadow">
					<div className="flex justify-between max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
						<span>{header}</span>
						<span className="hidden lg:block">
							<span className="uppercase bg-slate-50 dark:bg-slate-800 text-black hover:text-white dark:text-white hover:bg-cyan-600 dark:hover:bg-cyan-800 transition-all font-bold p-2 rounded">
								{user.usertype}
							</span>
						</span>
					</div>
				</header>
			)}

			<main className="overflow-hidden">{children}</main>
		</div>
	);
}
