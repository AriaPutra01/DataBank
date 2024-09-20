import SearchIcon from "@/icons/Search";
import React from "react";

export default function SearchInput({ value, onChange }) {
	return (
		<form className="flex items-center">
			<label htmlFor="simple-search" className="sr-only">
				Search
			</label>
			<div className="relative w-full">
				<div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
					<SearchIcon className="text-gray-500 dark:text-gray-400" />
				</div>
				<input
					type="text"
					id="simple-search"
					className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 transition-all"
					placeholder="Search"
					required=""
					value={value}
					onChange={onChange}
				/>
			</div>
		</form>
	);
}
