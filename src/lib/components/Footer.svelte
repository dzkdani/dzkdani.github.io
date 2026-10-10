<footer id="contact" class="footer">
	<p class="meta">Dzaki Adani, 2026</p>
	<!-- TODO(owner): add the real email address; DESIGN §6 wants it as a mailto link in the footer. -->
	<p class="email">Email</p>
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
