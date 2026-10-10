import { slugs } from '#lib/data/projects.ts';
import type { EntryGenerator } from './$types';

export const prerender = true;

export const entries: EntryGenerator = () => {
	return slugs.map((slug) => ({ slug }));
};
