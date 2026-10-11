<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/state';
	import { prefersReducedMotion } from 'svelte/motion';
	import { fade } from 'svelte/transition';
	import WorkCard from '#lib/components/WorkCard.svelte';
	import { allProjects, type Project } from '#lib/data/projects.ts';

	type Filter = { label: string; value: Project['area'] | null };

	const filters: Filter[] = [
		{ label: 'All', value: null },
		{ label: 'EdTech', value: 'edtech' },
		{ label: 'AR', value: 'ar' },
		{ label: 'VR', value: 'vr' },
		{ label: 'WebGL', value: 'webgl' },
		{ label: 'Games', value: 'game' }
	];

	function parseFilter(value: string | null): Project['area'] | null {
		return filters.find((filter) => filter.value !== null && filter.value === value)?.value ?? null;
	}

	// searchParams cannot be read while prerendering, so sync from the URL after mount
	// and on every navigation (this also covers back and forward).
	let activeArea = $state<Project['area'] | null>(null);

	$effect(() => {
		activeArea = parseFilter(page.url.searchParams.get('area'));
	});

	const visible = $derived(
		activeArea === null
			? allProjects
			: allProjects.filter((project) => project.area === activeArea)
	);

	const fadeOptions = $derived(prefersReducedMotion.current ? { duration: 0 } : { duration: 180 });

	function selectFilter(value: Project['area'] | null) {
		goto(value === null ? '/work/' : `/work/?area=${value}`, { reset: false });
	}
</script>

<section class="index">
	<div class="inner">
		<div class="head">
			<h1>Work</h1>
			<h2 class="visually-hidden">Projects</h2>
			<div class="filters" role="group" aria-label="Filter by area">
				{#each filters as filter (filter.label)}
					<button
						type="button"
						aria-pressed={activeArea === filter.value}
						onclick={() => selectFilter(filter.value)}
					>
						{filter.label}
					</button>
				{/each}
			</div>
		</div>

		<ul class="cards">
			{#each visible as project, i (project.slug)}
				<li in:fade={fadeOptions}>
					<WorkCard {project} revealDelay={Math.min(i * 60, 240)} />
				</li>
			{/each}
		</ul>
	</div>
</section>

<style>
	.index {
		padding: clamp(40px, 6vw, 72px) var(--pad-x) clamp(64px, 9vw, 96px);
	}

	.inner {
		width: 100%;
		max-width: var(--page-max);
		margin-inline: auto;
	}

	.head {
		display: flex;
		flex-wrap: wrap;
		align-items: baseline;
		justify-content: space-between;
		gap: var(--gutter);
		margin-bottom: var(--gutter);
	}

	h1 {
		font-size: var(--text-h2);
		font-weight: 600;
		line-height: 1.1;
		letter-spacing: -0.02em;
	}

	.filters {
		display: flex;
		flex-wrap: wrap;
		gap: var(--gutter);
	}

	.filters button {
		padding: 0 0 6px;
		border: 0;
		border-bottom: 2px solid transparent;
		background: none;
		font: inherit;
		font-size: var(--text-small);
		color: var(--paper);
		cursor: pointer;
	}

	.filters button[aria-pressed='true'] {
		border-bottom-color: var(--magenta);
	}

	.cards {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
		gap: var(--gutter);
		list-style: none;
		margin: 0;
		padding: 0;
	}

	.visually-hidden {
		position: absolute;
		width: 1px;
		height: 1px;
		padding: 0;
		margin: -1px;
		overflow: hidden;
		clip-path: inset(50%);
		white-space: nowrap;
		border: 0;
	}


</style>
