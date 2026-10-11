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

		<div class="timeline">
			<div class="rail" aria-hidden="true"></div>
			{#each groups as group (group.label)}
				<section class="year-group">
					<h2 class="group">{group.label}</h2>
					<ul class="roles">
						{#each group.jobs as job (job.company)}
							<li class="role-entry">
								<h3>{job.role}, {job.company}</h3>
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
								{#if job.tags?.length}
									<ul class="tags" aria-label={`${job.company} technologies`}>
										{#each job.tags as tag (tag)}
											<li>{tag}</li>
										{/each}
									</ul>
								{/if}
							</li>
						{/each}
					</ul>
				</section>
			{/each}
		</div>

		<h2 class="group education-heading">Education</h2>
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

	.timeline {
		position: relative;
		margin-top: 24px;
		padding-left: 36px;
	}

	.rail {
		position: absolute;
		top: 64px;
		bottom: 8px;
		left: 7px;
		border-left: 1px dotted var(--divider);
	}

	.year-group + .year-group {
		margin-top: 48px;
	}

	.group {
		font-size: var(--text-h3);
		font-weight: 600;
	}

	.roles {
		margin: 20px 0 0;
		padding: 0;
		list-style: none;
	}

	.roles > li + li {
		margin-top: 32px;
	}

	.role-entry {
		position: relative;
	}

	.role-entry::before {
		position: absolute;
		top: 0.35em;
		left: -35px;
		width: 14px;
		height: 14px;
		border: 3px solid var(--night);
		border-radius: 50%;
		background: var(--pink);
		content: '';
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

	.tags {
		display: flex;
		flex-wrap: wrap;
		gap: 8px;
		margin: 20px 0 0;
		padding: 0;
		list-style: none;
	}

	.tags li {
		padding: 4px 8px;
		background: var(--magenta);
		color: var(--paper);
		font-size: var(--text-caption);
		line-height: 1.4;
	}

	.education-heading {
		margin-top: 48px;
		padding-top: 20px;
		border-top: 1px solid var(--divider);
	}

	.education {
		margin-top: 24px;
	}
</style>
