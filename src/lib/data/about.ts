// About data: experience, what I take on, recognition, education, and contact.
// Facts come only from DESIGN §1 and §10 (v0.2); missing facts are marked TODO(owner):.

import type { Media } from '#lib/data/projects.ts';

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
		years: 'Ongoing',
		points: [
			'Far From Shore, from proof of concept to demo',
			'Mining mini-game for the idle game Goddess Summoner: Katsi Idle',
			'3D character customization proof of concept, with UMA 2',
			'AR client builds, including AR Magazine for PT Kuark International',
			'AR and VR builds for PT Bersama Kreatif Teknologi and GIZ'
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
			'Math-Adventure, a 2D interactive educational game for learning-course clients',
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
	},
	{
		company: 'PT Solusi Inovasi Mandiri',
		role: 'Intern',
		years: 'Jan 2018 (1 month)',
		points: []
	}
];

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
	'REST API integration into Unity',
	'AR apps with Unity AR Foundation, ARCore, and Vuforia',
	'VR training builds in Unity'
];

// One line from the resume (DESIGN §1).
export const education =
	'B.Sc. in Applied Computer Science (S.Tr.Kom.), Politeknik Elektronika Negeri Surabaya (PENS), 2016 to 2021.';

export type RecognitionItem = {
	text: string;
	confirmed: boolean;
};

// Newest first (DESIGN §1).
export const recognition: RecognitionItem[] = [
	{ text: 'GameJam+ Indonesia 23/24: Best Pitch nominee, for Purring Post & Delivery', confirmed: true },
	{ text: 'Penerima Pendanaan Program Kewirausahaan Mahasiswa Vokasi (PKMV) 2020, for Sepay Games', confirmed: true },
	{ text: 'Masterclass for Game Developers: Game Design, Ministry of Tourism and Creative Economy (Aug 2020)', confirmed: true },
	{ text: 'MAGE 2017: finalist, student Game Dev Competition', confirmed: true },
	{ text: 'FTIf GameDeff 2017: top 20', confirmed: true },
	{ text: 'Gameloft Indonesia workshop on producership and project management (Oct 2016)', confirmed: true },
	{ text: 'Trainer at Agate Academy', confirmed: true },
	// Undated items go last. Chief of Tabletop Community has no date.
	{ text: 'Chief of Tabletop Community', confirmed: true }
];

// Certificate images from the deck, newest first, matching the recognition list.
// The images stay visible even where the matching text line is still TODO(owner).
export type Certificate = {
	caption: string;
	image: Media;
};

export const certificates: Certificate[] = [
	{
		caption: 'GameJamPlus Indonesia 23/24',
		image: {
			kind: 'image',
			src: 'media/about/cert-gamejamplus.webp',
			aspect: 1.406,
			alt: 'GameJamPlus Indonesia 23/24 certificate: it names Purring Post & Delivery the Best Pitch nominee.'
		}
	},
	{
		caption: 'PKMV 2020',
		image: {
			kind: 'image',
			src: 'media/about/cert-pkmv.webp',
			aspect: 1.557,
			alt: 'PKMV 2020 certificate: the award certificate for the vocational entrepreneurship program funding.'
		}
	},
	{
		caption: 'Masterclass for Game Developers, 2020',
		image: {
			kind: 'image',
			src: 'media/about/cert-masterclass.webp',
			aspect: 1.413,
			alt: 'Masterclass for Game Developers certificate: the Ministry of Tourism and Creative Economy masterclass on game design, August 2020.'
		}
	},
	{
		caption: 'MAGE 2017',
		image: {
			kind: 'image',
			src: 'media/about/cert-mage.webp',
			aspect: 1.446,
			alt: 'MAGE 2017 certificate: the student Game Dev Competition finalist certificate.'
		}
	},
	{
		caption: 'FTIf GameDeff 2017',
		image: {
			kind: 'image',
			src: 'media/about/cert-ftif.webp',
			aspect: 1.413,
			alt: 'FTIf GameDeff 2017 certificate: the top 20 placement in the game development festival.'
		}
	},
	{
		caption: 'Gameloft Indonesia workshop, 2016',
		image: {
			kind: 'image',
			src: 'media/about/cert-gameloft.webp',
			aspect: 1.423,
			alt: 'Gameloft Indonesia workshop certificate: producership and project management, October 2016.'
		}
	},
	{
		caption: 'UX design and product development webinar',
		image: {
			kind: 'image',
			src: 'media/about/cert-ux-webinar.webp',
			aspect: 1.35,
			alt: 'UX design and product development webinar certificate: the participant certificate.'
		}
	},
	{
		caption: 'Agate Academy trainer card',
		image: {
			kind: 'image',
			src: 'media/about/cert-agate-academy.webp',
			aspect: 2.185,
			alt: 'Agate Academy trainer card: it names Muhammad Dzaki Adani as Jr. Game Programmer.'
		}
	}
];

// Contact. The email, Upwork, and LinkedIn come from the resume and the owner's §14 #2 answer.
export const email = 'dzaky.adani@gmail.com';
export const upworkUrl = 'https://www.upwork.com/freelancers/~0158789aca333502f2?mp_source=share';
export const linkedinUrl = 'https://www.linkedin.com/in/dzkdani/';
