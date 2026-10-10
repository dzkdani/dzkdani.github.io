<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/state';
	import { prefersReducedMotion } from 'svelte/motion';
	import { fade } from 'svelte/transition';
	import ProjectFrame from '#lib/components/ProjectFrame.svelte';
	import { allProjects, projectStill, type Project } from '#lib/data/projects.ts';

	type Filter = { label: string; value: Project['area'] | null };

	const filters: Filter[] = [
		{ label: 'All', value: null },
		{ label: 'EdTech', value: 'edtech' },
		{ label: 'AR', value: 'ar' },
		{ label: 'VR', value: 'vr' },
		{ label: 'WebGL', value: 'webgl' },
		{ label: 'Games', value: 'game' }
	];

	const areaLabels: Record<Project['area'], string> = {
		edtech: 'EdTech',
		ar: 'AR',
		vr: 'VR',
		webgl: 'WebGL',
		game: 'Games',
		other: 'Other'
	};

	const statusLabels: Record<Project['status'], string> = {
		live: 'Live',
		demo: 'Demo',
		preview: 'Preview',
		restricted: 'Restricted',
		wip: 'In progress',
		tba: 'In development'
	};

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

		<ul class="rows">
			{#each visible as project (project.slug)}
				<li in:fade={fadeOptions}>
					<div class="thumb">
						<ProjectFrame media={projectStill(project)} />
					</div>
					<div class="body">
						<h3>
							{#if project.status === 'restricted'}
								{project.title}
							{:else}
								<a href={`/work/${project.slug}/`}>{project.title}</a>
							{/if}
						</h3>
						<p class="summary">{project.summary}</p>
					</div>
					<p class="meta">
						<span>{areaLabels[project.area]}</span>
						{#if project.tech.length > 0}
							<span>{project.tech.join(', ')}</span>
						{/if}
						<span>{statusLabels[project.status]}</span>
					</p>
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

	.rows {
		list-style: none;
		margin: 0;
		padding: 0;
	}

	.rows li {
		display: grid;
		grid-template-columns: 72px minmax(0, 1fr);
		grid-template-areas:
			'thumb body'
			'thumb meta';
		gap: var(--gutter);
		align-items: start;
		padding: var(--gutter) 0;
		border-top: 1px solid var(--divider);
	}

	.thumb {
		grid-area: thumb;
		width: 72px;
	}

	.body {
		grid-area: body;
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

	.rows h3 {
		font-size: var(--text-h3);
		font-weight: 600;
		width: fit-content;
	}

	.rows h3 a {
		color: var(--paper);
		text-decoration: none;
	}

	.summary {
		margin-top: 6px;
		max-width: 68ch;
	}

	.meta {
		grid-area: meta;
		display: flex;
		flex-wrap: wrap;
		gap: var(--gutter);
		align-self: start;
		font-size: var(--text-caption);
		color: var(--muted);
	}

	@media (min-width: 960px) {
		.rows li {
			grid-template-columns: 72px minmax(0, 1fr) max-content;
			grid-template-areas: 'thumb body meta';
		}
	}

	@media (prefers-reduced-motion: no-preference) {
		.thumb {
			transition: transform var(--dur-quick) var(--ease-out);
		}

		.rows h3 {
			background-image: linear-gradient(var(--magenta), var(--magenta));
			background-repeat: no-repeat;
			background-position: 0 100%;
			background-size: 0% 2px;
			transition: background-size var(--dur-quick) var(--ease-out);
		}

		.rows li:hover .thumb {
			transform: translateX(6px);
		}

		.rows li:hover h3 {
			background-size: 100% 2px;
		}
	}
</style>
