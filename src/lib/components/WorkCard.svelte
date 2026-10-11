<script lang="ts">
	import ProjectFrame from '#lib/components/ProjectFrame.svelte';
	import { reveal } from '#lib/actions/reveal.ts';
	import { projectStill, type Project } from '#lib/data/projects.ts';

	type Props = {
		project: Project;
		revealDelay?: number;
	};

	let { project, revealDelay = 0 }: Props = $props();

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

	const still = $derived(projectStill(project));
</script>

<div class="card" use:reveal={revealDelay}>
	<a href={`/work/${project.slug}/`}>
		<!-- One ratio for every cover; screenshots crop to fill it (DESIGN §5). -->
		<ProjectFrame media={still} frameRatio="16 / 10" />
		<h3>{project.title}</h3>
		<p class="meta">
			<span>{areaLabels[project.area]}</span>
			<span>{statusLabels[project.status]}</span>
		</p>
	</a>
</div>

<style>
	.card a {
		display: block;
		color: var(--paper);
		text-decoration: none;
	}

	/* Combo feedback (DESIGN §7): the frame border flips to pink with the card. */
	.card a:hover,
	.card a:focus-visible {
		--divider: var(--pink);
	}

	h3 {
		margin-top: var(--gutter);
		font-size: var(--text-h3);
		font-weight: 600;
		width: fit-content;
	}

	.meta {
		display: flex;
		flex-wrap: wrap;
		gap: var(--gutter);
		margin-top: 6px;
		font-size: var(--text-caption);
		color: var(--muted);
	}

	@media (prefers-reduced-motion: no-preference) {
		h3 {
			background-image: linear-gradient(var(--magenta), var(--magenta));
			background-repeat: no-repeat;
			background-position: 0 100%;
			background-size: 0% 2px;
			transition: background-size var(--dur-quick) var(--ease-out);
		}

		.card a:hover h3,
		.card a:focus-visible h3 {
			background-size: 100% 2px;
		}
	}
</style>
