import React from "react";

export default function SelectInput({ children, value, className, ...props }) {
    return (
        <select
            {...props}
            className={
                "w-full border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 dark:text-slate-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md shadow-sm transition-all " +
                className
            }
            defaultValue={value}
        >
            {children}
        </select>
    );
}

function SelectOption({ value, ...props }) {
    return (
        <>
            <option {...props} value={value}>
                {value}
            </option>
        </>
    );
}

SelectInput.Option = SelectOption;
