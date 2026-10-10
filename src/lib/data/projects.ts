// Every project from the DESIGN.md §11 inventory.
// Facts come only from DESIGN §1 and §11; missing facts are marked TODO(owner):.
// Rows whose inventory status reads "confirm" have no valid status value; 'tba' stands in until the owner confirms.

export type Project = {
	slug: string;
	title: string;
	area: 'edtech' | 'ar' | 'vr' | 'webgl' | 'game' | 'other';
	tech: string[];
	status: 'live' | 'demo' | 'preview' | 'restricted' | 'wip' | 'tba';
	client?: string;
	summary: string;
	role: string[];
	links: { label: string; url: string }[];
	media: { src: string; alt: string; kind: 'image' | 'video' | 'webgl' }[];
	featured?: boolean;
};

export const allProjects: Project[] = [
	{
		slug: 'ar-magazine',
		title: 'AR Magazine (Klikuark!)',
		area: 'ar',
		tech: ['Unity', 'Vuforia'],
		status: 'live',
		summary: 'An educational AR app built in Unity with Vuforia.',
		role: ['Scenario code', 'Gameplay flow', 'Asset integration', 'Scene mapping', 'Marker setup'],
		links: [{ label: 'Open the build', url: 'bit.ly/Klikuark' }],
		media: [], // TODO(owner): screenshots
		featured: true
	},
	{
		slug: 'senalapan-mold-cleaner',
		title: 'SENALAPAN Mold Cleaner Instructions',
		area: 'ar',
		tech: ['Unity', 'markerless AR'],
		status: 'live',
		summary: 'AR instructions for cleaning industrial molds, built in Unity with markerless AR.',
		role: ['Scenario code', 'Asset integration', 'Scene mapping', 'Gameplay flow'],
		links: [{ label: 'Open the build', url: 'bit.ly/2NJUJzi' }],
		media: [] // TODO(owner): screenshots
	},
	{
		slug: 'ar-name-card',
		title: 'AR Name Card',
		area: 'ar',
		tech: ['Unity', 'AR marker'],
		status: 'live',
		summary: 'An AR name card built in Unity with marker-based AR.',
		role: ['Scenario code', 'Asset integration', 'Scene mapping', 'Gameplay flow', 'Marker setup'],
		links: [{ label: 'Open the build', url: 'bit.ly/AR_NameCard' }],
		media: [] // TODO(owner): screenshots
	},
	{
		slug: '3d-house-ar-showcase',
		title: '3D House AR Showcase',
		area: 'ar',
		tech: ['Unity AR Foundation'],
		status: 'live',
		summary: 'An AR property showcase for a 3D house, built with Unity AR Foundation.',
		role: ['Scenario code', 'Asset integration', 'Scene mapping', 'Gameplay flow'],
		links: [{ label: 'Open the build', url: 'bit.ly/3fDQ7EW' }],
		media: [] // TODO(owner): screenshots
	},
	{
		slug: '3d-ar-covid-19-education',
		title: '3D AR COVID-19 Education',
		area: 'ar',
		tech: ['Unity AR Foundation'],
		status: 'live',
		summary: 'An AR education app about COVID-19, built with Unity AR Foundation.',
		role: ['Scenario code', 'Asset integration', 'Scene mapping', 'Gameplay flow'],
		links: [{ label: 'Open the build', url: 'bit.ly/3f8WVM1' }],
		media: [] // TODO(owner): screenshots
	},
	{
		slug: '3d-ar-tarpaulin-pond',
		title: '3D AR Tarpaulin Pond, Lobster Cultivation',
		area: 'ar',
		tech: ['Unity AR Foundation'],
		status: 'live',
		summary: 'A 3D AR model of a tarpaulin pond for lobster cultivation, built with Unity AR Foundation.',
		role: ['Scenario code', 'Asset integration', 'Scene mapping', 'Gameplay flow'],
		links: [{ label: 'Open the build', url: 'bit.ly/3bIQEEA' }],
		media: [] // TODO(owner): screenshots
	},
	{
		slug: 'giz-solar-panel-vr',
		title: 'GIZ Solar Panel VR',
		area: 'vr',
		tech: ['Unity VR'],
		status: 'preview',
		summary: 'A solar panel VR training app, built in Unity VR.',
		role: ['Scenario code', 'Asset integration', 'Scene mapping', 'Gameplay flow'],
		links: [{ label: 'Open the preview', url: 'bit.ly/37xRt0L' }],
		media: [] // TODO(owner): screenshots
	},
	{
		slug: 'petro-360-tour',
		title: 'Petro 360 Tour',
		area: 'other', // 360 tour does not fit the EdTech/AR/VR/WebGL/game areas.
		tech: ['Unity', 'Mapbox', 'REST API'],
		status: 'restricted',
		summary: 'A Unity 360 tour linked to maps, built with Mapbox and a REST API.',
		role: ['Scenario code', 'Asset integration', 'Scene mapping', 'Gameplay flow'],
		links: [],
		media: [] // TODO(owner): screenshots (restricted project)
	},
	{
		slug: 'math-adventure',
		title: 'Math-Adventure',
		area: 'edtech',
		tech: ['Unity 2D', 'Addressables', 'IAP'],
		status: 'live',
		summary: 'An educational math game built in Unity 2D with addressable content and in-app purchases.',
		role: ['Scenario code', 'Asset integration', 'Scene mapping', 'Gameplay flow'],
		links: [], // TODO(owner): link
		media: [], // TODO(owner): screenshots
		featured: true
	},
	{
		slug: 'explore-math',
		title: 'Explore Math',
		area: 'edtech',
		tech: ['Unity 2D', 'drag and drop'],
		status: 'live',
		summary: 'An educational math game built in Unity 2D with drag-and-drop interactions.',
		role: ['Scenario code', 'Asset integration', 'Scene mapping', 'Gameplay flow'],
		links: [], // TODO(owner): link
		media: [] // TODO(owner): screenshots
	},
	{
		slug: 'chem',
		title: 'Chem',
		area: 'edtech',
		tech: ['Unity 2D'],
		status: 'live',
		summary: 'An educational chemistry game built in Unity 2D.',
		role: ['Scenario code', 'Asset integration', 'Scene mapping', 'Gameplay flow'],
		links: [], // TODO(owner): link
		media: [] // TODO(owner): screenshots
	},
	{
		slug: 'simple-mini-quiz-game',
		title: 'Simple Mini Quiz Game',
		area: 'edtech',
		tech: ['Construct 2', 'JSON'],
		status: 'live',
		summary: 'An educational quiz game built in Construct 2 with JSON-driven content.',
		role: ['Scenario code', 'Asset integration', 'Scene mapping', 'Gameplay flow'],
		links: [], // TODO(owner): link
		media: [] // TODO(owner): screenshots
	},
	{
		slug: 'guess-color-quiz',
		title: 'Guess Color Quiz',
		area: 'edtech',
		tech: ['Unity 2D', 'AdMob'],
		status: 'live',
		summary: 'An educational trivia game about guessing colors, built in Unity 2D with AdMob ads.',
		role: ['Scenario code', 'Asset integration', 'Scene mapping', 'Gameplay flow'],
		links: [], // TODO(owner): link
		media: [] // TODO(owner): screenshots
	},
	{
		slug: 'wonder-word',
		title: 'Wonder Word',
		area: 'edtech',
		tech: ['Unity 2D', 'AdMob'],
		status: 'live',
		summary: 'An educational word game built in Unity 2D with AdMob ads.',
		role: ['Scenario code', 'Asset integration', 'Scene mapping', 'Gameplay flow'],
		links: [], // TODO(owner): link
		media: [] // TODO(owner): screenshots
	},
	{
		slug: 'forestdom',
		title: 'Forestdom',
		area: 'game',
		tech: ['Unity 2D', 'AdMob'],
		status: 'live',
		summary: 'A trivia game built in Unity 2D with AdMob ads.',
		role: ['Scenario code', 'Asset integration', 'Scene mapping', 'Gameplay flow'],
		links: [], // TODO(owner): link
		media: [] // TODO(owner): screenshots
	},
	{
		slug: 'memories',
		title: 'Memories',
		area: 'game',
		tech: ['Unity 2D', 'API integration'],
		status: 'tba', // TODO(owner): status
		summary: 'A visual novel built in Unity 2D with API integration.',
		role: ['Scenario code', 'Asset integration', 'Scene mapping', 'Gameplay flow'],
		links: [], // TODO(owner): link
		media: [] // TODO(owner): screenshots
	},
	{
		slug: 'far-from-shore',
		title: 'Far From Shore',
		area: 'webgl',
		tech: ['Unity', 'WebGL'],
		status: 'demo',
		summary: 'A narrative survival game that plays in the browser, built in Unity with WebGL.',
		role: ['Scenario code', 'Asset integration', 'Scene mapping', 'Gameplay flow'],
		links: [], // TODO(owner): link
		media: [], // TODO(owner): screenshots
		featured: true
	},
	{
		slug: 'little-muslim-heroes-edufic',
		title: 'Little Muslim Heroes, Edufic',
		area: 'edtech',
		tech: ['Unity WebGL'],
		status: 'tba',
		summary: 'An Islamic educational game built in Unity WebGL.',
		role: ['Scenario code', 'Asset integration', 'Scene mapping', 'Gameplay flow'],
		links: [], // TODO(owner): link
		media: [] // TODO(owner): screenshots
	},
	{
		slug: 'purring-post-and-delivery',
		title: 'Purring Post & Delivery',
		area: 'game',
		tech: ['Unity 2D'],
		status: 'wip',
		summary: 'A narrative management game built in Unity 2D, nominated for Best Pitch at GameJamPlus Indonesia 23/24.',
		role: ['Scenario code', 'Asset integration', 'Scene mapping', 'Gameplay flow'],
		links: [], // TODO(owner): link
		media: [] // TODO(owner): screenshots
	},
	{
		slug: 'petal-pals',
		title: 'Petal Pals',
		area: 'game',
		tech: ['Unity 2D'],
		status: 'tba',
		summary: 'A desktop companion built in Unity 2D.',
		role: ['Scenario code', 'Asset integration', 'Scene mapping', 'Gameplay flow'],
		links: [], // TODO(owner): link
		media: [] // TODO(owner): screenshots
	},
	{
		slug: 'juggler-endless-3d',
		title: 'Juggler (Endless 3D)',
		area: 'game',
		tech: ['Unity 3D'],
		status: 'live',
		summary: 'A casual endless 3D game built in Unity 3D.',
		role: ['Scenario code', 'Asset integration', 'Scene mapping', 'Gameplay flow'],
		links: [], // TODO(owner): link
		media: [] // TODO(owner): screenshots
	},
	{
		slug: 'buto-beat',
		title: 'Buto Beat',
		area: 'game',
		tech: ['Unity 2D'],
		status: 'live',
		summary: 'A music shooter built in Unity 2D.',
		role: ['Scenario code', 'Asset integration', 'Scene mapping', 'Gameplay flow'],
		links: [], // TODO(owner): link
		media: [] // TODO(owner): screenshots
	},
	{
		slug: 'paradixe-city',
		title: 'Paradixe City',
		area: 'game',
		tech: ['Construct 2'],
		status: 'live',
		summary: 'A local co-op shooter built in Construct 2.',
		role: ['Scenario code', 'Asset integration', 'Scene mapping', 'Gameplay flow'],
		links: [], // TODO(owner): link
		media: [] // TODO(owner): screenshots
	},
	{
		slug: 'flappyrabbit',
		title: 'FlappyRabbit',
		area: 'game',
		tech: ['Unity 2D', 'IAP', 'AdMob'],
		status: 'tba', // TODO(owner): status
		summary: 'A hypercasual game built in Unity 2D with in-app purchases and AdMob ads.',
		role: ['Scenario code', 'Asset integration', 'Scene mapping', 'Gameplay flow'],
		links: [], // TODO(owner): link
		media: [] // TODO(owner): screenshots
	},
	{
		slug: 'g-escape',
		title: 'G-Escape',
		area: 'game',
		tech: ['Unity 2D', 'IAP'],
		status: 'tba', // TODO(owner): status
		summary: 'An action shooter for a client, built in Unity 2D with in-app purchases.',
		role: ['Scenario code', 'Asset integration', 'Scene mapping', 'Gameplay flow'],
		links: [], // TODO(owner): link
		media: [] // TODO(owner): screenshots
	},
	{
		slug: 'love-wars',
		title: 'Love Wars',
		area: 'other',
		tech: [], // Love Wars is not digital, so there is no tech stack.
		status: 'tba', // TODO(owner): status
		summary: 'A tabletop card game, not a digital build.',
		role: ['TODO(owner): role'],
		links: [], // TODO(owner): link
		media: [] // TODO(owner): screenshots
	}
];

export const featuredProjects: Project[] = allProjects.filter((project) => project.featured);

export function projectBySlug(slug: string): Project | undefined {
	return allProjects.find((project) => project.slug === slug);
}

export const slugs: string[] = allProjects.map((project) => project.slug);
