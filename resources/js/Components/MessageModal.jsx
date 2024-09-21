import React, { useEffect, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";

export default function MessageModal({ success, info, warning, error }) {
    const [isOpen, setIsOpen] = useState(false);
    useEffect(() => {
        if (success || info || warning || error) {
            setIsOpen(true);
        }
    }, [success || info || warning || error]);
    return (
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog
                as="div"
                className="relative z-10"
                onClose={() => setIsOpen(false)}
            >
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-200"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-black bg-opacity-25" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-y-auto">
                    <div className="relative flex min-h-full items-center justify-center p-4 text-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-200"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-100"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <Dialog.Panel className="w-full flex flex-col items-center max-w-lg transform overflow-hidden rounded-2xl bg-white dark:bg-slate-800 p-6 text-left align-middle shadow-xl transition-all">
                                {success && (
                                    <Dialog.Title className="text-7xl my-[1rem] size-[6rem] p-2 rounded-full text-green-600 bg-green-600/20 flex justify-center items-center">
                                        ✓
                                    </Dialog.Title>
                                )}

                                {info && (
                                    <Dialog.Title className="text-7xl my-[1rem] size-[6rem] p-2 rounded-full text-cyan-600 bg-cyan-600/20 flex justify-center items-center">
                                        ?
                                    </Dialog.Title>
                                )}

                                {warning && (
                                    <Dialog.Title className="text-7xl my-[1rem] size-[6rem] p-2 rounded-full text-yellow-600 bg-yellow-600/20 flex justify-center items-center">
                                        !
                                    </Dialog.Title>
                                )}

                                {error && (
                                    <Dialog.Title className="text-7xl my-[1rem] size-[6rem] p-2 rounded-full text-red-600 bg-red-600/20 flex justify-center items-center">
                                        !!
                                    </Dialog.Title>
                                )}

                                <p className="mt-[2rem] text-sm text-slate-500 dark:text-slate-400">
                                    {success || info || warning || error}
                                </p>

                                <div className="sm:absolute mt-[1rem] bottom-[1rem] right-[1rem]">
                                    <button
                                        type="button"
                                        className="rounded-md border border-transparent bg-blue-100 px-4 py-1 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        Tutup
                                    </button>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    );
}
