import React from "react";

export default function SelectInput({ children, value, className, ...props }) {
    return (
        <select
            {...props}
            className={
                "w-full border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md shadow-sm transition-all " +
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
