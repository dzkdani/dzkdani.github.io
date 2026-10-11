<script lang="ts">
	import { certificates, intro, recognition, whatITakeOn } from '#lib/data/about.ts';
	import ProjectFrame from '#lib/components/ProjectFrame.svelte';
</script>

<section class="about">
	<div class="inner">
		<h1>About</h1>

		<!-- TODO(owner): portrait (optional, DESIGN §6). -->
		<p class="intro">{intro}</p>

		<h2>What I take on</h2>
		<ul class="takeon">
			{#each whatITakeOn as item (item)}
				<li>{item}</li>
			{/each}
		</ul>

		<h2>Recognition</h2>
		<ul class="recognition">
			{#each recognition.filter((item) => item.confirmed) as item (item.text)}
				<li>{item.text}</li>
			{/each}
		</ul>

		<h2>Certificates</h2>
		<ul class="certificates">
			{#each certificates as item (item.caption)}
				<li>
					<ProjectFrame media={item.image} />
					<p class="cert-caption">{item.caption}</p>
				</li>
			{/each}
		</ul>

	</div>
</section>

<style>
	.about {
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

	.intro {
		margin-top: var(--gutter);
		/* Source Serif 4 is the face for the About text (DESIGN §4). */
		font-family: var(--font-serif);
		font-size: var(--text-body-serif);
		line-height: 1.6;
		max-width: 62ch;
	}

	h2 {
		margin-top: 64px;
		font-size: var(--text-h3);
		font-weight: 600;
	}

	.takeon,
	.recognition {
		margin: 32px 0 0;
	}

	.certificates {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
		gap: var(--gutter);
		margin: 32px 0 0;
		padding: 0;
		list-style: none;
	}

	.cert-caption {
		margin-top: 8px;
		font-size: var(--text-caption);
		color: var(--muted);
	}

</style>
