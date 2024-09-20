import InputLabel from "@/Components/InputLabel";
import SecondaryButton from "@/Components/SecondaryButton";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import formatDateToIndonesia from "@/utils/formatDateToIndonesia";
import { Head, Link } from "@inertiajs/react";
import React from "react";

export default function DetailUser({ details, attributes }) {
	const DataRekening = attributes.DataRekening;
	const MyBCA = attributes.MyBCA;
	const Bisnis = attributes.Bisnis;
	const nonFileBisnis = Bisnis.filter((data) => data.type !== "file");
	const FileBisnis = Bisnis.filter((data) => data.type === "file");

	const RenderColumn = (attribute, index) => {
		switch (attribute.type) {
			case "file":
				return (
					<div
						key={index}
						className="col-span-2 relative text-black dark:text-slate-100 ">
						<span className="absolute rounded-md p-2 bg-gray-50 dark:bg-gray-700">
							{attribute.header}
						</span>
						<img
							key={index}
							src={`/storage/${details[attribute.data]}`}
							className="sm:w-full rounded-md p-2 bg-gray-50 dark:bg-gray-700"
							alt={attribute.header}
						/>
					</div>
				);
			case "date":
				return (
					<div
						key={index}
						className={`col-span-2 bg-gray-50 dark:bg-gray-700 p-2 text-black dark:text-slate-100 grid grid-cols-4 gap-10 rounded-md `}>
						<span className="col-span-2 whitespace-nowrap">
							{attribute.header}
						</span>
						<div className="col-span-2 w-full">
							:{" "}
							<span className="font-bold ms-2">
								{formatDateToIndonesia(details[attribute.data])}
							</span>
						</div>
					</div>
				);
			default:
				return (
					<div
						key={index}
						className={`col-span-2 bg-gray-50 dark:bg-gray-700 p-2 text-black dark:text-slate-100 grid grid-cols-4 gap-10 rounded-md `}>
						<span className="col-span-2 whitespace-nowrap">
							{attribute.header}
						</span>
						<div className="col-span-2 w-full">
							:{" "}
							<span className="font-bold ms-2">{details[attribute.data]}</span>
						</div>
					</div>
				);
		}
	};

	return (
		<Authenticated
			header={
				<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
					Detail Data "{details.nama}"
				</h2>
			}>
			<Head title="Detail User" />

			<div className="max-w-7xl mx-auto sm:px-6 lg:px-8 mb-[2rem]">
				<Link href={route("rekening.index")}>
					<SecondaryButton className="my-4 w-full sm:w-auto">
						<i>Kembali</i>
					</SecondaryButton>
				</Link>
				<div className="text-black dark:text-white text-2xl font-bold p-2 rounded-md">
					<h1>Data Rekening</h1>
				</div>
				<div className="grid sm:grid-cols-4 gap-2 bg-white dark:bg-gray-800 shadow-sm sm:rounded-lg p-4 mb-8">
					{DataRekening.map((attribute, index) =>
						RenderColumn(attribute, index)
					)}
				</div>
				<div className="text-black dark:text-white text-2xl font-bold p-2 rounded-md">
					<h1>My BCA</h1>
				</div>
				<div className="grid sm:grid-cols-4 gap-2 bg-white dark:bg-gray-800 shadow-sm sm:rounded-lg p-4 mb-8">
					{MyBCA.map((attribute, index) => RenderColumn(attribute, index))}
				</div>
				<div className="text-black dark:text-white text-2xl font-bold p-2 rounded-md">
					<h1>Bisnis</h1>
				</div>
				<div className="grid sm:grid-cols-6 gap-2 bg-white dark:bg-gray-800 shadow-sm sm:rounded-t-lg p-4">
					{nonFileBisnis.map((attribute, index) =>
						RenderColumn(attribute, index)
					)}
				</div>
				<div className="grid sm:grid-cols-4 gap-2 bg-white dark:bg-gray-800 shadow-sm sm:rounded-b-lg pb-4 px-4">
					{FileBisnis.map((attribute, index) => RenderColumn(attribute, index))}
				</div>
			</div>
		</Authenticated>
	);
}
