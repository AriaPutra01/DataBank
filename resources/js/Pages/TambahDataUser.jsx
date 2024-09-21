import { useForm, Head, Link } from "@inertiajs/react";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import SecondaryButton from "@/Components/SecondaryButton";
import SelectInput from "@/Components/SelectInput";
import TextInput from "@/Components/TextInput";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

export default function TambahDataUser({ attributes }) {
	const { data, setData, post, errors, processing, reset } = useForm({});

	const DataRekening = attributes.DataRekening;
	const MyBCA = attributes.MyBCA;
	const Bisnis = attributes.Bisnis;
	const nonFileBisnis = Bisnis.filter((data) => data.type !== "file");
	const FileBisnis = Bisnis.filter((data) => data.type === "file");

	const handleChange = (e) => {
		const { name, type } = e.target;
		const value = type === "file" ? e.target.files[0] : e.target.value;
		setData((prev) => ({ ...prev, [name]: value }));

		// Tambahkan pratinjau gambar jika file adalah gambar
		if (type === "file" && value && value.type.startsWith("image/")) {
			const reader = new FileReader();
			reader.onload = (event) => {
				// Simpan URL gambar untuk pratinjau
				setData((prev) => ({
					...prev,
					[`${name}_preview`]: event.target.result,
				}));
			};
			reader.readAsDataURL(value);
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		post(route("rekening.store"), data, {
			forceFormData: true,
			onSuccess: () => {
				reset();
			},
		});
	};

	const renderInput = (attribute, index) => {
		switch (attribute.type) {
			case "select":
				return (
					<div key={index} className={`mb-4 col-span-1`}>
						<InputLabel htmlFor={attribute.data} value={attribute.header} />
						<SelectInput
							id={attribute.data}
							name={attribute.data}
							value={data[attribute.data]}
							onChange={handleChange}>
							<option value="">Pilih {attribute.header}</option>
							{attribute.options.map((option, index) => (
								<SelectInput.Option key={index} value={option}>
									{option}
								</SelectInput.Option>
							))}
						</SelectInput>
						<InputError message={errors[attribute.data]} className="mt-2" />
					</div>
				);
			case "file":
				return (
					<div key={index} className={`relative mb-4 col-span-3 sm:col-span-2`}>
						<InputLabel
							className={`${
								!data[attribute.data] && "dark:bg-transparent"
							} absolute top-0 p-2 w-fit border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 dark:text-slate-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md shadow-sm`}
							htmlFor={attribute.data}
							value={attribute.header}
						/>
						{data[`${attribute.data}_preview`] && (
							<img
								src={data[`${attribute.data}_preview`]}
								alt="Preview"
								className="object-cover sm:w-full p-2 bg-slate-50 dark:bg-slate-800 mt-[2rem]"
							/>
						)}
						{data[attribute.data] && (
							<img
								src={`/storage/${data[attribute.data]}`}
								alt={data[attribute.data].name}
								className="object-cover sm:w-full rounded-md p-2 bg-slate-50 dark:bg-slate-800"
							/>
						)}
						<TextInput
							id={attribute.data}
							type="file"
							name={attribute.data}
							onChange={handleChange}
							className={`${
								!data[attribute.data] && "mt-[2.5rem]"
							} bg-slate-50 dark:bg-slate-800`}
						/>
						<InputError message={errors[attribute.data]} className="mt-2" />
					</div>
				);
			default:
				return (
					<div key={index} className="mb-4 col-span-1">
						<InputLabel htmlFor={attribute.data} value={attribute.header} />
						<TextInput
							id={attribute.data}
							name={attribute.data}
							type={attribute.type}
							value={data[attribute.data]}
							onChange={handleChange}
							placeholder={attribute.header}
						/>
						<InputError message={errors[attribute.data]} className="mt-2" />
					</div>
				);
		}
	};

	return (
		<AuthenticatedLayout
			header={
				<h2 className="font-semibold text-xl text-slate-800 dark:text-slate-200 leading-tight">
					Tambah Data User
				</h2>
			}>
			<Head title="Tambah Data User" />

			<div className="max-w-7xl mx-auto sm:px-6 lg:px-8 sm:my-[1rem]">
				<form
					className="flex flex-col gap-4"
					onSubmit={handleSubmit}
					encType="multipart/form-data">
					<div className="p-6 text-slate-900 dark:text-slate-100 bg-white dark:bg-slate-800 shadow-sm sm:rounded-lg transition-all">
						<h2 className="mb-6 font-bold text-2xl text-slate-800 dark:text-slate-200 leading-tight">
							Data Rekening
						</h2>
						<div className="sm:grid grid-cols-2 gap-4">
							{DataRekening.map((attribute, index) =>
								renderInput(attribute, index)
							)}
						</div>
						<h2 className="mb-6 font-bold text-2xl text-slate-800 dark:text-slate-200 leading-tight">
							My BCA
						</h2>
						<div className="sm:grid grid-cols-2 gap-4">
							{MyBCA.map((attribute, index) => renderInput(attribute, index))}
						</div>
						<h2 className="mb-6 font-bold text-2xl text-slate-800 dark:text-slate-200 leading-tight">
							Bisnis
						</h2>
						<div className="sm:grid grid-cols-3 gap-4">
							{nonFileBisnis.map((attribute, index) =>
								renderInput(attribute, index)
							)}
						</div>
					</div>
					<div className="p-6 text-slate-900 dark:text-slate-100 transition-all">
						<h2 className="mb-6 font-bold text-2xl text-slate-800 dark:text-slate-200 leading-tight">
							Foto
						</h2>
						<div className="sm:grid grid-cols-4 gap-4">
							{FileBisnis.map((attribute, index) =>
								renderInput(attribute, index)
							)}
						</div>
						<div className="flex pt-4 mt-4 gap-2 border-t-2 border-slate-600">
							<PrimaryButton disabled={processing} type="submit">
								Simpan
							</PrimaryButton>
							<Link href={route("rekening.index")} as="button" type="button">
								<SecondaryButton>Batal</SecondaryButton>
							</Link>
						</div>
					</div>
				</form>
			</div>
		</AuthenticatedLayout>
	);
}
