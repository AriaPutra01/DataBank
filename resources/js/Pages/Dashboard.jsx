import MessageModal from "@/Components/MessageModal";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, usePage } from "@inertiajs/react";

export default function Dashboard({ totalRekening, totalActive }) {
    const { message } = usePage().props;
    return (
        <AuthenticatedLayout
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />

            <MessageModal error={message.error} />

            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div className="text-white grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-4 mt-4">
                    <div className="flex flex-row justify-between bg-blue-600 dark:bg-blue-800 p-6 mx-4 sm:mx-0 rounded-lg shadow-lg transition-all">
                        <h3 className="text-lg font-semibold bg-blue-700 px-2 shadow-md rounded-md">
                            Total Rekening
                        </h3>
                        <p className="text-2xl font-bold bg-blue-700 px-2 shadow-md rounded-md">
                            {totalRekening}
                        </p>
                    </div>
                    <div className="flex flex-row justify-between bg-yellow-600 dark:bg-yellow-800 p-6 mx-4 sm:mx-0 rounded-lg shadow-lg transition-all">
                        <h3 className="text-lg font-semibold bg-yellow-700 px-2 shadow-md rounded-md">
                            Total Status Aktif
                        </h3>
                        <p className="text-2xl font-bold bg-yellow-700 px-2 shadow-md rounded-md">
                            {totalActive}
                        </p>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
