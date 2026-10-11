import { prefersReducedMotion } from 'svelte/motion';

// Reveal groups fade up once when they enter the viewport (DESIGN §7).
// Enhancement only: without IntersectionObserver, or with reduced motion,
// elements render in their final state and no state classes are added.
const MAX_DELAY = 240;

export function reveal(node: HTMLElement, delayMs = 0) {
	if (typeof IntersectionObserver === 'undefined' || prefersReducedMotion.current) {
		return;
	}

	const delay = Math.min(Math.max(delayMs, 0), MAX_DELAY);
	let observer: IntersectionObserver | null = new IntersectionObserver((entries) => {
		if (!entries.some((entry) => entry.isIntersecting)) return;
		observer?.disconnect();
		observer = null;
		node.style.transitionDelay = `${delay}ms`;
		node.classList.remove('reveal-pending');
		node.classList.add('reveal-visible');
	});

	node.classList.add('reveal-pending');
	observer.observe(node);

	return {
		destroy() {
			observer?.disconnect();
			observer = null;
		}
	};
}
