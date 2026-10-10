<script lang="ts">
	import {
		education,
		email,
		experience,
		intro,
		linkedinUrl,
		recognition,
		upworkUrl,
		whatITakeOn
	} from '#lib/data/about.ts';
</script>

<section class="about">
	<div class="inner">
		<h1>About</h1>

		<!-- TODO(owner): portrait (optional, DESIGN §6). -->
		<p class="intro">{intro}</p>

		<h2>Experience</h2>
		<ul class="experience">
			{#each experience as job (job.company)}
				<li>
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
				</li>
			{/each}
		</ul>

		<h2>What I take on</h2>
		<ul class="takeon">
			{#each whatITakeOn as item (item)}
				<li>{item}</li>
			{/each}
		</ul>

		<h2>Education</h2>
		<p class="education">{education}</p>

		<h2>Recognition</h2>
		<ul class="recognition">
			{#each recognition.filter((item) => item.confirmed) as item (item.text)}
				<li>{item.text}</li>
			{/each}
		</ul>

		<h2>Other</h2>
		<ul class="other">
			<li><a href="/work/love-wars/">Love Wars</a>, a tabletop card game, not a digital build.</li>
		</ul>

		<h2>Contact</h2>
		<p class="contact">
			{#if email}
				<a href={`mailto:${email}`}>{email}</a>
			{:else}
				<!-- TODO(owner): email. -->
				<span>Email</span>
			{/if}
			{#if upworkUrl}
				<a href={upworkUrl}>Upwork</a>
			{/if}
			{#if linkedinUrl}
				<a href={linkedinUrl}>LinkedIn</a>
			{/if}
		</p>
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

	h3 {
		font-size: var(--text-body);
		font-weight: 600;
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

	.takeon,
	.recognition,
	.other {
		margin: 32px 0 0;
	}

	.education,
	.contact {
		margin-top: 32px;
	}

	.contact {
		display: flex;
		flex-wrap: wrap;
		gap: var(--gutter);
	}
</style>
