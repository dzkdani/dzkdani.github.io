<script lang="ts">
	import Icon from '#lib/components/Icon.svelte';
	import WorkCard from '#lib/components/WorkCard.svelte';
	import { email, githubUrl, itchUrl, linkedinUrl, upworkUrl } from '#lib/data/about.ts';
	import { featuredProjects } from '#lib/data/projects.ts';
</script>

<section class="hero">
	<div class="inner">
		<div class="copy">
			<h1>Dzaki Adani</h1>
			<p class="lead">Game Programmer | Game Designer</p>
			<div class="actions">
				<a class="fill" href="/work/">See my work</a>
				<a class="outline" href={`mailto:${email}`} aria-label="Email"><Icon name="email" /></a>
				<a class="outline" href={linkedinUrl} aria-label="LinkedIn"><Icon name="linkedin" /></a>
				<a class="outline" href={upworkUrl} aria-label="Upwork"><Icon name="upwork" /></a>
				<a class="outline" href={githubUrl} aria-label="GitHub"><Icon name="github" /></a>
				<a class="outline" href={itchUrl} aria-label="itch.io"><Icon name="itch" /></a>
			</div>
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

	.actions {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: var(--gutter);
		margin-top: 32px;
	}

	.actions a {
		display: inline-block;
		padding: 16px 28px;
		font-size: var(--text-body);
		text-decoration: none;
	}

	.actions .fill {
		background: var(--pink);
		color: var(--night);
	}

	.actions .outline {
		/* Square icon buttons for the contact channels. */
		padding: 16px;
		font-size: 24px;
		border: 1px solid var(--pink);
		color: var(--pink);
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

	@media (prefers-reduced-motion: no-preference) {
		.hero {
			animation: hero-band-in 600ms var(--ease-out) both;
		}

		.hero h1 {
			animation: hero-name-in var(--dur-medium) var(--ease-out) 120ms both;
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

	}
</style>
