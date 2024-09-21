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
                        flex items-center justify-center text-sm py-2 px-3 leading-tight text-slate-500 border border-slate-300 hover:bg-slate-100 hover:text-slate-700 bg-slate-100 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-400 dark:hover:bg-slate-700 dark:hover:text-white transition-all`}
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
