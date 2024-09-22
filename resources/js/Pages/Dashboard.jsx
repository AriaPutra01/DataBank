import MessageModal from "@/Components/MessageModal";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, usePage } from "@inertiajs/react";

export default function Dashboard({ bank }) {
	const { message } = usePage().props;

	function TotalBank(data, bank) {
		const filteredData = data.filter((transaction) => {
			return transaction.bank === bank;
		});
		return filteredData.length;
	}

	function TotalStatusBank(data, bank, status) {
		const filteredData = data.filter((transaction) => {
			return transaction.bank === bank && transaction.status === status;
		});
		return filteredData.length;
	}

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
				<div className="text-white grid grid-cols-1 gap-6 sm:gap-4 my-4">
					<div className="flex flex-row justify-between bg-slate-600 dark:bg-slate-800 p-6 mx-4 sm:mx-0 rounded-lg shadow-lg transition-all">
						<h3 className="text-lg font-semibold bg-slate-700 px-2 shadow-md rounded-md">
							Total Rekening
						</h3>
						<p className="text-2xl font-bold bg-slate-700 px-2 shadow-md rounded-md">
							{bank.length}
						</p>
					</div>
				</div>
				<div className="grid grid-cols-1 gap-6 mb-[1rem]">
					<div className="mx-[1rem] sm:ms-0 text-white grid grid-cols-1 sm:grid-cols-4 gap-6 sm:gap-4">
						<div class="max-w-sm w-full rounded-lg shadow bg-[blue] dark:bg-[darkblue] p-4 md:p-6">
							<div class="flex justify-between border-gray-200 border-b dark:border-gray-400 pb-3">
								<dl>
									<dt class="text-base font-normal pb-1">Bank BCA</dt>
									<dd class="leading-none text-3xl font-bold">
										{TotalBank(bank, "BCA")}
									</dd>
								</dl>
							</div>
							<div class="grid grid-cols-2 py-3">
								<dl>
									<dt class="text-base font-normal text-white dark:text-gray-400 pb-1">
										Active
									</dt>
									<dd class="leading-none text-xl font-bold text-[lightblue] dark:text-[blue]">
										{TotalStatusBank(bank, "BCA", "Active")}
									</dd>
								</dl>
								<dl>
									<dt class="text-base font-normal text-white dark:text-gray-400 pb-1">
										Stock
									</dt>
									<dd class="leading-none text-xl font-bold text-[lightblue] dark:text-[blue]">
										{TotalStatusBank(bank, "BCA", "Stock")}
									</dd>
								</dl>
								<dl>
									<dt class="text-base font-normal text-white dark:text-gray-400 pb-1">
										Sakit
									</dt>
									<dd class="leading-none text-xl font-bold text-[lightblue] dark:text-[blue]">
										{TotalStatusBank(bank, "BCA", "Sakit")}
									</dd>
								</dl>
								<dl>
									<dt class="text-base font-normal text-white dark:text-gray-400 pb-1">
										Close
									</dt>
									<dd class="leading-none text-xl font-bold text-[lightblue] dark:text-[blue]">
										{TotalStatusBank(bank, "BCA", "Closed")}
									</dd>
								</dl>
							</div>
						</div>
						<div class="max-w-sm w-full rounded-lg shadow bg-[darkcyan] dark:bg-cyan-800 p-4 md:p-6">
							<div class="flex justify-between border-gray-200 border-b dark:border-gray-400 pb-3">
								<dl>
									<dt class="text-base font-normal pb-1">Bank Mandiri</dt>
									<dd class="leading-none text-3xl font-bold">
										{TotalBank(bank, "Mandiri")}
									</dd>
								</dl>
							</div>
							<div class="grid grid-cols-2 py-3">
								<dl>
									<dt class="text-base font-normal text-white dark:text-gray-400 pb-1">
										Active
									</dt>
									<dd class="leading-none text-xl font-bold text-[lightyellow] dark:text-[yellow]">
										{TotalStatusBank(bank, "Mandiri", "Active")}
									</dd>
								</dl>
								<dl>
									<dt class="text-base font-normal text-white dark:text-gray-400 pb-1">
										Stock
									</dt>
									<dd class="leading-none text-xl font-bold text-[lightyellow] dark:text-[yellow]">
										{TotalStatusBank(bank, "Mandiri", "Stock")}
									</dd>
								</dl>
								<dl>
									<dt class="text-base font-normal text-white dark:text-gray-400 pb-1">
										Sakit
									</dt>
									<dd class="leading-none text-xl font-bold text-[lightyellow] dark:text-[yellow]">
										{TotalStatusBank(bank, "Mandiri", "Sakit")}
									</dd>
								</dl>
								<dl>
									<dt class="text-base font-normal text-white dark:text-gray-400 pb-1">
										Close
									</dt>
									<dd class="leading-none text-xl font-bold text-[lightyellow] dark:text-[yellow]">
										{TotalStatusBank(bank, "Mandiri", "Closed")}
									</dd>
								</dl>
							</div>
						</div>
						<div class="max-w-sm w-full rounded-lg shadow bg-[orange] dark:bg-orange-600 p-4 md:p-6">
							<div class="flex justify-between border-gray-200 border-b dark:border-gray-100 pb-3">
								<dl>
									<dt class="text-base font-normal pb-1">Bank BNI</dt>
									<dd class="leading-none text-3xl font-bold">
										{TotalBank(bank, "BNI")}
									</dd>
								</dl>
							</div>
							<div class="grid grid-cols-2 py-3">
								<dl>
									<dt class="text-base font-normal text-white dark:text-gray-300 pb-1">
										Active
									</dt>
									<dd class="leading-none text-xl font-bold text-white dark:text-slate-100">
										{TotalStatusBank(bank, "BNI", "Active")}
									</dd>
								</dl>
								<dl>
									<dt class="text-base font-normal text-white dark:text-gray-300 pb-1">
										Stock
									</dt>
									<dd class="leading-none text-xl font-bold text-white dark:text-slate-100">
										{TotalStatusBank(bank, "BNI", "Stock")}
									</dd>
								</dl>
								<dl>
									<dt class="text-base font-normal text-white dark:text-gray-300 pb-1">
										Sakit
									</dt>
									<dd class="leading-none text-xl font-bold text-white dark:text-slate-100">
										{TotalStatusBank(bank, "BNI", "Sakit")}
									</dd>
								</dl>
								<dl>
									<dt class="text-base font-normal text-white dark:text-gray-300 pb-1">
										Close
									</dt>
									<dd class="leading-none text-xl font-bold text-white dark:text-slate-100">
										{TotalStatusBank(bank, "BNI", "Closed")}
									</dd>
								</dl>
							</div>
						</div>
						<div class="max-w-sm w-full rounded-lg shadow bg-white dark:bg-slate-200 p-4 md:p-6">
							<div class="flex justify-between border-gray-200 border-b dark:border-gray-400 pb-3">
								<dl>
									<dt class="text-base font-normal pb-1 text-[blue] dark:text-blue-800">
										Bank BRI
									</dt>
									<dd class="leading-none text-3xl font-bold text-[blue] dark:text-blue-800">
										{TotalBank(bank, "BRI")}
									</dd>
								</dl>
							</div>
							<div class="grid grid-cols-2 py-3">
								<dl>
									<dt class="text-base font-normal text-gray-500 dark:text-gray-400 pb-1">
										Active
									</dt>
									<dd class="leading-none text-xl font-bold text-[blue] dark:text-[darkblue]">
										{TotalStatusBank(bank, "BRI", "Active")}
									</dd>
								</dl>
								<dl>
									<dt class="text-base font-normal text-gray-500 dark:text-gray-400 pb-1">
										Stock
									</dt>
									<dd class="leading-none text-xl font-bold text-[blue] dark:text-[darkblue]">
										{TotalStatusBank(bank, "BRI", "Stock")}
									</dd>
								</dl>
								<dl>
									<dt class="text-base font-normal text-gray-500 dark:text-gray-400 pb-1">
										Sakit
									</dt>
									<dd class="leading-none text-xl font-bold text-[blue] dark:text-[darkblue]">
										{TotalStatusBank(bank, "BRI", "Sakit")}
									</dd>
								</dl>
								<dl>
									<dt class="text-base font-normal text-gray-500 dark:text-gray-400 pb-1">
										Close
									</dt>
									<dd class="leading-none text-xl font-bold text-[blue] dark:text-[darkblue]">
										{TotalStatusBank(bank, "BRI", "Closed")}
									</dd>
								</dl>
							</div>
						</div>
					</div>
					<div className="mx-[1rem] sm:ms-0 text-white grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-4">
						<div class="max-w-sm w-full rounded-lg shadow bg-[red] dark:bg-[darkred] p-4 md:p-6">
							<div class="flex justify-between border-gray-200 border-b dark:border-gray-400 pb-3">
								<dl>
									<dt class="text-base font-normal pb-1">Bank CIMB</dt>
									<dd class="leading-none text-3xl font-bold">
										{TotalBank(bank, "CIMB")}
									</dd>
								</dl>
							</div>
							<div class="grid grid-cols-2 py-3">
								<dl>
									<dt class="text-base font-normal text-white dark:text-gray-400 pb-1">
										Active
									</dt>
									<dd class="leading-none text-xl font-bold text-[pink] dark:text-[red]">
										{TotalStatusBank(bank, "CIMB", "Active")}
									</dd>
								</dl>
								<dl>
									<dt class="text-base font-normal text-white dark:text-gray-400 pb-1">
										Stock
									</dt>
									<dd class="leading-none text-xl font-bold text-[pink] dark:text-[red]">
										{TotalStatusBank(bank, "CIMB", "Stock")}
									</dd>
								</dl>
								<dl>
									<dt class="text-base font-normal text-white dark:text-gray-400 pb-1">
										Sakit
									</dt>
									<dd class="leading-none text-xl font-bold text-[pink] dark:text-[red]">
										{TotalStatusBank(bank, "CIMB", "Sakit")}
									</dd>
								</dl>
								<dl>
									<dt class="text-base font-normal text-white dark:text-gray-400 pb-1">
										Close
									</dt>
									<dd class="leading-none text-xl font-bold text-[pink] dark:text-[red]">
										{TotalStatusBank(bank, "CIMB", "Closed")}
									</dd>
								</dl>
							</div>
						</div>
						<div class="max-w-sm w-full rounded-lg shadow bg-yellow-300 dark:bg-yellow-700 p-4 md:p-6">
							<div class="flex justify-between border-gray-200 border-b dark:border-gray-400 pb-3">
								<dl>
									<dt class="text-base font-normal pb-1">Bank JAGO</dt>
									<dd class="leading-none text-3xl font-bold">
										{TotalBank(bank, "JAGO")}
									</dd>
								</dl>
							</div>
							<div class="grid grid-cols-2 py-3">
								<dl>
									<dt class="text-base font-normal text-white dark:text-gray-400 pb-1">
										Active
									</dt>
									<dd class="leading-none text-xl font-bold text-white dark:text-gray-100">
										{TotalStatusBank(bank, "JAGO", "Active")}
									</dd>
								</dl>
								<dl>
									<dt class="text-base font-normal text-white dark:text-gray-400 pb-1">
										Stock
									</dt>
									<dd class="leading-none text-xl font-bold text-white dark:text-gray-100">
										{TotalStatusBank(bank, "JAGO", "Stock")}
									</dd>
								</dl>
								<dl>
									<dt class="text-base font-normal text-white dark:text-gray-400 pb-1">
										Sakit
									</dt>
									<dd class="leading-none text-xl font-bold text-white dark:text-gray-100">
										{TotalStatusBank(bank, "JAGO", "Sakit")}
									</dd>
								</dl>
								<dl>
									<dt class="text-base font-normal text-white dark:text-gray-400 pb-1">
										Close
									</dt>
									<dd class="leading-none text-xl font-bold text-white dark:text-gray-100">
										{TotalStatusBank(bank, "JAGO", "Closed")}
									</dd>
								</dl>
							</div>
						</div>
						<div class="max-w-sm w-full rounded-lg shadow bg-sky-600 dark:bg-sky-800 p-4 md:p-6">
							<div class="flex justify-between border-gray-200 border-b dark:border-gray-100 pb-3">
								<dl>
									<dt class="text-base font-normal pb-1">Bank Jenius</dt>
									<dd class="leading-none text-3xl font-bold">
										{TotalBank(bank, "Jenius")}
									</dd>
								</dl>
							</div>
							<div class="grid grid-cols-2 py-3">
								<dl>
									<dt class="text-base font-normal text-white dark:text-gray-300 pb-1">
										Active
									</dt>
									<dd class="leading-none text-xl font-bold text-white dark:text-slate-100">
										{TotalStatusBank(bank, "Jenius", "Active")}
									</dd>
								</dl>
								<dl>
									<dt class="text-base font-normal text-white dark:text-gray-300 pb-1">
										Stock
									</dt>
									<dd class="leading-none text-xl font-bold text-white dark:text-slate-100">
										{TotalStatusBank(bank, "Jenius", "Stock")}
									</dd>
								</dl>
								<dl>
									<dt class="text-base font-normal text-white dark:text-gray-300 pb-1">
										Sakit
									</dt>
									<dd class="leading-none text-xl font-bold text-white dark:text-slate-100">
										{TotalStatusBank(bank, "Jenius", "Sakit")}
									</dd>
								</dl>
								<dl>
									<dt class="text-base font-normal text-white dark:text-gray-300 pb-1">
										Close
									</dt>
									<dd class="leading-none text-xl font-bold text-white dark:text-slate-100">
										{TotalStatusBank(bank, "Jenius", "Closed")}
									</dd>
								</dl>
							</div>
						</div>
					</div>
				</div>
			</div>
		</AuthenticatedLayout>
	);
}
