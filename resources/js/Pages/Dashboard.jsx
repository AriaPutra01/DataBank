import MessageModal from "@/Components/MessageModal";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, usePage } from "@inertiajs/react";

export default function Dashboard({ totalRekening, totalActive, bank }) {
	const { message } = usePage().props;
	const bca = bank.BCA.length;
	const mandiri = bank.Mandiri.length;
	const bni = bank.BNI.length;
	const bri = bank.BRI.length;
	const cimb = bank.CIMB.length;
	const jago = bank.JAGO.length;
	const jenius = bank.Jenius.length;

	return (
		<AuthenticatedLayout
			header={
				<h2 className="font-semibold text-xl text-white dark:text-white leading-tight">
					Dashboard
				</h2>
			}>
			<Head title="Dashboard" />

			<MessageModal error={message.error} />

			<div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
				<div className="text-white grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-4 mt-4">
					<div className="flex flex-row justify-between bg-slate-600 dark:bg-slate-800 p-6 mx-4 sm:mx-0 rounded-lg shadow-lg transition-all">
						<h3 className="text-lg font-semibold bg-slate-700 px-2 shadow-md rounded-md">
							Total Rekening
						</h3>
						<p className="text-2xl font-bold bg-slate-700 px-2 shadow-md rounded-md">
							{totalRekening}
						</p>
					</div>
					<div className="flex flex-row justify-between bg-green-600 dark:bg-green-800 p-6 mx-4 sm:mx-0 rounded-lg shadow-lg transition-all">
						<h3 className="text-lg font-semibold bg-green-700 px-2 shadow-md rounded-md">
							Total Status Aktif
						</h3>
						<p className="text-2xl font-bold bg-green-700 px-2 shadow-md rounded-md">
							{totalActive}
						</p>
					</div>
				</div>
				<div className="text-white grid grid-cols-1 sm:grid-cols-4 gap-6 sm:gap-4 mt-4">
					<div className="flex flex-row justify-between bg-blue-700 dark:bg-blue-900 p-6 mx-4 sm:mx-0 rounded-lg shadow-lg transition-all">
						<h3 className="text-lg font-semibold px-2 shadow-md rounded-md">
							Bank BCA
						</h3>
						<p className="text-2xl font-bold bg-blue-800 px-2 shadow-md rounded-md">
							{bca}
						</p>
					</div>
					<div className="flex flex-row justify-between bg-blue-600 dark:bg-blue-800 p-6 mx-4 sm:mx-0 rounded-lg shadow-lg transition-all">
						<h3 className="text-lg font-semibold px-2 shadow-md rounded-md">
							Bank Mandiri
						</h3>
						<p className="text-2xl font-bold bg-yellow-700 px-2 shadow-md rounded-md">
							{mandiri}
						</p>
					</div>
					<div className="flex flex-row justify-between bg-orange-500 dark:bg-orange-700 p-6 mx-4 sm:mx-0 rounded-lg shadow-lg transition-all">
						<h3 className="text-lg font-semibold bg-orange-600 px-2 shadow-md rounded-md">
							Bank BNI
						</h3>
						<p className="text-2xl font-bold bg-orange-600 px-2 shadow-md rounded-md">
							{bni}
						</p>
					</div>
					<div className="flex flex-row justify-between  bg-white dark:bg-white p-6 mx-4 sm:mx-0 rounded-lg shadow-lg transition-all">
						<h3 className="text-lg font-semibold text-[blue] px-2 shadow-md rounded-md">
							Bank BRI
						</h3>
						<p className="text-2xl font-bold text-white bg-blue-700 px-2 shadow-md rounded-md">
							{bri}
						</p>
					</div>
				</div>
				<div className="text-white grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-4 mt-4">
					<div className="flex flex-row justify-between bg-red-600 dark:bg-red-800 p-6 mx-4 sm:mx-0 rounded-lg shadow-lg transition-all">
						<h3 className="text-lg font-semibold bg-red-700 px-2 shadow-md rounded-md">
							Bank CIMB
						</h3>
						<p className="text-2xl font-bold bg-red-700 px-2 shadow-md rounded-md">
							{cimb}
						</p>
					</div>
					<div className="flex flex-row justify-between bg-yellow-500 dark:bg-yellow-700 p-6 mx-4 sm:mx-0 rounded-lg shadow-lg transition-all">
						<h3 className="text-lg font-semibold bg-yellow-600 px-2 shadow-md rounded-md">
							Bank JAGO
						</h3>
						<p className="text-2xl font-bold bg-yellow-600 px-2 shadow-md rounded-md">
							{jago}
						</p>
					</div>
					<div className="flex flex-row justify-between bg-sky-600 dark:bg-sky-800 p-6 mx-4 sm:mx-0 rounded-lg shadow-lg transition-all">
						<h3 className="text-lg font-semibold bg-sky-700 px-2 shadow-md rounded-md">
							Bank Jenius
						</h3>
						<p className="text-2xl font-bold bg-sky-700 px-2 shadow-md rounded-md">
							{jenius}
						</p>
					</div>
				</div>
			</div>
		</AuthenticatedLayout>
	);
}
