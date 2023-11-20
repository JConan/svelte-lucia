<script lang="ts">
	import { enhance } from '$app/forms';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<main>
	<h1>Profile</h1>
	<p>User id: {data.userId}</p>
	<p>Username: {data.username}</p>
</main>

<style>
	main {
		margin: auto;
		margin-top: 1rem;
		width: 300px;

		& h1 {
			text-decoration: underline;
			margin-bottom: 1rem;
		}
	}
</style>
