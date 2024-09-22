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
	const Foto = attributes.Foto;

	const RenderColumn = (attribute, index) => {
		switch (attribute.type) {
			case "file":
				return (
					<div
						key={index}
						className="col-span-2 relative text-black dark:text-slate-100 ">
						<span className="absolute rounded-md p-2 bg-slate-50 dark:bg-slate-700">
							{details[attribute.path]
								? attribute.header
								: "Tidak ada" + " " + attribute.header}
						</span>
						<img
							key={index}
							src={`/storage/${details[attribute.path]}`}
							className="sm:w-full rounded-md p-2 bg-slate-50 dark:bg-slate-700"
							alt={attribute.header}
						/>
					</div>
				);
			case "date":
				return (
					<div
						key={index}
						className={`col-span-3 bg-slate-50 dark:bg-slate-700 p-2 text-black dark:text-slate-100 grid grid-cols-4 gap-10 rounded-md `}>
						<span className="col-span-1">{attribute.header}</span>
						<div className="col-span-2  w-full">
							<span className="font-bold ms-2">
								{formatDateToIndonesia(details[attribute.data])}
							</span>
						</div>
					</div>
				);
			case "text":
				return (
					<div
						key={index}
						className={`col-span-3 bg-slate-50 dark:bg-slate-700 p-2 text-black dark:text-slate-100 grid grid-cols-4 gap-10 rounded-md `}>
						<span className="col-span-1">{attribute.header}</span>
						<div className="col-span-2 overflow-auto font-bold ms-2">
							{details[attribute.data]}
						</div>
					</div>
				);
			case "date":
				return (
					<div
						key={index}
						className={`col-span-3 bg-slate-50 dark:bg-slate-700 p-2 text-black dark:text-slate-100 grid grid-cols-4 gap-10 rounded-md `}>
						<span className="col-span-1">{attribute.header}</span>
						<div className="col-span-2 overflow-auto font-bold ms-2">
							{details[attribute.data]}
						</div>
					</div>
				);
		}
	};

	return (
		<Authenticated
			header={
				<h2 className=" flex flex-col font-semibold text-xl text-slate-800 dark:text-slate-200 leading-tight">
					<span>Detail Data</span>
					<span className="text-nowrap max-w-[20rem] overflow-ellipsis overflow-hidden">
						{details.nama}
					</span>
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
				<div className="grid sm:grid-cols-6 gap-2 bg-white dark:bg-slate-800 shadow-sm sm:rounded-lg p-4 mb-8">
					{DataRekening.map((attribute, index) =>
						RenderColumn(attribute, index)
					)}
				</div>
				<div className="text-black dark:text-white text-2xl font-bold p-2 rounded-md">
					<h1>My BCA</h1>
				</div>
				<div className="grid sm:grid-cols-6 gap-2 bg-white dark:bg-slate-800 shadow-sm sm:rounded-lg p-4 mb-8">
					{MyBCA.map((attribute, index) => RenderColumn(attribute, index))}
				</div>
				<div className="text-black dark:text-white text-2xl font-bold p-2 rounded-md">
					<h1>Bisnis</h1>
				</div>
				<div className="grid sm:grid-cols-2 gap-2 bg-white dark:bg-slate-800 shadow-sm sm:rounded-t-lg p-4">
					{Bisnis.map((attribute, index) => RenderColumn(attribute, index))}
				</div>
				<div className="text-black dark:text-white text-2xl font-bold p-2 rounded-md">
					<h1>Foto</h1>
				</div>
				<div className="grid sm:grid-cols-4 gap-2 p-4">
					{Foto.map((attribute, index) => RenderColumn(attribute, index))}
				</div>
			</div>
		</Authenticated>
	);
}
