<script lang="ts">
	import ProjectFrame from '#lib/components/ProjectFrame.svelte';
	import WorkCard from '#lib/components/WorkCard.svelte';
	import { featuredProjects, projectStill, type Project } from '#lib/data/projects.ts';

	const areaLabels: Record<Project['area'], string> = {
		edtech: 'EdTech',
		ar: 'AR',
		vr: 'VR',
		webgl: 'WebGL',
		game: 'Games',
		other: 'Other'
	};

	const heroFrame = featuredProjects[0];
	const heroStill = projectStill(heroFrame);
</script>

<section class="hero">
	<div class="inner">
		<div class="copy">
			<h1>Dzaki Adani</h1>
			<p class="lead">I build educational games, AR and VR apps, and WebGL builds for studios and freelance clients.</p>
			<p class="support">
				Shipped apps, client builds, and game jam projects. Each one links to a build or a preview
				where the client allows it.
			</p>
			<div class="actions">
				<a class="fill" href="/work/">See the work</a>
				<a class="outline" href="mailto:dzaky.adani@gmail.com">Email me</a>
			</div>
		</div>

		<!-- TODO(owner): screenshots. The featured frame is a neutral placeholder until real media exists (DESIGN §8). -->
		<div class="hero-frame">
			<ProjectFrame
				media={heroStill}
				title={heroFrame.title}
				area={areaLabels[heroFrame.area]}
			/>
		</div>
	</div>

	<svg class="curve" viewBox="0 0 100 41" preserveAspectRatio="none" aria-hidden="true">
		<path d="M0,0 Q50,80 100,0 V41 H0 Z" />
	</svg>
</section>

<section class="featured">
	<div class="inner">
		<h2>Featured work</h2>
		<ul class="cards">
			{#each featuredProjects as project (project.slug)}
				<li><WorkCard {project} /></li>
			{/each}
		</ul>
	</div>
</section>

<style>
	.hero {
		position: relative;
		background: var(--night);
		color: var(--paper);
		/* Focus ring on night surfaces is pink, not magenta (DESIGN §9). */
		--focus-ring: var(--pink);
		padding: clamp(40px, 6vw, 72px) var(--pad-x) clamp(64px, 8vw, 80px);
	}

	.inner {
		width: 100%;
		max-width: var(--page-max);
		margin-inline: auto;
	}

	.hero .inner {
		display: grid;
		grid-template-columns: minmax(0, 1fr);
		gap: clamp(32px, 5vw, 64px);
		align-items: start;
	}

	.hero h1 {
		font-size: var(--text-hero);
		font-weight: 600;
		line-height: 0.95;
		letter-spacing: -0.035em;
	}

	.lead {
		margin-top: 32px;
		font-size: var(--text-h2);
		line-height: 1.1;
		letter-spacing: -0.02em;
		max-width: 30ch;
	}

	.support {
		margin-top: var(--gutter);
		max-width: 68ch;
	}

	.actions {
		display: flex;
		flex-wrap: wrap;
		gap: var(--gutter);
		margin-top: 32px;
	}

	.actions a {
		display: inline-block;
		padding: 12px 20px;
		font-size: var(--text-small);
		text-decoration: none;
	}

	.actions .fill {
		background: var(--pink);
		color: var(--night);
	}

	.actions .outline {
		border: 1px solid var(--pink);
		color: var(--pink);
	}

	.hero-frame {
		width: 280px;
		max-width: 100%;
		position: relative;
		z-index: 1;
	}

	.curve {
		display: block;
		position: absolute;
		inset: auto 0 0 0;
		width: 100%;
		height: 41px;
		fill: var(--black);
	}

	.featured {
		padding: clamp(64px, 9vw, 112px) var(--pad-x) clamp(64px, 9vw, 96px);
	}

	.featured h2 {
		font-size: var(--text-h2);
		font-weight: 600;
		line-height: 1.1;
		letter-spacing: -0.02em;
		margin-bottom: var(--gutter);
	}

	.cards {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
		gap: var(--gutter);
		list-style: none;
		margin: 0;
		padding: 0;
	}

	@media (min-width: 960px) {
		.hero .inner {
			grid-template-columns: minmax(0, 1fr) auto;
			gap: clamp(24px, 4vw, 64px);
		}

		.hero-frame {
			/* Crosses the curved bottom edge (DESIGN §5 and §6). */
			margin-bottom: -90px;
		}
	}

	@media (prefers-reduced-motion: no-preference) {
		.hero {
			animation: hero-band-in 600ms var(--ease-out) both;
		}

		.hero h1 {
			animation: hero-name-in var(--dur-medium) var(--ease-out) 120ms both;
		}

		.hero-frame {
			animation: frame-in var(--dur-load) var(--ease-out) 240ms both;
		}

		@keyframes hero-band-in {
			from {
				opacity: 0;
			}
			to {
				opacity: 1;
			}
		}

		@keyframes hero-name-in {
			from {
				opacity: 0;
				transform: translateY(16px);
			}
			to {
				opacity: 1;
				transform: none;
			}
		}

		@keyframes frame-in {
			from {
				opacity: 0;
				transform: translateY(40px);
			}
			to {
				opacity: 1;
				transform: none;
			}
		}
	}
</style>
