import { useState } from "react";
import { Link, usePage } from "@inertiajs/react";
import ApplicationLogo from "@/Components/ApplicationLogo";
import Dropdown from "@/Components/Dropdown";
import NavLink from "@/Components/NavLink";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink";
import DarkModeToggle from "@/Components/DarkModeToggle";

export default function Authenticated({ header, children }) {
	const user = usePage().props.auth.user;
	const usertype = usePage().props.auth.user.usertype;
	const [showingNavigationDropdown, setShowingNavigationDropdown] =
		useState(false);

	return (
		<div className='min-h-screen bg-gray-100 dark:bg-gray-900 transition-all'>
			<nav className='fixed top-0 left-0 right-0 z-20 bg-white dark:bg-gray-800 border-b border-gray-100 dark:border-gray-700 transition-all'>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='flex justify-between h-16'>
						<div className='flex'>
							<div className='shrink-0 flex items-center'>
								<Link href='/'>
									<ApplicationLogo className='block h-9 w-auto fill-current text-green-600' />
								</Link>
							</div>

							<div className='hidden space-x-8 lg:-my-px lg:ms-10 lg:flex'>
								<NavLink
									href={route("dashboard")}
									active={route().current("dashboard")}>
									Dashboard
								</NavLink>
							</div>

							<div className='hidden space-x-8 lg:-my-px lg:ms-10 lg:flex'>
								<NavLink
									href={route("rekening.index")}
									active={route().current("rekening.index")}>
									Data Rekening
								</NavLink>
							</div>

							{usertype !== "user" && (
								<div className='hidden space-x-8 lg:-my-px lg:ms-10 lg:flex'>
									<NavLink
										href={route("rekening.create")}
										active={route().current("rekening.create")}>
										Tambah Data User
									</NavLink>
								</div>
							)}

							{usertype === "admin" && (
								<div className='hidden space-x-8 lg:-my-px lg:ms-10 lg:flex'>
									<NavLink
										href={route("registration-requests.index")}
										active={route().current("registration-requests.index")}>
										Permohonan Daftar
									</NavLink>
								</div>
							)}

							{usertype === "admin" && (
								<div className='hidden space-x-8 lg:-my-px lg:ms-10 lg:flex'>
									<NavLink
										href={route("UserRekening.index")}
										active={route().current("UserRekening.index")}>
										User Control
									</NavLink>
								</div>
							)}
						</div>

						<div className='hidden lg:flex lg:items-center lg:ms-6'>
							<DarkModeToggle />
							<div className='ms-3 relative'>
								<Dropdown>
									<Dropdown.Trigger>
										<span className='inline-flex rounded-md'>
											<button
												type='button'
												className='inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 dark:text-gray-400 bg-white dark:bg-gray-800 hover:text-gray-700 dark:hover:text-gray-300 focus:outline-none transition ease-in-out duration-150'>
												{user.name}

												<svg
													className='ms-2 -me-0.5 h-4 w-4'
													xmlns='http://www.w3.org/2000/svg'
													viewBox='0 0 20 20'
													fill='currentColor'>
													<path
														fillRule='evenodd'
														d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
														clipRule='evenodd'
													/>
												</svg>
											</button>
										</span>
									</Dropdown.Trigger>

									<Dropdown.Content>
										<Dropdown.Link href={route("profile.edit")}>
											Profile
										</Dropdown.Link>
										<Dropdown.Link
											href={route("logout")}
											method='post'
											as='button'>
											Log Out
										</Dropdown.Link>
									</Dropdown.Content>
								</Dropdown>
							</div>
						</div>

						{/* Hamburger button */}
						<div className='-me-2 flex items-center lg:hidden'>
							<div className='pt-2 pb-3 px-4'>
								<DarkModeToggle />
							</div>
							<button
								onClick={() =>
									setShowingNavigationDropdown(
										(previousState) => !previousState
									)
								}
								className='inline-flex items-center justify-center p-2 rounded-md text-gray-400 dark:text-gray-500 hover:text-gray-500 dark:hover:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-900 focus:outline-none focus:bg-gray-100 dark:focus:bg-gray-900 focus:text-gray-500 dark:focus:text-gray-400 transition duration-150 ease-in-out'>
								<svg
									className='h-6 w-6'
									stroke='currentColor'
									fill='none'
									viewBox='0 0 24 24'>
									<path
										className={
											!showingNavigationDropdown ? "inline-flex" : "hidden"
										}
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth='2'
										d='M4 6h16M4 12h16M4 18h16'
									/>
									<path
										className={
											showingNavigationDropdown ? "inline-flex" : "hidden"
										}
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth='2'
										d='M6 18L18 6M6 6l12 12'
									/>
								</svg>
							</button>
						</div>
					</div>
				</div>

				<div
					className={
						(showingNavigationDropdown ? "block" : "hidden") +
						" lg:hidden border-b-2 bg-white dark:bg-gray-800"
					}>
					<div className='pt-2 pb-3 space-y-1'>
						<ResponsiveNavLink
							href={route("dashboard")}
							active={route().current("dashboard")}>
							Dashboard
						</ResponsiveNavLink>
					</div>

					<div className='pt-2 pb-3 space-y-1'>
						<ResponsiveNavLink
							href={route("rekening.index")}
							active={route().current("rekening.index")}>
							Data Rekening
						</ResponsiveNavLink>
					</div>

					{usertype !== "user" && (
						<div className='pt-2 pb-3 space-y-1'>
							<ResponsiveNavLink
								href={route("rekening.create")}
								active={route().current("rekening.create")}>
								Tambah Data User
							</ResponsiveNavLink>
						</div>
					)}

					{usertype === "admin" && (
						<div className='pt-2 pb-3 space-y-1'>
							<ResponsiveNavLink
								href={route("registration-requests.index")}
								active={route().current("registration-requests.index")}>
								Permohonan Daftar
							</ResponsiveNavLink>
						</div>
					)}

					{usertype === "admin" && (
						<div className='pt-2 pb-3 space-y-1'>
							<ResponsiveNavLink
								href={route("UserRekening.index")}
								active={route().current("UserRekening.index")}>
								User Control
							</ResponsiveNavLink>
						</div>
					)}

					<div className='pt-4 pb-1 border-t border-gray-200 dark:border-gray-600'>
						<div className='px-4 flex justify-between'>
							<div>
								<div className='font-medium text-base text-gray-800 dark:text-gray-200'>
									{user.name}
								</div>
								<div className='font-medium text-sm text-gray-500'>
									{user.email}
								</div>
							</div>
							<div>
								<div className='uppercase font-medium text-base text-gray-100 dark:text-gray-300 bg-cyan-600 dark:bg-cyan-800 p-2 rounded-md'>
									{user.usertype}
								</div>
							</div>
						</div>

						<div className='mt-3 space-y-1'>
							<ResponsiveNavLink href={route("profile.edit")}>
								Profile
							</ResponsiveNavLink>
							<ResponsiveNavLink
								method='post'
								href={route("logout")}
								as='button'>
								Log Out
							</ResponsiveNavLink>
						</div>
					</div>
				</div>
			</nav>

			{header && (
				<header className='mt-[4rem] bg-white dark:bg-gray-800 transition-all shadow'>
					<div className='flex justify-between max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8'>
						<span>{header}</span>
						<span className='hidden lg:block'>
							<span className='uppercase bg-gray-50 dark:bg-gray-800 text-black hover:text-white dark:text-white hover:bg-cyan-600 dark:hover:bg-cyan-800 transition-all font-bold p-2 rounded'>
								{user.usertype}
							</span>
						</span>
					</div>
				</header>
			)}

			<main className='overflow-hidden'>{children}</main>
		</div>
	);
}
