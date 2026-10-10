// Every project from the DESIGN.md §11 inventory (v0.2).
// Facts come only from DESIGN §1 and §11; missing facts are marked TODO(owner):.
// Rows with no valid status value in the inventory use 'tba' as a placeholder until the owner confirms.

export type Media = {
	src: string;
	alt: string;
	kind: 'image' | 'video' | 'webgl';
	/** Small derivative for the hero frame and index thumbnails (DESIGN §8 thumbnails). */
	thumb?: string;
	/** Video only: WebM source alongside the H.264 MP4 in src (DESIGN §8). */
	webm?: string;
	/** Video only: poster image shown before the clip plays (DESIGN §8). */
	poster?: string;
};

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
	media: Media[];
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
		media: [
			{ kind: 'image', src: 'media/ar-magazine/shot-1.webp', thumb: 'media/ar-magazine/shot-1-thumb.webp', alt: 'AR Magazine (Klikuark!): screenshot 1' },
			{ kind: 'image', src: 'media/ar-magazine/shot-2.webp', alt: 'AR Magazine (Klikuark!): screenshot 2' },
			{ kind: 'image', src: 'media/ar-magazine/shot-3.webp', alt: 'AR Magazine (Klikuark!): screenshot 3' },
			{ kind: 'image', src: 'media/ar-magazine/shot-4.webp', alt: 'AR Magazine (Klikuark!): screenshot 4' }
		],
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
		media: [
			{ kind: 'image', src: 'media/senalapan-mold-cleaner/shot-1.webp', thumb: 'media/senalapan-mold-cleaner/shot-1-thumb.webp', alt: 'SENALAPAN Mold Cleaner Instructions: screenshot 1' },
			{ kind: 'image', src: 'media/senalapan-mold-cleaner/shot-2.webp', alt: 'SENALAPAN Mold Cleaner Instructions: screenshot 2' },
			{ kind: 'image', src: 'media/senalapan-mold-cleaner/shot-3.webp', alt: 'SENALAPAN Mold Cleaner Instructions: screenshot 3' }
		]
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
		media: [
			{ kind: 'image', src: 'media/ar-name-card/shot-1.webp', thumb: 'media/ar-name-card/shot-1-thumb.webp', alt: 'AR Name Card: screenshot 1' }
		]
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
		media: [
			{ kind: 'image', src: 'media/3d-house-ar-showcase/shot-1.webp', thumb: 'media/3d-house-ar-showcase/shot-1-thumb.webp', alt: '3D House AR Showcase: screenshot 1' },
			{ kind: 'image', src: 'media/3d-house-ar-showcase/shot-2.webp', alt: '3D House AR Showcase: screenshot 2' }
		]
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
		media: [
			{ kind: 'image', src: 'media/3d-ar-covid-19-education/shot-1.webp', thumb: 'media/3d-ar-covid-19-education/shot-1-thumb.webp', alt: '3D AR COVID-19 Education: screenshot 1' }
		]
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
		media: [
			{ kind: 'image', src: 'media/3d-ar-tarpaulin-pond/shot-1.webp', thumb: 'media/3d-ar-tarpaulin-pond/shot-1-thumb.webp', alt: '3D AR Tarpaulin Pond, Lobster Cultivation: screenshot 1' }
		]
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
		media: [
			{ kind: 'image', src: 'media/giz-solar-panel-vr/shot-1.webp', thumb: 'media/giz-solar-panel-vr/shot-1-thumb.webp', alt: 'GIZ Solar Panel VR: screenshot 1' },
			{ kind: 'image', src: 'media/giz-solar-panel-vr/shot-2.webp', alt: 'GIZ Solar Panel VR: screenshot 2' }
		]
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
		links: [{ label: 'Open the site', url: 'https://www.smartadventure.id/' }],
		media: [
			{ kind: 'image', src: 'media/math-adventure/shot-1.webp', thumb: 'media/math-adventure/shot-1-thumb.webp', alt: 'Math-Adventure: screenshot 1' },
			{ kind: 'image', src: 'media/math-adventure/shot-2.webp', alt: 'Math-Adventure: screenshot 2' },
			{ kind: 'image', src: 'media/math-adventure/shot-3.webp', alt: 'Math-Adventure: screenshot 3' }
		],
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
		links: [
			{
				label: 'Open on Google Play',
				url: 'https://play.google.com/store/apps/details?id=com.LFourTech.ExploreMath'
			}
		],
		media: [
			{ kind: 'image', src: 'media/explore-math/shot-1.webp', thumb: 'media/explore-math/shot-1-thumb.webp', alt: 'Explore Math: screenshot 1' },
			{ kind: 'image', src: 'media/explore-math/shot-2.webp', alt: 'Explore Math: screenshot 2' }
		]
	},
	{
		slug: 'chem',
		title: 'Chem',
		area: 'edtech',
		tech: ['Unity 2D'],
		status: 'live',
		summary: 'An educational chemistry game built in Unity 2D.',
		role: ['Scenario code', 'Asset integration', 'Scene mapping', 'Gameplay flow'],
		links: [{ label: 'Open on itch.io', url: 'https://dzkdani.itch.io/running-chem' }],
		media: [
			{ kind: 'image', src: 'media/chem/shot-1.webp', thumb: 'media/chem/shot-1-thumb.webp', alt: 'Chem: screenshot 1' },
			{ kind: 'image', src: 'media/chem/shot-2.webp', alt: 'Chem: screenshot 2' }
		]
	},
	{
		slug: 'simple-mini-quiz-game',
		title: 'Simple Mini Quiz Game',
		area: 'edtech',
		tech: ['Construct 2', 'JSON'],
		status: 'live',
		summary: 'An educational quiz game built in Construct 2 with JSON-driven content.',
		role: ['Scenario code', 'Asset integration', 'Scene mapping', 'Gameplay flow'],
		links: [{ label: 'Open on itch.io', url: 'https://dzkdani.itch.io/quiz-kimia' }],
		media: [
			{ kind: 'image', src: 'media/simple-mini-quiz-game/shot-1.webp', thumb: 'media/simple-mini-quiz-game/shot-1-thumb.webp', alt: 'Simple Mini Quiz Game: screenshot 1' },
			{ kind: 'image', src: 'media/simple-mini-quiz-game/shot-2.webp', alt: 'Simple Mini Quiz Game: screenshot 2' }
		]
	},
	{
		slug: 'guess-color-quiz',
		title: 'Guess Color Quiz',
		area: 'edtech',
		tech: ['Unity 2D', 'AdMob'],
		status: 'live',
		summary: 'An educational trivia game about guessing colors, built in Unity 2D with AdMob ads.',
		role: ['Scenario code', 'Asset integration', 'Scene mapping', 'Gameplay flow'],
		links: [
			{
				label: 'Open on Google Play',
				url: 'https://play.google.com/store/apps/details?id=com.sepay.kidsguesscolor'
			}
		],
		media: [
			{ kind: 'image', src: 'media/guess-color-quiz/shot-1.webp', thumb: 'media/guess-color-quiz/shot-1-thumb.webp', alt: 'Guess Color Quiz: screenshot 1' }
		]
	},
	{
		slug: 'guess-animal',
		title: 'Guess Animal',
		area: 'edtech',
		tech: ['Unity 2D', 'AdMob'],
		status: 'live',
		summary:
			'An educational guessing game built in Unity 2D with randomly generated content and AdMob ads.',
		role: ['Scenario code', 'Asset integration', 'Scene mapping', 'Gameplay flow'],
		links: [
			{
				label: 'Open on Google Play',
				url: 'https://play.google.com/store/apps/details?id=com.siakew.guessanimal'
			}
		],
		media: [
			{ kind: 'image', src: 'media/guess-animal/shot-1.webp', thumb: 'media/guess-animal/shot-1-thumb.webp', alt: 'Guess Animal: screenshot 1' }
		],
	},
	{
		slug: 'wonder-word',
		title: 'Wonder Word',
		area: 'edtech',
		tech: ['Unity 2D', 'AdMob'],
		status: 'live',
		summary: 'An educational word game built in Unity 2D with AdMob ads.',
		role: ['Scenario code', 'Asset integration', 'Scene mapping', 'Gameplay flow'],
		links: [
			{
				label: 'Open on Google Play',
				url: 'https://play.google.com/store/apps/details?id=com.siakew.WonderWord'
			}
		],
		media: [
			{ kind: 'image', src: 'media/wonder-word/shot-1.webp', thumb: 'media/wonder-word/shot-1-thumb.webp', alt: 'Wonder Word: screenshot 1' },
			{ kind: 'image', src: 'media/wonder-word/shot-2.webp', alt: 'Wonder Word: screenshot 2' }
		]
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
		title: 'Memories: My Story My Choices',
		area: 'game',
		tech: ['Unity 2D', 'API integration'],
		status: 'live',
		summary: 'A visual novel kept up to date with a UI rework and bug fixes from QC reports.',
		role: ['Reworked and maintained the game', 'UI rework with the UI/UX designer', 'Bug fixes from QC reports'],
		links: [
			{
				label: 'Open on Google Play',
				url: 'https://play.google.com/store/apps/details?id=com.agatestudio.ciayostories&pcampaignid=web_share'
			}
		],
		media: [
			{ kind: 'image', src: 'media/memories/shot-1.webp', thumb: 'media/memories/shot-1-thumb.webp', alt: 'Memories: My Story My Choices: screenshot 1' },
			{ kind: 'image', src: 'media/memories/shot-2.webp', alt: 'Memories: My Story My Choices: screenshot 2' }
		]
	},
	{
		slug: 'far-from-shore',
		title: 'Far From Shore',
		area: 'webgl',
		tech: ['Unity', 'WebGL'],
		status: 'demo',
		summary: 'A narrative survival game that plays in the browser, built in Unity with WebGL.',
		role: ['Scenario code', 'Asset integration', 'Scene mapping', 'Gameplay flow'],
		links: [{ label: 'Open on itch.io', url: 'https://dzkdani.itch.io/ffs-demo' }],
		media: [
			{ kind: 'image', src: 'media/far-from-shore/shot-1.webp', thumb: 'media/far-from-shore/shot-1-thumb.webp', alt: 'Far From Shore: screenshot 1' }
		],
		featured: true
	},
	{
		slug: 'little-muslim-heroes-edufic',
		title: 'Little Muslim Heroes, Edufic',
		area: 'edtech',
		tech: ['Unity WebGL'],
		status: 'wip',
		summary: 'A gamified web platform about the journey of the Prophet Muhammad, built in Unity WebGL.',
		role: ['Scenario code', 'Asset integration', 'Scene mapping', 'Gameplay flow'],
		links: [{ label: 'Open the site', url: 'game.eduficglobal.id' }],
		media: [
			{ kind: 'image', src: 'media/little-muslim-heroes-edufic/shot-1.webp', thumb: 'media/little-muslim-heroes-edufic/shot-1-thumb.webp', alt: 'Little Muslim Heroes, Edufic: screenshot 1' },
			{ kind: 'image', src: 'media/little-muslim-heroes-edufic/shot-2.webp', alt: 'Little Muslim Heroes, Edufic: screenshot 2' },
			{ kind: 'image', src: 'media/little-muslim-heroes-edufic/shot-3.webp', alt: 'Little Muslim Heroes, Edufic: screenshot 3' }
		]
	},
	{
		slug: 'purring-post-and-delivery',
		title: 'Purring Post & Delivery',
		area: 'game',
		tech: ['Unity 2D'],
		status: 'wip',
		summary: 'A narrative management game built in Unity 2D, nominated for Best Pitch at GameJam+ Indonesia 23/24.',
		role: ['Scenario code', 'Asset integration', 'Scene mapping', 'Gameplay flow'],
		links: [
			{ label: 'Open on itch.io', url: 'https://dhaniy.itch.io/purring-post-and-delivery' }
		],
		media: [
			{ kind: 'image', src: 'media/purring-post-and-delivery/shot-1.webp', thumb: 'media/purring-post-and-delivery/shot-1-thumb.webp', alt: 'Purring Post & Delivery: screenshot 1' },
			{ kind: 'image', src: 'media/purring-post-and-delivery/shot-2.webp', alt: 'Purring Post & Delivery: screenshot 2' },
			{ kind: 'image', src: 'media/purring-post-and-delivery/shot-3.webp', alt: 'Purring Post & Delivery: screenshot 3' },
			{ kind: 'image', src: 'media/purring-post-and-delivery/shot-4.webp', alt: 'Purring Post & Delivery: screenshot 4' }
		]
	},
	{
		slug: 'petal-pals',
		title: 'Petal Pals',
		area: 'game',
		tech: ['Unity 2D'],
		status: 'wip',
		summary: 'A desktop companion monster-collection game built in Unity 2D, updated during playtests.',
		role: ['Feature updates', 'Bug fixes during playtests', 'Feature design, including gacha and evolution'],
		links: [{ label: 'Open on Steam', url: 'https://store.steampowered.com/app/4146150/Petal_Pals' }],
		media: [
			{ kind: 'image', src: 'media/petal-pals/shot-1.webp', thumb: 'media/petal-pals/shot-1-thumb.webp', alt: 'Petal Pals: screenshot 1' },
			{ kind: 'image', src: 'media/petal-pals/shot-2.webp', alt: 'Petal Pals: screenshot 2' }
		]
	},
	{
		slug: 'goddess-summoner-katsi-idle',
		title: 'Goddess Summoner: Katsi Idle, mining mini-game',
		area: 'game',
		tech: [], // TODO(owner): tech
		status: 'tba', // TODO(owner): status
		summary: 'A mining mini-game designed and built for the idle game Goddess Summoner: Katsi Idle.',
		role: ['Designed the mini-game', 'Built the mini-game'],
		links: [], // TODO(owner): link
		media: [] // TODO(owner): screenshots
	},
	{
		slug: 'zepeto-multiplayer-3d-game',
		title: 'Zepeto multiplayer 3D game',
		area: 'game',
		tech: ['Unity', 'TypeScript'],
		status: 'tba', // TODO(owner): status
		summary: 'A multiplayer 3D game built for Zepeto in Unity and TypeScript.',
		role: ['Built the multiplayer 3D game', 'Gameplay code in TypeScript'],
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
		links: [
			{
				label: 'Open on Google Play',
				url: 'https://play.google.com/store/apps/details?id=com.kelompok4.balljuggler'
			}
		],
		media: [
			{ kind: 'image', src: 'media/juggler-endless-3d/shot-1.webp', thumb: 'media/juggler-endless-3d/shot-1-thumb.webp', alt: 'Juggler (Endless 3D): screenshot 1' },
			{ kind: 'image', src: 'media/juggler-endless-3d/shot-2.webp', alt: 'Juggler (Endless 3D): screenshot 2' }
		]
	},
	{
		slug: 'buto-beat',
		title: 'Buto Beat',
		area: 'game',
		tech: ['Unity 2D'],
		status: 'live',
		summary: 'A music shooter built in Unity 2D.',
		role: ['Scenario code', 'Asset integration', 'Scene mapping', 'Gameplay flow'],
		links: [{ label: 'Open on itch.io', url: 'https://dzkdani.itch.io/buto-beat' }],
		media: [
			{ kind: 'image', src: 'media/buto-beat/shot-1.webp', thumb: 'media/buto-beat/shot-1-thumb.webp', alt: 'Buto Beat: screenshot 1' }
		]
	},
	{
		slug: 'paradixe-city',
		title: 'Paradixe City',
		area: 'game',
		tech: ['Construct 2'],
		status: 'live',
		summary: 'A local co-op shooter built in Construct 2.',
		role: ['Scenario code', 'Asset integration', 'Scene mapping', 'Gameplay flow'],
		links: [{ label: 'Open on itch.io', url: 'https://dzkdani.itch.io/p-tank' }],
		media: [
			{ kind: 'image', src: 'media/paradixe-city/shot-1.webp', thumb: 'media/paradixe-city/shot-1-thumb.webp', alt: 'Paradixe City: screenshot 1' }
		]
	},
	{
		slug: 'flappyrabbit',
		title: 'FlappyRabbit',
		area: 'game',
		tech: ['Unity 2D', 'IAP', 'AdMob'],
		status: 'tba', // TODO(owner): status
		summary: 'A hypercasual game built in Unity 2D with in-app purchases and AdMob ads.',
		role: ['Scenario code', 'Asset integration', 'Scene mapping', 'Gameplay flow'],
		links: [
			{
				label: 'Open on Google Play',
				url: 'https://play.google.com/store/apps/details?id=com.siakew.FlappyRabbit'
			}
		],
		media: [
			{ kind: 'image', src: 'media/flappyrabbit/shot-1.webp', thumb: 'media/flappyrabbit/shot-1-thumb.webp', alt: 'FlappyRabbit: screenshot 1' },
			{ kind: 'image', src: 'media/flappyrabbit/shot-2.webp', alt: 'FlappyRabbit: screenshot 2' },
			{ kind: 'image', src: 'media/flappyrabbit/shot-3.webp', alt: 'FlappyRabbit: screenshot 3' }
		]
	},
	{
		slug: 'g-escape',
		title: 'G-Escape',
		area: 'game',
		tech: ['Unity 2D', 'IAP'],
		status: 'tba', // TODO(owner): status
		summary: 'An action shooter for a client, built in Unity 2D with in-app purchases.',
		role: ['Scenario code', 'Asset integration', 'Scene mapping', 'Gameplay flow'],
		links: [
			{
				label: 'Open on Google Play',
				url: 'https://play.google.com/store/apps/details?id=com.StrategyMax.GEscape'
			}
		],
		media: [
			{ kind: 'image', src: 'media/g-escape/shot-1.webp', thumb: 'media/g-escape/shot-1-thumb.webp', alt: 'G-Escape: screenshot 1' },
			{ kind: 'image', src: 'media/g-escape/shot-2.webp', alt: 'G-Escape: screenshot 2' },
			{ kind: 'image', src: 'media/g-escape/shot-3.webp', alt: 'G-Escape: screenshot 3' }
		]
	},
	{
		slug: 'love-wars',
		title: 'Love Wars',
		area: 'other',
		tech: [], // Love Wars is not digital, so there is no tech stack.
		status: 'tba', // TODO(owner): status
		summary: 'A tabletop card game, not a digital build.',
		role: ['TODO(owner): role'],
		links: [
			{
				label: 'Open the rulebook',
				url: 'https://drive.google.com/file/d/1TZ9LeB5DuWlcbH44nmbEVeOVRQai1IkJ/view?usp=sharing'
			}
		],
		media: [
			{ kind: 'image', src: 'media/love-wars/shot-1.webp', thumb: 'media/love-wars/shot-1-thumb.webp', alt: 'Love Wars: screenshot 1' }
		]
	}
];

export const featuredProjects: Project[] = allProjects.filter((project) => project.featured);

export function projectBySlug(slug: string): Project | undefined {
	return allProjects.find((project) => project.slug === slug);
}

export const slugs: string[] = allProjects.map((project) => project.slug);

// The still used by the hero frame and the work-index thumbnails:
// the first image, or a video's poster when there is no image.
export function projectStill(project: Project): Media | null {
	const image = project.media.find((item) => item.kind === 'image');
	if (image) return image.thumb ? { ...image, src: image.thumb } : image;
	const video = project.media.find((item) => item.kind === 'video' && item.poster);
	return video && video.poster ? { src: video.poster, alt: video.alt, kind: 'image' } : null;
}
