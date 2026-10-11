<script lang="ts">
	import { asset } from '$app/paths';
	import type { Media } from '#lib/data/projects.ts';

	type Props = {
		media?: Media | null;
		title?: string;
		area?: string;
		aspect?: string;
		/** Forces one ratio for grids that crop, like the work cards; without it, media keeps its native aspect. */
		frameRatio?: string;
		/** Opens a full-screen zoom viewer when the image is clicked. Use where the frame is not inside a link. */
		zoomable?: boolean;
	};

	let {
		media = null,
		title = '',
		area = '',
		aspect = '9 / 16',
		frameRatio = '',
		zoomable = false
	}: Props = $props();

	const hasMedia = $derived(media !== null && media.kind !== 'webgl');
	const canZoom = $derived(zoomable && media !== null && media.kind === 'image');

	// Media renders at its native aspect ratio; the aspect prop is the placeholder fallback.
	const ratio = $derived(frameRatio || (media && media.aspect ? String(media.aspect) : aspect));

	// asset() is typed against the files that exist in static/ today; media paths arrive as data strings.
	const url = (path: string) => asset(path as Parameters<typeof asset>[0]);

	let dialogEl: HTMLDialogElement | undefined = $state();
	let zoomImgEl: HTMLImageElement | undefined = $state();
	let zoomed = $state(false);
	let zoomWidth = $state(0);

	function openZoom() {
		if (!dialogEl) return;
		zoomed = false;
		dialogEl.showModal();
	}

	function closeZoom() {
		dialogEl?.close();
	}

	function toggleZoom() {
		if (!zoomImgEl) return;
		if (zoomed) {
			zoomed = false;
			return;
		}
		// Zoom to at least 1.5x the fitted size, and to full resolution when that is
		// larger (some screenshots are only a few hundred pixels wide to begin with).
		const fit = zoomImgEl.getBoundingClientRect().width;
		zoomWidth = Math.round(Math.max(zoomImgEl.naturalWidth, fit * 1.5));
		zoomed = true;
	}

	function onDialogClick(event: MouseEvent) {
		// A click on the dialog itself is a click on the backdrop or its padding.
		if (event.target === dialogEl) closeZoom();
	}
</script>

<div class="frame" class:placeholder={!hasMedia} style="aspect-ratio: {ratio}">
	{#if media && media.kind === 'video'}
		<video
			autoplay
			muted
			loop
			playsinline
			poster={media.poster ? url(media.poster) : undefined}
			aria-label={media.alt}
		>
			<source src={url(media.src)} type="video/mp4" />
			{#if media.webm}
				<source src={url(media.webm)} type="video/webm" />
			{/if}
		</video>
	{:else if media && media.kind === 'image'}
		{#if zoomable}
			<button type="button" class="zoom-trigger" aria-label="Open image viewer" onclick={openZoom}>
				<img src={url(media.src)} alt={media.alt} />
			</button>
		{:else}
			<img src={url(media.src)} alt={media.alt} />
		{/if}
	{:else}
		{#if title}
			<p class="frame-title">{title}</p>
		{/if}
		{#if area}
			<p class="frame-area">{area}</p>
		{/if}
	{/if}
</div>

{#if canZoom && media && media.kind === 'image'}
	<dialog bind:this={dialogEl} class="zoomer" aria-label={media.alt} onclick={onDialogClick}>
		<button type="button" class="zoom-close" aria-label="Close" onclick={closeZoom}>×</button>
		<button
			type="button"
			class="zoom-image"
			class:zoomed
			aria-label="Toggle zoom"
			onclick={toggleZoom}
		>
			<img
				bind:this={zoomImgEl}
				style={zoomed ? `width: ${zoomWidth}px` : ''}
				src={url(media.src)}
				alt={media.alt}
			/>
		</button>
	</dialog>
{/if}

<style>
	.frame {
		position: relative;
		width: 100%;
		background: var(--ink);
		color: var(--paper);
		border: 1px solid var(--divider);
		border-radius: var(--radius-phone);
		overflow: hidden;
	}

	.frame.placeholder {
		padding: 20px;
	}

	.frame img,
	.frame video {
		position: absolute;
		inset: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.frame-title {
		font-weight: 600;
	}

	.frame-title + .frame-area {
		margin-top: 6px;
	}

	.frame-area {
		font-size: var(--text-small);
		color: var(--muted);
	}

	.zoom-trigger {
		position: absolute;
		inset: 0;
		display: block;
		width: 100%;
		height: 100%;
		padding: 0;
		border: 0;
		background: none;
		cursor: zoom-in;
	}

	/* The zoom viewer: a native dialog, so Esc and focus handling come for free. */
	.zoomer {
		display: flex;
		width: 100vw;
		max-width: none;
		height: 100vh;
		max-height: none;
		margin: 0;
		padding: 24px;
		border: 0;
		background: transparent;
		overflow: auto;
	}

	.zoomer::backdrop {
		background: var(--night);
	}

	.zoom-close {
		position: fixed;
		top: 16px;
		right: 16px;
		width: 44px;
		height: 44px;
		padding: 0;
		border: 0;
		background: none;
		color: var(--pink);
		font-size: 28px;
		line-height: 1;
		cursor: pointer;
	}

	.zoom-image {
		display: block;
		/* Centers while it fits; collapses to the start edge when zoomed, so scrolling reaches everything. */
		margin: auto;
		padding: 0;
		border: 0;
		background: none;
		cursor: zoom-in;
	}

	.zoom-image.zoomed {
		cursor: zoom-out;
	}

	.zoom-image img {
		display: block;
		width: auto;
		height: auto;
		max-width: calc(100vw - 48px);
		max-height: calc(100vh - 48px);
	}

	.zoom-image.zoomed img {
		max-width: none;
		max-height: none;
	}

	@media (prefers-reduced-motion: no-preference) {
		.frame img,
		.frame video {
			transition: transform var(--dur-medium) var(--ease-out);
		}

		.frame:hover img,
		.frame:hover video {
			transform: scale(1.04);
		}
	}
</style>
