<script>
	import { enhance } from '$app/forms';

	export let data;
</script>

<main>
	{#if data.session}
		<p>hello <strong>{data.session.user.username}</strong></p>

		<form method="post" action="?/logout" use:enhance>
			<input type="submit" value="Sign out" on:click|once />
		</form>
	{:else}
		<p>hello <strong>GUEST</strong></p>
	{/if}
</main>

<style>
	strong {
		font-weight: bold;
	}
	main {
		padding: 1rem;
		& input {
			margin: 1rem;
			border: 1px solid darkred;
			padding: 0.25rem;
			color: darkred;
			box-shadow: 2px 2px black;

			&:active {
				background-color: lightcoral;
				transform: translate(2px, 2px);
				box-shadow: none;
			}
		}
	}
</style>
