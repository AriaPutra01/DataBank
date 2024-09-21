import GuestLayout from "@/Layouts/GuestLayout";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Head, Link, useForm } from "@inertiajs/react";

export default function Register() {
	const { data, setData, post, processing, errors, reset } = useForm({
		name: "",
		email: "",
		password: "",
		password_confirmation: "",
		usertype: "",
	});

	const submit = (e) => {
		e.preventDefault();

		post(route("register"), {
			onFinish: () => reset("password", "password_confirmation"),
		});
	};

	return (
		<GuestLayout>
			<Head title="Register" />

			<form onSubmit={submit}>
				<div>
					<InputLabel className="font-extrabold" htmlFor="name" value="Name" />

					<TextInput
						id="name"
						name="name"
						value={data.name}
						className="mt-1 block w-full bg-opacity-50 dark:bg-opacity-50"
						autoComplete="name"
						isFocused={true}
						onChange={(e) => setData("name", e.target.value)}
						required
					/>

					<InputError message={errors.name} className="mt-2" />
				</div>

				<div className="mt-4">
					<InputLabel
						className="font-extrabold"
						htmlFor="email"
						value="Email"
					/>

					<TextInput
						id="email"
						type="email"
						name="email"
						value={data.email}
						className="mt-1 block w-full bg-opacity-50 dark:bg-opacity-50"
						autoComplete="username"
						onChange={(e) => setData("email", e.target.value)}
						required
					/>

					<InputError message={errors.email} className="mt-2" />
				</div>

				<div className="mt-4">
					<InputLabel
						className="font-extrabold"
						htmlFor="password"
						value="Password"
					/>

					<TextInput
						id="password"
						type="password"
						name="password"
						value={data.password}
						className="mt-1 block w-full bg-opacity-50 dark:bg-opacity-50"
						autoComplete="new-password"
						onChange={(e) => setData("password", e.target.value)}
						required
					/>

					<InputError message={errors.password} className="mt-2" />
				</div>

				<div className="mt-4">
					<InputLabel
						htmlFor="password_confirmation"
						value="Confirm Password"
					/>

					<TextInput
						id="password_confirmation"
						type="password"
						name="password_confirmation"
						value={data.password_confirmation}
						className="mt-1 block w-full bg-opacity-50 dark:bg-opacity-50"
						autoComplete="new-password"
						onChange={(e) => setData("password_confirmation", e.target.value)}
						required
					/>

					<InputError message={errors.password_confirmation} className="mt-2" />
				</div>

				<div className="mt-4">
					<InputLabel
						className="font-extrabold"
						htmlFor="usertype"
						value="User Type"
					/>
					<select
						id="usertype"
						name="usertype"
						value={data.usertype}
						className="mt-1 block w-full rounded-md bg-white/50 dark:bg-slate-800/50 dark:text-white "
						onChange={(e) => setData("usertype", e.target.value)}
						required>
						<option value="">Select Role</option>
						<option value="admin">Admin</option>
						<option value="supervisor">Supervisor</option>
						<option value="user">User</option>
					</select>
					<InputError message={errors.usertype} className="mt-2" />
				</div>

				<div className="flex items-center justify-end mt-4">
					<Link
						href={route("login")}
						className="underline text-sm text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-slate-800">
						Already registered?
					</Link>

					<PrimaryButton className="ms-4" disabled={processing}>
						Register
					</PrimaryButton>
				</div>
			</form>
		</GuestLayout>
	);
}
