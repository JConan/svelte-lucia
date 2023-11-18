<script lang="ts">
	import { enhance } from '$app/forms';

	export let form;

	$: form && console.log(form);
</script>

<main>
	<h1>Sign in</h1>
	<form method="post" use:enhance>
		<label for="username">Username</label>
		<input name="username" id="username" /><br />
		<label for="password">Password</label>
		<input type="password" name="password" id="password" /><br />
		<input type="submit" />
	</form>
	<a href="/signup">Create an account</a>
</main>

<style>
	main {
		margin: auto;
		margin-top: 1rem;
		width: 300px;
	}
</style>
