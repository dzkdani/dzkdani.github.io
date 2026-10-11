<script lang="ts">
	import { tick } from 'svelte';
	import ProjectFrame from '#lib/components/ProjectFrame.svelte';
	import { reveal } from '#lib/actions/reveal.ts';
	import { allProjects, projectStill, type Project } from '#lib/data/projects.ts';

	// Every project with an itch.io embed URL, in work-index order.
	const playable = allProjects.filter((project) => project.playUrl);

	let dialogEl: HTMLDialogElement | undefined = $state();
	let playing: Project | null = $state(null);

	async function open(project: Project) {
		if (!dialogEl) return;
		playing = project;
		// Let the dialog content render first, so the close button takes focus.
		await tick();
		dialogEl.showModal();
	}

	function close() {
		dialogEl?.close();
	}
</script>

<section class="page">
	<div class="inner">
		<h1>Play</h1>

		<ul class="games">
			{#each playable as project, i (project.slug)}
				<li use:reveal={Math.min(i * 60, 240)}>
					<ProjectFrame media={projectStill(project)} frameRatio="16 / 10" />
					<h2><a href={`/work/${project.slug}/`}>{project.title}</a></h2>
					<p class="toggle">
						<button type="button" aria-label={`Play ${project.title}`} onclick={() => open(project)}>
							Play
						</button>
					</p>
				</li>
			{/each}
		</ul>
	</div>
</section>

<dialog
	bind:this={dialogEl}
	class="stage"
	aria-label={playing ? `Playing ${playing.title}` : 'Game player'}
	onclose={() => (playing = null)}
>
	{#if playing}
		<div class="stage-head">
			<p class="stage-title">{playing.title}</p>
			<button type="button" class="stage-close" aria-label="Close the game" onclick={close}>×</button>
		</div>
		<iframe
			src={playing.playUrl}
			title={`Playable embed of ${playing.title}`}
			loading="lazy"
			allowfullscreen
		>
			{#if playing.links[0]}
				<a href={playing.links[0].url}>Play {playing.title} on itch.io</a>
			{/if}
		</iframe>
	{/if}
</dialog>

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

	/* Combo feedback (DESIGN §7): the cover frame flips to pink with the card. */
	.games li:hover,
	.games li:focus-within {
		--divider: var(--pink);
	}

	/* The full-screen game stage (DESIGN §6, §8): a native dialog, so Esc and
	   focus come for free; the iframe is only created while a game is open. */
	.stage:not([open]) {
		display: none;
	}

	.stage {
		display: flex;
		flex-direction: column;
		gap: 12px;
		width: 100vw;
		max-width: none;
		height: 100dvh;
		max-height: none;
		margin: 0;
		padding: 16px;
		border: 0;
		background: transparent;
	}

	.stage::backdrop {
		background: var(--night);
	}

	.stage-head {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: var(--gutter);
	}

	.stage-title {
		font-size: var(--text-h3);
		font-weight: 600;
		color: var(--paper);
	}

	.stage-close {
		width: 44px;
		height: 44px;
		padding: 0;
		border: 0;
		background: none;
		color: var(--pink);
		font-size: 28px;
		line-height: 1;
		cursor: pointer;
	}

	.stage iframe {
		flex: 1;
		width: 100%;
		border: 0;
		background: var(--ink);
		border-radius: var(--radius-phone);
	}
</style>
