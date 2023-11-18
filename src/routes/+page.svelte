<script>
	import { enhance } from '$app/forms';

	export let data;
</script>

{#if data.session}
	<p>hello {data.session.user.username}</p>

	<form method="post" action="?/logout" use:enhance>
		<input type="submit" value="Sign out" />
	</form>
{:else}
	<p>hello GUEST</p>
{/if}
