<script lang="ts">
	import ProjectFrame from '#lib/components/ProjectFrame.svelte';
	import { allProjects, projectStill } from '#lib/data/projects.ts';

	// Every project with an itch.io embed URL, in work-index order.
	const playable = allProjects.filter((project) => project.playUrl);

	// The slug of the one game currently loaded; null when none is.
	let playing = $state<string | null>(null);
</script>

<section class="page">
	<div class="inner">
		<h1>Play</h1>

		<ul class="games">
			{#each playable as project (project.slug)}
				<li>
					{#if playing === project.slug && project.playUrl}
						<div class="player">
							<iframe
								src={project.playUrl}
								title={`Playable embed of ${project.title}`}
								loading="lazy"
							></iframe>
						</div>
					{:else}
						<ProjectFrame media={projectStill(project)} frameRatio="16 / 10" />
					{/if}
					<h2><a href={`/work/${project.slug}/`}>{project.title}</a></h2>
					<p class="toggle">
						<button
							type="button"
							aria-label={playing === project.slug
								? `Stop ${project.title}`
								: `Play ${project.title}`}
							onclick={() => (playing = playing === project.slug ? null : project.slug)}
						>
							{playing === project.slug ? 'Stop' : 'Play'}
						</button>
					</p>
				</li>
			{/each}
		</ul>
	</div>
</section>

<style>
	.page {
		padding: clamp(40px, 6vw, 72px) var(--pad-x) clamp(64px, 9vw, 96px);
	}

	.inner {
		width: 100%;
		max-width: var(--page-max);
		margin-inline: auto;
	}

	h1 {
		font-size: var(--text-h2);
		font-weight: 600;
		line-height: 1.1;
		letter-spacing: -0.02em;
	}

	.games {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
		gap: var(--gutter);
		margin: 32px 0 0;
		padding: 0;
		list-style: none;
	}

	h2 {
		margin-top: var(--gutter);
		font-size: var(--text-h3);
		font-weight: 600;
		width: fit-content;
	}

	h2 a {
		color: inherit;
		text-decoration: none;
	}

	.toggle {
		margin-top: 8px;
	}

	.toggle button {
		padding: 10px 20px;
		border: 1px solid var(--pink);
		background: none;
		color: var(--pink);
		font: inherit;
		font-size: var(--text-small);
		cursor: pointer;
	}

	/* The itch.io player, in the same frame styling as the covers (DESIGN §6, §8). */
	.player {
		position: relative;
		width: 100%;
		aspect-ratio: 16 / 10;
		background: var(--ink);
		border: 1px solid var(--divider);
		border-radius: var(--radius-phone);
		overflow: hidden;
	}

	.player iframe {
		position: absolute;
		inset: 0;
		width: 100%;
		height: 100%;
		border: 0;
	}
</style>
