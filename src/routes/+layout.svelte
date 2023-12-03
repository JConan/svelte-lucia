<script>
	import { applyAction, enhance } from '$app/forms';
	import { navigating } from '$app/stores';
	import 'the-new-css-reset/css/reset.css';
	export let data;
	let submiting = false;
</script>

<header>
	<nav>
		<ul>
			<li><a href="/">Home</a></li>
			{#if data.session}
				<li>
					<a href="/profile">{data.session.user.username}</a>
				</li>
				<li>
					<form
						method="post"
						action="/logout"
						use:enhance={() => {
							submiting = true;

							return async ({ result }) => {
								submiting = false;
								await applyAction(result);
							};
						}}
					>
						<input
							type="submit"
							disabled={submiting || $navigating != null}
							value={submiting || $navigating != null ? 'logging out ...' : 'log out'}
						/>
					</form>
				</li>
			{:else}
				<li><a href="/email">login</a></li>
			{/if}
		</ul>
	</nav>
</header>

<slot />

<footer>
	<ul>
		<li>{data.appInfo}</li>
	</ul>
</footer>

<style>
	:global(:root) {
		font-family: 'Source Sans Pro', sans-serif;
		height: 100%;
	}
	:global(body) {
		height: 100%;
		display: flex;
		flex-direction: column;

		& main {
			flex-grow: 1;
		}
		& footer {
			font-size: 10px;
			padding: 0.3rem;
		}
	}

	nav {
		padding: 1rem;
		& ul {
			display: flex;
			gap: 1rem;

			& li {
				&:hover {
					/* font-weight: bold; */
					text-shadow:
						0.5px 0px darkblue,
						-0.5px 0px darkblue;
					text-decoration: underline;
				}

				&:nth-child(2) {
					margin-left: auto;
					color: darkred;
				}
			}
		}
	}
</style>
