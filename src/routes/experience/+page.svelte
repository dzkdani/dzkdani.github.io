<script lang="ts">
	import { education, experience } from '#lib/data/about.ts';
</script>

<section class="page">
	<div class="inner">
		<h1>Experience</h1>

		<ul class="experience">
			{#each experience as job (job.company)}
				<li>
					<h2>{job.role}, {job.company}</h2>
					<p class="meta">
						<span>{job.years}</span>
						{#if job.location}
							<span>{job.location}</span>
						{/if}
					</p>
					{#if job.points.length > 0}
						<ul class="points">
							{#each job.points as point (point)}
								<li>{point}</li>
							{/each}
						</ul>
					{/if}
				</li>
			{/each}
		</ul>

		<h2 class="education">Education</h2>
		<p>{education}</p>
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

	h2 {
		font-size: var(--text-body);
		font-weight: 600;
	}

	.education {
		margin-top: 64px;
		font-size: var(--text-h3);
	}

	.education + p {
		margin-top: 32px;
	}

	.experience {
		margin: 32px 0 0;
		padding: 0;
		list-style: none;
	}

	.experience > li + li {
		margin-top: 32px;
	}

	.meta {
		display: flex;
		flex-wrap: wrap;
		gap: var(--gutter);
		margin-top: 4px;
		font-size: var(--text-caption);
		color: var(--muted);
	}

	.points {
		margin: var(--gutter) 0 0;
	}
</style>
