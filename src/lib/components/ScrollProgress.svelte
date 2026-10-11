<script lang="ts">
	import { prefersReducedMotion } from 'svelte/motion';

	// Document scroll progress, 0 to 1 (DESIGN §7: real progress only, never a score).
	let progress = $state(0);
	let frame = 0;

	function update() {
		frame = 0;
		const scrollable = document.documentElement.scrollHeight - window.innerHeight;
		progress = scrollable > 0 ? Math.min(1, Math.max(0, window.scrollY / scrollable)) : 0;
	}

	function onScroll() {
		if (!frame) frame = requestAnimationFrame(update);
	}

	$effect(() => {
		if (prefersReducedMotion.current) return;
		update();
		window.addEventListener('scroll', onScroll, { passive: true });
		window.addEventListener('resize', onScroll, { passive: true });
		return () => {
			window.removeEventListener('scroll', onScroll);
			window.removeEventListener('resize', onScroll);
			if (frame) cancelAnimationFrame(frame);
		};
	});
</script>

<div class="scroll-progress" aria-hidden="true">
	<div class="fill" style="transform: scaleX({progress})"></div>
</div>

<style>
	.scroll-progress {
		position: fixed;
		inset: 0 0 auto 0;
		z-index: 10;
		height: 2px;
		pointer-events: none;
	}

	.fill {
		height: 100%;
		background: var(--pink);
		transform-origin: 0 50%;
	}

	@media (prefers-reduced-motion: reduce) {
		.scroll-progress {
			display: none;
		}
	}
</style>
