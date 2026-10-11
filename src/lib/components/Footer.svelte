<script lang="ts">
	import Icon from '#lib/components/Icon.svelte';
	import { email, githubUrl, itchUrl, linkedinUrl, upworkUrl } from '#lib/data/about.ts';
</script>

<footer class="footer">
	<p class="meta">Dzaki Adani, 2026</p>

	<ul class="contact" role="list">
		<li>
			<a href={`mailto:${email}`} aria-label="Email"><Icon name="email" /></a>
		</li>
		<li>
			<a href={linkedinUrl} aria-label="LinkedIn"><Icon name="linkedin" /></a>
		</li>
		<li>
			<a href={upworkUrl} aria-label="Upwork"><Icon name="upwork" /></a>
		</li>
		<li>
			<a href={githubUrl} aria-label="GitHub"><Icon name="github" /></a>
		</li>
		<li>
			<a href={itchUrl} aria-label="itch.io"><Icon name="itch" /></a>
		</li>
	</ul>
</footer>

<style>
	.footer {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: var(--gutter);
		padding: var(--gutter) var(--pad-x);
		background: var(--night);
		color: var(--paper);
		font-size: var(--text-small);
		/* Focus ring on night surfaces is pink, not magenta (DESIGN §9). */
		--focus-ring: var(--pink);
	}

	.contact {
		display: flex;
		align-items: center;
		gap: var(--gutter);
		margin: 0;
		padding: 0;
		list-style: none;
	}

	.contact a {
		display: inline-flex;
		color: var(--pink);
		font-size: 20px;
		/* Grow the hit area without moving the icons. */
		padding: 8px;
		margin: -8px;
	}

	@media (prefers-reduced-motion: no-preference) {
		.contact a:active {
			transform: translateY(1px);
		}
	}
</style>
