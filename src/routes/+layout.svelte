<script>
	import 'the-new-css-reset/css/reset.css';
</script>

<header>
	<nav>
		<ul>
			<li><a href="/">Home</a></li>
			<li><a href="/email">Email</a></li>
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
