let taches = [
	{
		nom: 'Travailler efficacement',
		duree: 180,
		priorite: 3,
	},
	{
		nom: 'Boire un café',
		duree: 20,
		priorite: 1,
	},
	{
		nom: 'Discuter avec ses collèges',
		duree: 120,
		priorite: 1,
	},
];

console.log(taches.map(nvoObj => nvoObj .nom));
console.log(taches.filter(nvoObj  => nvoObj.priorite === 1));
console.log(taches.reduce((accumulator, currentValue) => accumulator + currentValue.duree,0));