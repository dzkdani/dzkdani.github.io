<script lang="ts">
	import { asset } from '$app/paths';
	import type { Media } from '#lib/data/projects.ts';

	type Props = {
		media?: Media | null;
		title?: string;
		area?: string;
		aspect?: string;
	};

	let { media = null, title = '', area = '', aspect = '9 / 16' }: Props = $props();

	const hasMedia = $derived(media !== null && media.kind !== 'webgl');

	// Media renders at its native aspect ratio; the aspect prop is the placeholder fallback.
	const ratio = $derived(media && media.aspect ? String(media.aspect) : aspect);

	// asset() is typed against the files that exist in static/ today; media paths arrive as data strings.
	const url = (path: string) => asset(path as Parameters<typeof asset>[0]);
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
		<img src={url(media.src)} alt={media.alt} />
	{:else}
		{#if title}
			<p class="frame-title">{title}</p>
		{/if}
		{#if area}
			<p class="frame-area">{area}</p>
		{/if}
	{/if}
</div>

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
</style>
