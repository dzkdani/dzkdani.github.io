<script lang="ts">
	import '../app.css';
	import '@fontsource/orbitron/400.css';
	import '@fontsource/orbitron/600.css';
	import '@fontsource/roboto/400.css';
	import '@fontsource/roboto/600.css';
	import { page } from '$app/state';
	import favicon from '#lib/assets/favicon.png';
	import Footer from '#lib/components/Footer.svelte';
	import Nav from '#lib/components/Nav.svelte';
	import type { LayoutProps } from './$types';

	let { children }: LayoutProps = $props();
</script>

<svelte:head>
	<title>dzkdani</title>
	<link rel="icon" href={favicon} />
</svelte:head>

<a class="skip-link" href="#main">Skip to content</a>

<Nav />

<main id="main" tabindex="-1">
	{@render children()}
</main>

{#if page.url.pathname !== '/'}
	<Footer />
{/if}

<style>
	.skip-link {
		position: absolute;
		top: 0;
		left: var(--pad-x);
		z-index: 1;
		padding: 8px 12px;
		background: var(--night);
		color: var(--paper);
		font-size: var(--text-small);
	}

	.skip-link:not(:focus) {
		width: 1px;
		height: 1px;
		padding: 0;
		overflow: hidden;
		white-space: nowrap;
		clip-path: inset(50%);
	}

	main {
		flex: 1 0 auto;
	}
</style>
