<script lang="ts">
	import { page } from '$app/state';

	type NavLink = { label: string; href: string; section?: string };

	const links: NavLink[] = [
		{ label: 'About', href: '/about/', section: '/about/' },
		{ label: 'Work', href: '/work/', section: '/work/' },
		{ label: 'Play', href: '/play/', section: '/play/' },
		{ label: 'Experience', href: '/experience/', section: '/experience/' }
	];
</script>

<header class="nav">
	<a class="wordmark" href="/">Dzaki Adani</a>

	<nav aria-label="Main">
		<ul class="links" role="list">
			{#each links as link (link.label)}
				<li>
					<a
						href={link.href}
						class:active={link.section ? page.url.pathname.startsWith(link.section) : false}
					>
						{link.label}
					</a>
				</li>
			{/each}
		</ul>
	</nav>
</header>

<style>
	.nav {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: space-between;
		gap: var(--gutter);
		padding: var(--gutter) var(--pad-x);
	}

	.wordmark {
		color: var(--paper);
		font-family: var(--font-display);
		font-size: var(--text-body);
		font-weight: 600;
		text-decoration: none;
	}

	.links {
		display: flex;
		align-items: center;
		gap: var(--gutter);
		margin: 0;
		padding: 0;
		list-style: none;
	}

	.links a {
		color: var(--paper);
		font-size: var(--text-small);
		text-decoration: none;
	}

	.links a::before {
		content: '';
		display: inline-block;
		width: 3px;
		height: 18px;
		margin-right: 6px;
		vertical-align: middle;
		background: transparent;
	}

	.links a.active::before {
		background: var(--magenta);
	}
</style>
