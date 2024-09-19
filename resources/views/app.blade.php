<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1">

		<title inertia>{{ config('app.name') }}</title>

		<!-- Fonts -->
		<link rel="preconnect" href="https://fonts.bunny.net">
		<link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />

		<!-- icons -->
		<link rel=”icon” type=”image” href='{{ asset('favicon.ico') }}'>

		<!-- Scripts -->
		@routes
		@viteReactRefresh
		@vite(['resources/js/app.jsx', "resources/js/Pages/{$page['component']}.jsx"])
		@inertiaHead

		<script>
				if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia(
								'(prefers-color-scheme: dark)').matches)) {
						document.documentElement.classList.add('dark');
				} else {
						document.documentElement.classList.remove('dark');
				}
		</script>
</head>

<body class="font-sans antialiased">
		@inertia
</body>

</html>
