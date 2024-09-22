import React, { useState } from "react";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Head, Link, router, useForm, usePage } from "@inertiajs/react";
import Table from "@/Components/Table";
import MessageModal from "@/Components/MessageModal"; // Import modal
import PrimaryButton from "@/Components/PrimaryButton";
import Modal from "@/Components/Modal";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import InputError from "@/Components/InputError";
import SecondaryButton from "@/Components/SecondaryButton";
import DeleteConfirmationModal from "@/Components/DeleteConfirmationModal";
import DotsIcon from "@/icons/Dots";
import CrossIcon from "@/icons/Cross";

export default function UserControl({ users, attributes }) {
	const message = usePage().props;
	const UserId = usePage().props.auth.user.id;

	const DataUser = users.data.filter((user) => user.id !== UserId);
	const { data, setData, processing, errors, reset } = useForm({
		name: "",
		email: "",
		password: "",
		usertype: "",
	});

	const [action, setAction] = useState("");
	const [isOpen, setIsOpen] = useState(null);
	const [isModalOpen, setModalOpen] = useState(false);
	const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

	const ActionButton = {
		header: "Action",
		cell: (field) => (
			<td className="px-4 py-3 absolute z-10 top-[.5rem] left-[1rem]">
				<button
					onClick={() => handleButtonAction(field.id)}
					className="relative inline-flex items-center p-0.5 text-sm font-medium text-center text-slate-500 hover:text-slate-800 rounded-lg focus:outline-none dark:text-slate-400 dark:hover:text-slate-100"
					type="button">
					<DotsIcon />
					<div
						className={`${
							isOpen === field.id ? "block" : "hidden"
						} absolute left-[2rem] z-50 bg-white ring-2 rounded divide-y divide-slate-100 shadow dark:bg-slate-700 dark:divide-slate-600`}>
						<ul className="flex py-1 text-sm text-slate-700 dark:text-slate-200">
							<li>
								<Link
									onClick={() => handleButtonAction(field.id)}
									className="border-e-2 h-full block py-2 px-4 hover:bg-slate-100 dark:hover:bg-slate-600 dark:hover:text-white">
									<CrossIcon />
								</Link>
							</li>
							<li>
								<Link
									onClick={(e) => {
										e.preventDefault();
										setModalOpen(true);
										setAction("edit");
										setData(field);
									}}
									className="text-yellow-500 hover:text-yellow-600 dark:hover:text-yellow-600 border-e-2 h-full block py-2 px-4 hover:bg-yellow-100 dark:hover:bg-yellow-100 dark:hover:bg-opacity-90">
									Edit
								</Link>
							</li>
							<li>
								<Link
									onClick={(e) => {
										e.preventDefault();
										setIsDeleteModalOpen(true);
										setData(field);
									}}
									className="text-red-500 hover:text-red-600 h-full block py-2 px-4 hover:bg-red-100 dark:hover:bg-red-100 dark:hover:bg-opacity-90">
									Hapus
								</Link>
							</li>
						</ul>
					</div>
				</button>
			</td>
		),
	};

	const StoreSubmit = (e) => {
		e.preventDefault();
		router.post(route("UserRekening.store"), data, {
			onFinish: () => {
				setModalOpen(false);
				setData({});
				reset();
			},
		});
	};

	const UpdateSubmit = (e) => {
		e.preventDefault();
		router.put(route("UserRekening.update", data.id), data, {
			onFinish: () => {
				setModalOpen(false);
				setData({});
				reset();
			},
		});
	};

	const handleButtonAction = (id) => {
		setIsOpen(isOpen === id ? null : id);
	};

	const confirmDelete = () => {
		if (data) {
			router.delete(route("UserRekening.destroy", data.id));
		}
		setIsDeleteModalOpen(false);
		setData({});
	};

	const TopTable = () => (
		<PrimaryButton
			onClick={() => {
				setModalOpen(true);
				setAction("create");
			}}>
			Tambah User
		</PrimaryButton>
	);

	const cell = [ActionButton, ...attributes];

	return (
		<Authenticated
			header={
				<h2 className="font-semibold text-xl text-slate-800 dark:text-white leading-tight">
					User Control
				</h2>
			}>
			<Head title="User Control" />

			<MessageModal info={message.info} />

			<Modal show={isModalOpen}>
				<h1 className="dark:text-white lg:text-2xl mt-[2rem] text-center">
					{data ? `Edit User` : `Tambah User`}
				</h1>
				<form
					onSubmit={action === "create" ? StoreSubmit : UpdateSubmit}
					className="p-6">
					<div>
						<InputLabel
							className="font-extrabold"
							htmlFor="name"
							value="Name"
						/>

						<TextInput
							id="name"
							name="name"
							value={data.name}
							className="mt-1 block w-full bg-opacity-50 dark:bg-opacity-50"
							autoComplete="name"
							isFocused={true}
							onChange={(e) => setData("name", e.target.value)}
							required
						/>

						<InputError message={errors.name} className="mt-2" />
					</div>

					<div className="mt-4">
						<InputLabel
							className="font-extrabold"
							htmlFor="email"
							value="Email"
						/>

						<TextInput
							id="email"
							type="email"
							name="email"
							value={data.email}
							className="mt-1 block w-full bg-opacity-50 dark:bg-opacity-50"
							autoComplete="username"
							onChange={(e) => setData("email", e.target.value)}
							required
						/>

						<InputError message={errors.email} className="mt-2" />
					</div>

					<div className="mt-4">
						<InputLabel
							className="font-extrabold"
							htmlFor="password"
							value="Password"
						/>

						<TextInput
							id="password"
							type="password"
							name="password"
							value={data.password}
							className="mt-1 block w-full bg-opacity-50 dark:bg-opacity-50"
							autoComplete="new-password"
							onChange={(e) => setData("password", e.target.value)}
							required
						/>

						<InputError message={errors.password} className="mt-2" />
					</div>

					<div className="mt-4">
						<InputLabel
							className="font-extrabold"
							htmlFor="usertype"
							value="User Type"
						/>
						<select
							id="usertype"
							name="usertype"
							value={data.usertype}
							className="mt-1 block w-full rounded-md bg-white/50 dark:bg-slate-800/50 dark:text-white "
							onChange={(e) => setData("usertype", e.target.value)}
							required>
							<option value="">Select Role</option>
							<option value="admin">Admin</option>
							<option value="supervisor">Supervisor</option>
							<option value="user">User</option>
						</select>
						<InputError message={errors.usertype} className="mt-2" />
					</div>

					<div className="flex items-center justify-end mt-4">
						<SecondaryButton
							onClick={() => {
								setModalOpen(false);
								setData({});
							}}
							type="button"
							className="ms-4"
							disabled={processing}>
							Batal
						</SecondaryButton>
						<PrimaryButton className="ms-4" disabled={processing}>
							{action === "create" ? "Simpan" : "Ubah"}
						</PrimaryButton>
					</div>
				</form>
			</Modal>

			<div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
				<div className="sm:mt-6 bg-white dark:bg-slate-800 shadow-sm sm:rounded-lg">
					<Table
						data={DataUser}
						field={users}
						attributes={cell}
						TopTable={TopTable()}
					/>
				</div>
			</div>

			<DeleteConfirmationModal
				isOpen={isDeleteModalOpen}
				closeModal={() => {
					setIsDeleteModalOpen(false);
					setData({});
				}}
				onConfirm={confirmDelete}
				itemName={data?.name}
			/>
		</Authenticated>
	);
}
