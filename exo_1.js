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

console.log('1.');
for(let [index, tache] of Object.entries(taches)) {
	console.log(tache.nom);
}

console.log('\n2.');
let resQ2 = taches.filter(tache => tache.priorite === 1);
console.log(resQ2);

console.log('\n3.');
let sommeDurees = (somme, tache) => somme + tache.duree;
console.log(taches.reduce(sommeDurees, 0));