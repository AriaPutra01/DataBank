import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, usePage, Link } from "@inertiajs/react";

export default function RegistrationRequests({ requests }) {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="font-semibold text-xl text-slate-800 dark:text-white leading-tight">
                    Registration Requests
                </h2>
            }
        >
            <Head title="Registration Requests" />

            <div className="py-12">
                <div className="lg:max-w-[75vw] mx-auto sm:px-6 lg:px-8">
                    <div className="p-6 bg-white dark:bg-slate-800 overflow-hidden shadow-sm sm:rounded-lg transition-all">
                        <h1 className="sm:text-2xl font-bold mb-8 p-2 text-center dark:text-white bg-slate-100 dark:bg-slate-700 w-full rounded-md transition-all">
                            List Permohonan Pendaftaran Akun
                        </h1>
                        <table className="border-b-2 border-slate-200 dark:border-slate-600 w-full text-slate-800 dark:text-white transition-all">
                            {requests.map((request) => (
                                <tr key={request.id}>
                                    <td>
                                        <ul>
                                            <li>Name: {request.name}</li>
                                            <li>Email: {request.email}</li>
                                            <li>
                                                User Type: {request.usertype}
                                            </li>
                                        </ul>
                                    </td>
                                    <td className="mt-2 flex flex-row justify-center items-center gap-2">
                                        <Link
                                            href={route(
                                                "registration-requests.approve",
                                                request.id
                                            )}
                                            method="post"
                                            as="button"
                                            className="rounded-lg w-full bg-green-600 hover:bg-green-700 text-white px-4 py-2 transition-all"
                                        >
                                            Daftarkan
                                        </Link>
                                        <Link
                                            href={route(
                                                "registration-requests.reject",
                                                request.id
                                            )}
                                            method="post"
                                            as="button"
                                            className="rounded-lg w-full bg-red-600 hover:bg-red-700 text-white px-4 py-2 transition-all"
                                        >
                                            Tolak
                                        </Link>
                                    </td>
                                </tr>
                            ))}
                        </table>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
