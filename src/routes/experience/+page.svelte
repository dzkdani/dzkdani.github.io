<script lang="ts">
	import { education, experience, type Experience } from '#lib/data/about.ts';

	// Rows are stored newest first and grouped consecutively by their group label,
	// so the order in about.ts is the order on the page.
	const groups: { label: string; jobs: Experience[] }[] = [];
	for (const job of experience) {
		const last = groups[groups.length - 1];
		if (last && last.label === job.group) {
			last.jobs.push(job);
		} else {
			groups.push({ label: job.group, jobs: [job] });
		}
	}
</script>

<section class="page">
	<div class="inner">
		<h1>Experience</h1>

		{#each groups as group (group.label)}
			<h2 class="group">{group.label}</h2>
			<ul class="roles">
				{#each group.jobs as job (job.company)}
					<li>
						<h3>{job.role}, {job.company}</h3>
						<p class="meta">
							<span>{job.years}</span>
							{#if job.location}
								<span>{job.location}</span>
							{/if}
						</p>
						{#if job.points.length > 0}
							<ol class="points">
								{#each job.points as point (point)}
									<li>{point}</li>
								{/each}
							</ol>
						{/if}
					</li>
				{/each}
			</ul>
		{/each}

		<h2 class="group">Education</h2>
		<p class="education">{education}</p>
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

	.group {
		margin-top: 48px;
		padding-top: 20px;
		border-top: 1px solid var(--divider);
		font-size: var(--text-h3);
		font-weight: 600;
	}

	.roles {
		margin: 24px 0 0;
		padding: 0;
		list-style: none;
	}

	.roles > li + li {
		margin-top: 32px;
	}

	h3 {
		font-size: var(--text-body);
		font-weight: 600;
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

	.education {
		margin-top: 24px;
	}
</style>
