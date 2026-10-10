// Every project from the DESIGN.md §11 inventory (v0.2).
// Facts come only from DESIGN §1 and §11; missing facts are marked TODO(owner):.
// Rows with no valid status value in the inventory use 'tba' as a placeholder until the owner confirms.

export type Media = {
	src: string;
	alt: string;
	kind: 'image' | 'video' | 'webgl';
	/** Small derivative for the hero frame and index thumbnails (DESIGN §8 thumbnails). */
	thumb?: string;
	/** Width divided by height of the original image; frames render at this ratio. */
	aspect?: number;
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
			{ kind: 'image', src: 'media/ar-magazine/shot-1.webp', aspect: 1.51, thumb: 'media/ar-magazine/shot-1-thumb.webp', alt: 'AR Magazine (Klikuark!): the app title card.' },
			{ kind: 'image', src: 'media/ar-magazine/shot-2.webp', aspect: 1.778, alt: 'AR Magazine (Klikuark!): a phone showing an AR map over a magazine page.' },
			{ kind: 'image', src: 'media/ar-magazine/shot-3.webp', aspect: 0.919, alt: 'AR Magazine (Klikuark!): the Kuark mascot giving a thumbs up.' },
			{ kind: 'image', src: 'media/ar-magazine/shot-4.webp', aspect: 1.545, alt: 'AR Magazine (Klikuark!): Google Play and App Store download badges.' }
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
			{ kind: 'image', src: 'media/senalapan-mold-cleaner/shot-1.webp', aspect: 1.333, thumb: 'media/senalapan-mold-cleaner/shot-1-thumb.webp', alt: 'SENALAPAN Mold Cleaner Instructions: a phone showing the cleaning procedure in AR over the machine.' },
			{ kind: 'image', src: 'media/senalapan-mold-cleaner/shot-2.webp', aspect: 3.289, alt: 'SENALAPAN Mold Cleaner Instructions: a government ministry logo.' },
			{ kind: 'image', src: 'media/senalapan-mold-cleaner/shot-3.webp', aspect: 4.672, alt: 'SENALAPAN Mold Cleaner Instructions: a red wordmark logo.' }
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
			{ kind: 'image', src: 'media/ar-name-card/shot-1.webp', aspect: 0.993, thumb: 'media/ar-name-card/shot-1-thumb.webp', alt: 'AR Name Card: the robot mascot standing on an AR card held in hand.' }
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
			{ kind: 'image', src: 'media/3d-house-ar-showcase/shot-1.webp', aspect: 0.45, thumb: 'media/3d-house-ar-showcase/shot-1-thumb.webp', alt: '3D House AR Showcase: the furnished room in AR with view controls.' },
			{ kind: 'image', src: 'media/3d-house-ar-showcase/shot-2.webp', aspect: 0.45, alt: '3D House AR Showcase: the house exterior in AR with floor controls.' }
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
			{ kind: 'image', src: 'media/3d-ar-covid-19-education/shot-1.webp', aspect: 0.45, thumb: 'media/3d-ar-covid-19-education/shot-1-thumb.webp', alt: '3D AR COVID-19 Education: a torso model placed in the room in AR.' }
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
			{ kind: 'image', src: 'media/3d-ar-tarpaulin-pond/shot-1.webp', aspect: 0.45, thumb: 'media/3d-ar-tarpaulin-pond/shot-1-thumb.webp', alt: '3D AR Tarpaulin Pond, Lobster Cultivation: the green pond structure placed in a room.' }
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
			{ kind: 'image', src: 'media/giz-solar-panel-vr/shot-1.webp', aspect: 1.778, thumb: 'media/giz-solar-panel-vr/shot-1-thumb.webp', alt: 'GIZ Solar Panel VR: a solar panel row with a measuring device in view.' },
			{ kind: 'image', src: 'media/giz-solar-panel-vr/shot-2.webp', aspect: 1.778, alt: 'GIZ Solar Panel VR: gloved hands testing wiring with a multimeter.' }
		]
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
			{ kind: 'image', src: 'media/math-adventure/shot-1.webp', aspect: 1.998, thumb: 'media/math-adventure/shot-1-thumb.webp', alt: 'Math-Adventure: a character select screen in a lab.' },
			{ kind: 'image', src: 'media/math-adventure/shot-2.webp', aspect: 2.012, alt: 'Math-Adventure: the island map with three town markers.' },
			{ kind: 'image', src: 'media/math-adventure/shot-3.webp', aspect: 1.993, alt: 'Math-Adventure: the plank-crossing level with the timer running.' }
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
			{ kind: 'image', src: 'media/explore-math/shot-1.webp', aspect: 1.768, thumb: 'media/explore-math/shot-1-thumb.webp', alt: 'Explore Math: the desk scene with the study items laid out.' },
			{ kind: 'image', src: 'media/explore-math/shot-2.webp', aspect: 1.789, alt: 'Explore Math: the map with a challenge dialog pointing to a spot.' }
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
			{ kind: 'image', src: 'media/chem/shot-1.webp', aspect: 0.564, thumb: 'media/chem/shot-1-thumb.webp', alt: 'Chem: a classroom scene with the dialogue box open.' },
			{ kind: 'image', src: 'media/chem/shot-2.webp', aspect: 0.556, alt: 'Chem: the running level with the score and item counters.' }
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
			{ kind: 'image', src: 'media/simple-mini-quiz-game/shot-1.webp', aspect: 0.561, thumb: 'media/simple-mini-quiz-game/shot-1-thumb.webp', alt: 'Simple Mini Quiz Game: a dialogue scene with a student and an element tile.' },
			{ kind: 'image', src: 'media/simple-mini-quiz-game/shot-2.webp', aspect: 0.542, alt: 'Simple Mini Quiz Game: a quiz screen with three answer buttons.' }
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
			{ kind: 'image', src: 'media/guess-color-quiz/shot-1.webp', aspect: 1.838, thumb: 'media/guess-color-quiz/shot-1-thumb.webp', alt: 'Guess Color Quiz: the title screen with normal and time survival modes.' }
		]
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
			{ kind: 'image', src: 'media/wonder-word/shot-1.webp', aspect: 0.5, thumb: 'media/wonder-word/shot-1-thumb.webp', alt: 'Wonder Word: the category list with the animal pack in progress.' },
			{ kind: 'image', src: 'media/wonder-word/shot-2.webp', aspect: 0.5, alt: 'Wonder Word: a fox silhouette and the letter tiles to spell it.' }
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
		media: [{ kind: 'image', src: 'media/forestdom/shot-1.webp', aspect: 1.833, thumb: 'media/forestdom/shot-1-thumb.webp', alt: 'Forestdom: the title screen in a jungle scene with a play button.' }],
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
			{ kind: 'image', src: 'media/memories/shot-1.webp', aspect: 0.45, thumb: 'media/memories/shot-1-thumb.webp', alt: 'Memories: My Story My Choices: the story list in the reading app.' },
			{ kind: 'image', src: 'media/memories/shot-2.webp', aspect: 2.489, alt: 'Memories: My Story My Choices: the credits listing Muhammad Dzaki Adani as game programmer.' }
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
			{ kind: 'image', src: 'media/far-from-shore/shot-1.webp', aspect: 1.794, thumb: 'media/far-from-shore/shot-1-thumb.webp', alt: 'Far From Shore: the starting room with the main character on day one.' }
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
			{ kind: 'image', src: 'media/little-muslim-heroes-edufic/shot-1.webp', aspect: 2.244, thumb: 'media/little-muslim-heroes-edufic/shot-1-thumb.webp', alt: 'Little Muslim Heroes, Edufic: the level select with easy, medium, and hard modes.' },
			{ kind: 'image', src: 'media/little-muslim-heroes-edufic/shot-2.webp', aspect: 1.804, alt: 'Little Muslim Heroes, Edufic: a puzzle about the parents of the Prophet.' },
			{ kind: 'image', src: 'media/little-muslim-heroes-edufic/shot-3.webp', aspect: 1.797, alt: 'Little Muslim Heroes, Edufic: the answer screen naming Abdullah and Aminah.' }
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
			{ kind: 'image', src: 'media/purring-post-and-delivery/shot-1.webp', aspect: 1.778, thumb: 'media/purring-post-and-delivery/shot-1-thumb.webp', alt: 'Purring Post & Delivery: a delivery request card for Tashi the rabbit.' },
			{ kind: 'image', src: 'media/purring-post-and-delivery/shot-2.webp', aspect: 1.779, alt: 'Purring Post & Delivery: the post office with the cat clerk.' },
			{ kind: 'image', src: 'media/purring-post-and-delivery/shot-3.webp', aspect: 1.779, alt: 'Purring Post & Delivery: the order counter for picking a delivery run.' },
			{ kind: 'image', src: 'media/purring-post-and-delivery/shot-4.webp', aspect: 1.778, alt: 'Purring Post & Delivery: the kitchen room with a delivery dialog.' }
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
			{ kind: 'image', src: 'media/petal-pals/shot-1.webp', aspect: 1.778, thumb: 'media/petal-pals/shot-1-thumb.webp', alt: 'Petal Pals: the pets resting along the desktop taskbar.' },
			{ kind: 'image', src: 'media/petal-pals/shot-2.webp', aspect: 1.778, alt: 'Petal Pals: the pets among flowers in the desktop scene.' }
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
		links: [
			{
				label: 'Open on Google Play',
				url: 'https://play.google.com/store/apps/developer?id=KITSIKATSI&hl=en'
			}
		],
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
		links: [{ label: 'Watch on YouTube', url: 'https://www.youtube.com/watch?v=RqYrIkYTong' }],
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
			{ kind: 'image', src: 'media/juggler-endless-3d/shot-1.webp', aspect: 0.537, thumb: 'media/juggler-endless-3d/shot-1-thumb.webp', alt: 'Juggler (Endless 3D): the ball balanced on a goal post during play.' },
			{ kind: 'image', src: 'media/juggler-endless-3d/shot-2.webp', aspect: 0.547, alt: 'Juggler (Endless 3D): the title screen with a play button.' }
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
			{ kind: 'image', src: 'media/buto-beat/shot-1.webp', aspect: 1.985, thumb: 'media/buto-beat/shot-1-thumb.webp', alt: 'Buto Beat: the menu and two gameplay runs with monster faces.' }
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
			{ kind: 'image', src: 'media/paradixe-city/shot-1.webp', aspect: 1.767, thumb: 'media/paradixe-city/shot-1-thumb.webp', alt: 'Paradixe City: the glitched logo over a neon block skyline.' }
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
			{ kind: 'image', src: 'media/flappyrabbit/shot-1.webp', aspect: 0.442, thumb: 'media/flappyrabbit/shot-1-thumb.webp', alt: 'FlappyRabbit: the rabbit hopping between posts.' },
			{ kind: 'image', src: 'media/flappyrabbit/shot-2.webp', aspect: 0.454, alt: 'FlappyRabbit: the shop with four character skins.' },
			{ kind: 'image', src: 'media/flappyrabbit/shot-3.webp', aspect: 0.447, alt: 'FlappyRabbit: the title screen with play and shop buttons.' }
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
			{ kind: 'image', src: 'media/g-escape/shot-1.webp', aspect: 1, thumb: 'media/g-escape/shot-1-thumb.webp', alt: 'G-Escape: the app icon with a rocket and arrows.' },
			{ kind: 'image', src: 'media/g-escape/shot-2.webp', aspect: 0.487, alt: 'G-Escape: the title screen with the rocket logo and play button.' },
			{ kind: 'image', src: 'media/g-escape/shot-3.webp', aspect: 0.482, alt: 'G-Escape: split gameplay lanes with the tap-to-move prompt.' }
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
			{ kind: 'image', src: 'media/love-wars/shot-1.webp', aspect: 0.988, thumb: 'media/love-wars/shot-1-thumb.webp', alt: 'Love Wars: the game logo on a pastel sky.' }
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
