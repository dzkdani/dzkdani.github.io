// About data: experience, what I take on, recognition.
// Facts come only from DESIGN §1 and §10; missing facts are marked TODO(owner):.

export type Experience = {
	company: string;
	role: string;
	years: string;
};

export const experience: Experience[] = [
	{
		company: 'TICTECH Studio',
		role: 'TODO(owner): role',
		years: 'TODO(owner): years'
	},
	{
		company: 'PT Bersama Kreatif Teknologi',
		role: 'TODO(owner): role',
		years: 'TODO(owner): years'
	},
	{
		company: 'Agate Academy',
		role: 'Trainer',
		years: 'TODO(owner): years'
	},
	{
		company: 'Freelance',
		role: 'Unity game developer',
		years: 'TODO(owner): years'
	}
];

// Draft from DESIGN §10 (the list is marked "confirm before publishing").
export const whatITakeOn: string[] = [
	'Educational games in Unity 2D and WebGL',
	'Markerless and marker-based AR (Unity AR Foundation, Vuforia)',
	'VR training scenarios',
	'360 tours linked to maps (Unity with Mapbox)',
	'Casual and hypercasual mobile games with ads and in-app purchases'
];

// Newest first (DESIGN §1).
export const recognition: string[] = [
	'GameJamPlus Indonesia 23/24: Best Pitch nominee (Purring Post & Delivery)',
	'Sepay Games funded by PKMV, the vocational student entrepreneurship program (September 2020)',
	'Masterclass for Game Developers: Game Design, Ministry of Tourism and Creative Economy (August 2020)',
	'MAGE 2017: finalist, student Game Dev Competition',
	'FTIf GameDeff 2017: top 20',
	'Gameloft Indonesia workshop: Producership and Project Management in Game Companies (October 2016)',
	'Trainer at Agate Academy (listed as Jr. Game Programmer)'
];
