import { useEffect, useState } from "react";
import Checkbox from "@/Components/Checkbox";
import GuestLayout from "@/Layouts/GuestLayout";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Head, Link, useForm, usePage } from "@inertiajs/react";
import SecondaryButton from "@/Components/SecondaryButton";

export default function Login({ status: initialStatus, canResetPassword }) {
    const [localStatus, setLocalStatus] = useState(initialStatus);
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
        remember: false,
    });
    
    const [showPendingModal, setShowPendingModal] = useState(false);

    useEffect(() => {
        if (initialStatus === "pending_registration") {
            setShowPendingModal(true);
            setLocalStatus("pending_registration");
        }
    }, [initialStatus]);

    const onCloseModal = () => {
        // setShowPendingModal(false);
        // setLocalStatus(null);
        // reset("password");
        window.location.href = "/";
    };

    const submit = (e) => {
        e.preventDefault();
        post(route("login"));
    };

    return (
        <GuestLayout>
            <Head title="Log in" />

            {localStatus && localStatus !== "pending_registration" && (
                <div className="mb-4 font-medium text-sm text-green-600">
                    {localStatus}
                </div>
            )}

            <form onSubmit={submit}>
                <div>
                    <InputLabel
                        className="font-extrabold text-black transition-all"
                        htmlFor="email"
                        value="Email"
                    />

                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full bg-opacity-50 dark:bg-opacity-50 transition-all"
                        autoComplete="username"
                        isFocused={true}
                        onChange={(e) => setData("email", e.target.value)}
                    />

                    <InputError message={errors.email} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel
                        className="font-extrabold text-black transition-all"
                        htmlFor="password"
                        value="Password"
                    />

                    <TextInput
                        id="password"
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-1 block w-full bg-opacity-50 dark:bg-opacity-50 transition-all"
                        autoComplete="current-password"
                        onChange={(e) => setData("password", e.target.value)}
                    />

                    <InputError message={errors.password} className="mt-2" />
                </div>

                <div className="block mt-4">
                    <label className="flex items-center">
                        <Checkbox
                            name="remember"
                            checked={data.remember}
                            onChange={(e) =>
                                setData("remember", e.target.checked)
                            }
                        />
                        <span className="ms-2 text-sm text-slate-800 dark:text-slate-400 transition-all">
                            Remember me
                        </span>
                    </label>
                </div>

                <div className="flex items-center justify-end mt-4">
                    {/* {canResetPassword && (
                        <Link
                            href={route("password.request")}
                            className="underline text-sm text-slate-800 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-slate-800"
                        >
                            Forgot your password?
                        </Link>
                    )} */}

                    <SecondaryButton
                        type="button"
                        className="ms-2"
                        disabled={processing}
                    >
                        <Link href="/register">Register</Link>
                    </SecondaryButton>

                    <PrimaryButton className="ms-1" disabled={processing}>
                        Log in
                    </PrimaryButton>
                </div>
            </form>

            {showPendingModal && (
                <div className="fixed inset-0 bg-slate-900 backdrop-blur-sm bg-opacity-50 overflow-y-auto h-full w-full">
                    <div className="relative top-1/2 -translate-y-1/2 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
                        <div className="mt-3 text-center">
                            <h3 className="text-lg leading-6 font-medium text-slate-900">
                                Pendaftaran Dalam Proses
                            </h3>
                            <div className="mt-2 px-7 py-3">
                                <p className="text-sm text-slate-500">
                                    Permintaan registrasi Anda sedang diproses.
                                    Silakan tunggu persetujuan admin.
                                </p>
                            </div>
                            <div className="items-center px-4 py-3">
                                <button
                                    id="ok-btn"
                                    className="px-4 py-2 bg-blue-500 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
                                    onClick={onCloseModal}
                                >
                                    OK
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </GuestLayout>
    );
}
