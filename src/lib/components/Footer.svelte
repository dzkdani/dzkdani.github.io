<footer id="contact" class="footer">
	<p class="meta">Dzaki Adani, 2026</p>
	<a class="email" href="mailto:dzaky.adani@gmail.com">dzaky.adani@gmail.com</a>
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

	.email {
		color: var(--pink);
	}
</style>
