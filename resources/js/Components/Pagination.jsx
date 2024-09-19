import React from "react";
import { Link } from "@inertiajs/react";

export default function Pagination({ data }) {
    const links = data.links;
    return (
        <ul className="inline-flex items-stretch -space-x-px">
            {links.map((link, index) => (
                <li key={index}>
                    <Link
                        href={link.url}
                        className={`${
                            link.active &&
                            "text-indigo-100 dark:text-indigo-100 hover:text-indigo-50 bg-indigo-700 dark:bg-indigo-700 hover:bg-indigo-800 dark:hover:bg-indigo-500"
                        }
                        ${index === 0 && "rounded-l-md"}
                        ${index === links.length - 1 && "rounded-r-md"}
                        flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 border border-gray-300 hover:bg-gray-100 hover:text-gray-700 bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white transition-all`}
                    >
                        <div
                            dangerouslySetInnerHTML={{
                                __html: link.label,
                            }}
                        />
                    </Link>
                </li>
            ))}
        </ul>
    );
}
