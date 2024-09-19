import ApplicationLogo from "@/Components/ApplicationLogo";
import DarkModeToggle from "@/Components/DarkModeToggle";
import { Link } from "@inertiajs/react";

export default function Guest({ children }) {
    return (
        <div className="relative min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100 dark:bg-gray-900">
            <div
                className="w-screen h-screen bg-center bg-cover"
                style={{ backgroundImage: "url('/image/kurp2.jpg')" }}
            />

            <DarkModeToggle className="absolute z-10 top-[2rem] right-[2rem]" />

            <div className="dark:bg-gray-800/50 absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center">
                <div className="w-full sm:max-w-md mt-6 px-6 py-4 bg-gray-200/50 dark:bg-sky-950/50 shadow-md overflow-hidden sm:rounded-lg transition-all">
                    <ApplicationLogo className="w-full h-20 fill-current text-green-600 " />
                    {children}
                </div>
            </div>
        </div>
    );
}
