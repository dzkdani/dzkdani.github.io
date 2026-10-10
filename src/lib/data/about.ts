// About data: experience, what I take on, recognition, education, and contact.
// Facts come only from DESIGN §1 and §10 (v0.2); missing facts are marked TODO(owner):.

export type Experience = {
	company: string;
	role: string;
	years: string;
	location?: string;
	points: string[];
};

// The 8 roles from the resume (DESIGN §1), newest first.
export const experience: Experience[] = [
	{
		company: 'Edufic',
		role: 'Freelance web game developer',
		years: 'Sept 2025 to present',
		location: 'Surabaya',
		points: [
			'Developing Little Muslim Heroes, a gamified web platform',
			'Part-time coding tutor for elementary students, using Scratch'
		]
	},
	{
		company: 'Upwork and others',
		role: 'Freelance game developer',
		years: 'TODO(owner): years',
		points: [
			'Far From Shore, from proof of concept to demo',
			'Mining mini-game for the idle game Goddess Summoner: Katsi Idle',
			'3D character customization proof of concept, with UMA 2'
		]
	},
	{
		company: 'Script Smelter Studio',
		role: 'Unity programmer',
		years: 'Apr 2025 to Sept 2025',
		location: 'remote',
		points: [
			"Petal Pals, the studio's own IP",
			'Feature updates and bug fixes during playtests',
			'Helped design features such as gacha and evolution'
		]
	},
	{
		company: 'Shireishi Production',
		role: 'Game programmer',
		years: 'Nov 2023 to Apr 2024',
		location: 'Malang',
		points: [
			"Fast prototypes for the studio's B2B services",
			'Several game genres in Unity',
			'Worked with game designers and artists'
		]
	},
	{
		company: 'Agate International',
		role: 'Game programmer',
		years: 'June 2022 to Nov 2023',
		location: 'Bandung',
		points: [
			'Researched Photon Fusion and wrote internal documentation',
			'Reworked and maintained Memories: My Story My Choices, including a UI rework and QC bug fixes',
			'Built a multiplayer 3D game for Zepeto in Unity and TypeScript'
		]
	},
	{
		company: 'Coding Collective',
		role: 'Game developer (freelance)',
		years: 'Sept 2023 to Oct 2023',
		location: 'remote',
		points: [
			'A 3D interactive web project for B2B clients',
			'A 2D interactive hot-pot game for B2B clients'
		]
	},
	{
		company: 'Falkana Studio',
		role: 'Game developer',
		years: 'Aug 2021 to July 2022',
		location: 'Surabaya',
		points: [
			'A 2D interactive educational game for learning-course clients',
			'Designed mechanics, game flow, and UI/UX',
			'Integrated REST APIs into Unity'
		]
	},
	{
		company: 'TicTech Studio',
		role: 'Unity developer intern',
		years: 'Jan 2020 to Feb 2020',
		location: 'Surabaya',
		points: [
			'An interactive AR app, with game-world layout in Unity',
			'A B2B AR/VR app',
			'A social media filter'
		]
	}
];

// Deck-only entries, kept out of the rendered page until DESIGN §14 is decided:
// TODO(owner): §14 #4 — PT Bersama Kreatif Teknologi (role and dates unknown).
// TODO(owner): §14 #8 — Agate Academy (trainer line, dates unknown).

// About intro (draft v0.2, DESIGN §10).
export const intro =
	"I'm a Unity developer, and I've been building games since 2020. Most of my work is educational games, browser builds, and multiplayer, for studios, clients, and my own projects. On client projects I write the gameplay and scenario code, and I design mechanics and game flow when a brief needs it.";

// Draft v0.2 from DESIGN §10 (the list is marked "confirm before publishing").
export const whatITakeOn: string[] = [
	'Educational games in Unity 2D, Construct, and Phaser, including browser builds',
	'WebGL builds with Unity WebGL optimization, playable in a browser',
	'Multiplayer games with Photon Fusion',
	'Casual and hypercasual mobile games with AdMob, Unity Ads, and in-app purchases',
	'Mechanics, game flow, and UI/UX design, plus the gameplay code',
	'REST API integration into Unity'
];

// Deck only in DESIGN §10, held back from the rendered list until confirmed (DESIGN §14 #4).
// TODO(owner): 'AR apps with Unity AR Foundation, ARCore, and Vuforia (deck only; confirm)'
// TODO(owner): 'VR training and 360 tours with Mapbox (deck only; confirm)'

// One line from the resume (DESIGN §1).
export const education =
	'B.Sc. in Applied Computer Science (S.Tr.Kom.), Politeknik Elektronika Negeri Surabaya (PENS), 2016 to 2021.';

export type RecognitionItem = {
	text: string;
	confirmed: boolean;
};

// Newest first (DESIGN §1). Items with confirmed: false are deck-only or still TODO(owner),
// so the About page leaves them out for now.
export const recognition: RecognitionItem[] = [
	{ text: 'GameJam+ Indonesia 23/24: Best Pitch nominee, for Purring Post & Delivery', confirmed: true },
	{ text: 'Penerima Pendanaan Program Kewirausahaan Mahasiswa Vokasi (PKMV) 2020, for Sepay Games', confirmed: true },
	{
		text: 'Masterclass for Game Developers: Game Design, Ministry of Tourism and Creative Economy (Aug 2020)',
		confirmed: false
	},
	{ text: 'MAGE 2017: finalist, student Game Dev Competition', confirmed: true },
	{ text: 'FTIf GameDeff 2017 (TODO(owner): finalist or top 20)', confirmed: false },
	{
		text: 'Gameloft Indonesia workshop on producership and project management (Oct 2016)',
		confirmed: false
	},
	{ text: 'Chief of Tabletop Community (TODO(owner): details)', confirmed: false }
];

// Deck-only recognition line, held back until DESIGN §14 #8 is decided:
// TODO(owner): §14 #8 — 'Trainer at Agate Academy'.

// Contact. DESIGN §14 #2 is still open: the email stays empty and the page shows a plain placeholder.
export const email = '';
export const upworkUrl = '';
export const linkedinUrl = '';
