<script>
	export let data;
</script>

{#if data.session}
	<p>hello {data.session.user.username}</p>
{:else}
	<p>hello GUEST</p>
{/if}
