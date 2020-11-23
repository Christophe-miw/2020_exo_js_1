let taches = [
	{
		nom     : 'Travailler efficacement',
		duree   : 180,
		priorite: 3,
	},
	{
		nom     : 'Boire un café',
		duree   : 20,
		priorite: 1,
	},
	{
		nom     : 'Discuter avec ses collèges',
		duree   : 120,
		priorite: 1,
	},
];


let arrayNom = taches.map(o => o.nom);
console.log(arrayNom);


let arrayPrio = taches.filter(o => o.priorite === 1)

console.log(arrayPrio);

