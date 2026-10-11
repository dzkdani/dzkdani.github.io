<script lang="ts">
	import { page } from '$app/state';
	import { prefersReducedMotion } from 'svelte/motion';
	import ProjectFrame from '#lib/components/ProjectFrame.svelte';
	import { projectBySlug, projectStill, type Project } from '#lib/data/projects.ts';

	const project = $derived(projectBySlug(page.params.slug ?? ''));

	const still = $derived(project ? projectStill(project) : null);

	// The --ease-out token from DESIGN §7: cubic-bezier(0.22, 1, 0.36, 1).
	function easeOut(t: number): number {
		const cx = 3 * 0.22;
		const bx = 3 * (0.36 - 0.22) - cx;
		const ax = 1 - cx - bx;
		const cy = 3;
		const by = -cy;
		const ay = 1 - cy - by;
		const sampleX = (u: number) => ((ax * u + bx) * u + cx) * u;
		const sampleY = (u: number) => ((ay * u + by) * u + cy) * u;
		const sampleDX = (u: number) => (3 * ax * u + 2 * bx) * u + cx;
		let u = t;
		for (let i = 0; i < 8; i++) {
			const error = sampleX(u) - t;
			if (Math.abs(error) < 1e-6) break;
			const derivative = sampleDX(u);
			if (Math.abs(derivative) < 1e-6) break;
			u -= error / derivative;
		}
		return sampleY(u);
	}

	const areaLabels: Record<Project['area'], string> = {
		edtech: 'EdTech',
		ar: 'AR',
		vr: 'VR',
		webgl: 'WebGL',
		game: 'Games',
		other: 'Other'
	};

	// The bit.ly URLs are stored exactly as written in DESIGN §11; add a scheme for a usable href.
	function href(url: string): string {
		return /^https?:\/\//.test(url) ? url : `https://${url}`;
	}

	const links = $derived(
		project?.links.filter((link) => link.url !== '' && !link.url.includes('TODO')) ?? []
	);

	const demoUrl = $derived(links.length > 0 ? href(links[0].url) : undefined);

	let playing = $state(false);

	function openDemo(node: HTMLElement) {
		const height = node.scrollHeight;
		return {
			duration: prefersReducedMotion.current ? 0 : 420,
			easing: easeOut,
			css: (t: number) => `height: ${t * height}px; opacity: ${t}; overflow: hidden;`
		};
	}
</script>

{#if project}
	<section class="page">
		<div class="inner">
			<div class="layout">
				<div class="details">
					<h1>{project.title}</h1>
					<p class="summary">{project.summary}</p>
					{#if project.client}
						<p class="client">{project.client}</p>
					{/if}
					<h2>My role</h2>
					<ol class="role">
						{#each project.role as item (item)}
							<li>{item}</li>
						{/each}
					</ol>
					{#if project.tech.length > 0}
						<ul class="tech">
							{#each project.tech as item (item)}
								<li>{item}</li>
							{/each}
						</ul>
					{/if}
					{#if project.status === 'restricted'}
						<p class="note">Client project. The build can't be shown under the client's agreement. Details on request.</p>
					{:else if links.length > 0}
						<p class="links">
							{#each links as link, i (link.url)}
								<a class:primary={i === 0} href={href(link.url)}>{link.label}</a>
							{/each}
						</p>
					{/if}
				</div>

				<div class="media">
					{#if project.area === 'webgl'}
						<!-- TODO(owner): screenshots. Neutral placeholder cover until media exists (DESIGN §8). -->
						<ProjectFrame
							media={still}
							title={project.title}
							area={areaLabels[project.area]}
							aspect="16 / 9"
							openFull
						/>
						{#if demoUrl}
							{#if playing}
								<div class="player" in:openDemo>
									<iframe src={demoUrl} loading="lazy" title={`Playable demo of ${project.title}`}></iframe>
								</div>
							{:else}
								<button type="button" class="play" onclick={() => (playing = true)}>Play demo</button>
							{/if}
						{:else}
							<!-- TODO(owner): demo URL. -->
							<p class="note">Playable demo link coming soon.</p>
						{/if}
					{:else if project.media.length > 0}
						<div class="frames">
							{#each project.media as item (item.src)}
								<ProjectFrame media={item} openFull />
							{/each}
						</div>
					{:else}
						<!-- TODO(owner): screenshots -->
						<div class="frames">
							{#each [1, 2] as n (n)}
								<ProjectFrame title={project.title} area={areaLabels[project.area]} />
							{/each}
						</div>
					{/if}
				</div>
			</div>
		</div>
	</section>
{/if}

<style>
	.page {
		padding: clamp(40px, 6vw, 72px) var(--pad-x) clamp(64px, 9vw, 96px);
	}

	.inner {
		width: 100%;
		max-width: var(--page-max);
		margin-inline: auto;
	}

	.layout {
		display: grid;
		grid-template-columns: minmax(0, 1fr);
		gap: clamp(32px, 5vw, 64px);
	}

	h1 {
		font-size: var(--text-h2);
		font-weight: 600;
		line-height: 1.1;
		letter-spacing: -0.02em;
	}

	.summary {
		margin-top: var(--gutter);
		font-size: var(--text-body-lg);
		line-height: 1.6;
		max-width: 62ch;
	}

	.client {
		margin-top: 8px;
		font-size: var(--text-small);
		color: var(--muted);
	}

	h2 {
		margin-top: 40px;
		font-size: var(--text-h3);
		font-weight: 600;
	}

	.role {
		margin: var(--gutter) 0 0;
	}

	.tech {
		display: flex;
		flex-wrap: wrap;
		gap: var(--gutter);
		margin: 32px 0 0;
		padding: 0;
		list-style: none;
		font-size: var(--text-small);
		color: var(--muted);
	}

	.note {
		margin-top: 32px;
		max-width: 62ch;
		color: var(--muted);
	}

	.links {
		display: flex;
		flex-wrap: wrap;
		gap: var(--gutter);
		margin-top: 32px;
	}

	.links a {
		display: inline-block;
		padding: 12px 20px;
		border: 1px solid var(--pink);
		color: var(--pink);
		font-size: var(--text-small);
		text-decoration: none;
	}

	/* Primary action: magenta fill with paper text, 5.9:1 per DESIGN §3. */
	.links a.primary {
		background: var(--magenta);
		color: var(--paper);
	}

	.frames {
		display: grid;
		grid-template-columns: minmax(0, 1fr);
		gap: var(--gutter);
	}

	.play {
		align-self: start;
		margin-top: var(--gutter);
		padding: 12px 20px;
		border: 1px solid var(--pink);
		background: none;
		color: var(--pink);
		font: inherit;
		font-size: var(--text-small);
		cursor: pointer;
	}

	.player {
		margin-top: var(--gutter);
		aspect-ratio: 16 / 9;
	}

	.player iframe {
		display: block;
		width: 100%;
		height: 100%;
		border: 0;
	}

	@media (min-width: 640px) {
		.frames {
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}
	}

	@media (min-width: 960px) {
		.layout {
			grid-template-columns: minmax(0, 2fr) minmax(0, 3fr);
		}

		.details {
			position: sticky;
			top: var(--gutter);
			align-self: start;
		}
	}
</style>
