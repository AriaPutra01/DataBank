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
					<SearchIcon className="text-slate-500 dark:text-slate-400" />
				</div>
				<input
					type="text"
					id="simple-search"
					className="bg-slate-100 border border-slate-300 text-slate-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2 dark:bg-slate-700 dark:border-slate-600 dark:placeholder-slate-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 transition-all"
					placeholder="Search"
					required=""
					value={value}
					onChange={onChange}
				/>
			</div>
		</form>
	);
}
