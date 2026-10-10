// About data: experience, what I take on, recognition.
// Facts come only from DESIGN §1 and §10 (v0.2); missing facts are marked TODO(owner):.

export type Experience = {
	company: string;
	role: string;
	years: string;
};

// Newest first (DESIGN §1). The last two entries are deck-only work waiting on DESIGN §14.
export const experience: Experience[] = [
	{
		company: 'Edufic',
		role: 'Freelance web game developer',
		years: 'Sept 2025 to present'
	},
	{
		company: 'Upwork and others',
		role: 'Freelance game developer',
		years: 'TODO(owner): years'
	},
	{
		company: 'Script Smelter Studio',
		role: 'Unity programmer',
		years: 'Apr 2025 to Sept 2025'
	},
	{
		company: 'Shireishi Production',
		role: 'Game programmer',
		years: 'Nov 2023 to Apr 2024'
	},
	{
		company: 'Agate International',
		role: 'Game programmer',
		years: 'June 2022 to Nov 2023'
	},
	{
		company: 'Coding Collective',
		role: 'Game developer (freelance)',
		years: 'Sept 2023 to Oct 2023'
	},
	{
		company: 'Falkana Studio',
		role: 'Game developer',
		years: 'Aug 2021 to July 2022'
	},
	{
		company: 'TicTech Studio',
		role: 'Unity developer intern',
		years: 'Jan 2020 to Feb 2020'
	},
	{
		company: 'Agate Academy',
		role: 'Trainer',
		years: 'TODO(owner): years'
	},
	{
		company: 'PT Bersama Kreatif Teknologi',
		role: 'TODO(owner): role',
		years: 'TODO(owner): years'
	}
];

// Draft v0.2 from DESIGN §10 (the list is marked "confirm before publishing").
export const whatITakeOn: string[] = [
	'Educational games in Unity 2D, Construct, and Phaser, including browser builds',
	'WebGL builds with Unity WebGL optimization, playable in a browser',
	'Multiplayer games with Photon Fusion',
	'Casual and hypercasual mobile games with AdMob, Unity Ads, and in-app purchases',
	'Mechanics, game flow, and UI/UX design, plus the gameplay code',
	'REST API integration into Unity',
	'AR apps with Unity AR Foundation, ARCore, and Vuforia (deck only; confirm)',
	'VR training and 360 tours with Mapbox (deck only; confirm)'
];

// Reverse date order (DESIGN §1); undated items last.
export const recognition: string[] = [
	'GameJam+ Indonesia 23/24: Best Pitch nominee, for Purring Post & Delivery',
	'Penerima Pendanaan Program Kewirausahaan Mahasiswa Vokasi (PKMV) 2020, for Sepay Games',
	'Masterclass for Game Developers: Game Design, Ministry of Tourism and Creative Economy (Aug 2020)',
	'MAGE 2017: finalist, student Game Dev Competition',
	'FTIf GameDeff 2017 (TODO(owner): finalist or top 20)',
	'Gameloft Indonesia workshop on producership and project management (Oct 2016)',
	'Chief of Tabletop Community (TODO(owner): details)',
	'Trainer at Agate Academy'
];
