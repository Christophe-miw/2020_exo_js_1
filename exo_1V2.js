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


const reducer = (accumulator, currentValue) => accumulator + currentValue.duree;

console.log(taches.map(tache => tache.nom));
console.log(taches.filter(taches => taches.priorite === 1));
console.log(taches.reduce(reducer, 0));
