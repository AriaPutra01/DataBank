import React, { useState } from "react";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Head, Link, router, useForm, usePage } from "@inertiajs/react";
import Table from "@/Components/Table";
import MessageModal from "@/Components/MessageModal"; // Import modal
import DeleteConfirmationModal from "@/Components/DeleteConfirmationModal";

export default function DataRekening({ rekenings, attributes }) {
	const { data, setData } = useForm();
	const message = usePage().props;
	const usertype = usePage().props.auth.user.usertype;
	const [isOpen, setIsOpen] = useState(null);
	const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

	const combinedAttributes = [
		...attributes.DataRekening,
		...attributes.MyBCA,
		...attributes.Bisnis,
	];

	const ActionButton = {
		header: "Action",
		cell: (field) => (
			<td className='px-4 py-3'>
				<button
					onClick={() => handleButtonAction(field.id)}
					className='relative inline-flex items-center p-0.5 text-sm font-medium text-center text-gray-500 hover:text-gray-800 rounded-lg focus:outline-none dark:text-gray-400 dark:hover:text-gray-100'
					type='button'>
					<svg
						className='w-5 h-5'
						aria-hidden='true'
						fill='currentColor'
						viewBox='0 0 20 20'
						xmlns='http://www.w3.org/2000/svg'>
						<path d='M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z' />
					</svg>
					<div
						className={`${
							isOpen === field.id ? "block" : "hidden"
						} absolute left-[2rem] z-50 bg-white ring-2 rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600`}>
						<ul className='flex py-1 text-sm text-gray-700 dark:text-gray-200'>
							<li>
								<Link
									onClick={() => handleButtonAction(field.id)}
									className='border-e-2 h-full block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'>
									<svg
										className='h-6 w-6'
										stroke='currentColor'
										fill='none'
										viewBox='0 0 24 24'>
										<path
											className='inline-flex'
											strokeLinecap='round'
											strokeLinejoin='round'
											strokeWidth='2'
											d='M6 18L18 6M6 6l12 12'
										/>
									</svg>
								</Link>
							</li>
							<li>
								<Link
									href={`/rekening/${field.id}`}
									className='text-blue-500 hover:text-blue-600 dark:hover:text-blue-600 border-e-2 h-full block py-2 px-4 hover:bg-blue-100 dark:hover:bg-blue-100 dark:hover:bg-opacity-90'>
									Detail
								</Link>
							</li>
							<li>
								<Link
									href={`/rekening/${field.id}/edit`}
									className='text-yellow-500 hover:text-yellow-600 dark:hover:text-yellow-600 border-e-2 h-full block py-2 px-4 hover:bg-yellow-100 dark:hover:bg-yellow-100 dark:hover:bg-opacity-90'>
									Edit
								</Link>
							</li>
							{usertype === "admin" && (
								<li>
									<Link
										onClick={(e) => {
											e.preventDefault();
											setIsDeleteModalOpen(true);
											setData(field);
										}}
										className='text-red-500 hover:text-red-600 h-full block py-2 px-4 hover:bg-red-100 dark:hover:bg-red-100 dark:hover:bg-opacity-90'>
										Hapus
									</Link>
								</li>
							)}
						</ul>
					</div>
				</button>
			</td>
		),
	};

	const cell = [ActionButton, ...combinedAttributes];

	const handleButtonAction = (id) => {
		setIsOpen(isOpen === id ? null : id);
	};

	const confirmDelete = () => {
		if (data) {
			router.delete(route("rekening.destroy", data.id));
		}
		setIsDeleteModalOpen(false);
	};

	const filterCategory = combinedAttributes
		.filter((item) => item.data === "bank")
		.map((item) => item.options)
		.flat();

	return (
		<Authenticated
			header={
				<h2 className='font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight'>
					Data Rekening
				</h2>
			}>
			<Head title='Data Rekening' />

			<MessageModal info={message.info} />

			<DeleteConfirmationModal
				isOpen={isDeleteModalOpen}
				closeModal={() => {
					setIsDeleteModalOpen(false);
					setData({});
				}}
				onConfirm={confirmDelete}
				itemName={data?.nama}
			/>

			<div className='max-w-7xl mx-auto sm:px-6 lg:px-8 '>
				<div className='sm:mt-6 bg-white dark:bg-gray-800 shadow-sm sm:rounded-lg'>
					<Table
						data={rekenings.data}
						field={rekenings}
						attributes={usertype !== "user" ? cell : combinedAttributes}
						filterCategory={filterCategory}
					/>
				</div>
			</div>
		</Authenticated>
	);
}
