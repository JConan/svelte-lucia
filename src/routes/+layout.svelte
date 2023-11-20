<script>
	import 'the-new-css-reset/css/reset.css';
	export let data;
</script>

<header>
	<nav>
		<ul>
			<li><a href="/">Home</a></li>

			{#if data.session}
				<li><a href="/profile">Profile</a></li>
			{:else}
				<li><a href="/email">Email</a></li>
			{/if}
		</ul>
	</nav>
</header>

<slot />

<style>
	:global(:root) {
		font-family: 'Source Sans Pro', sans-serif;
	}
	nav {
		padding: 1rem;
		& ul {
			display: flex;
			gap: 1rem;

			& li:hover {
				/* font-weight: bold; */
				text-shadow:
					0.5px 0px darkblue,
					-0.5px 0px darkblue;
				text-decoration: underline;
			}
		}
	}
</style>
