//J_Le_Pivert
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

// array nom
const map1 = taches.map(itemTableauTache => itemTableauTache);
console.log(map1);

// array priorites = 1
const result = taches.filter(priorite => priorite.priorite == 1);
console.log(result);

// durée total
let sommeDuree = taches.reduce((accumulateur, valeurCourante) => accumulateur + valeurCourante.duree,0);
console.log(sommeDuree);