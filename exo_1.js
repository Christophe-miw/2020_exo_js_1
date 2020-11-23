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
console.log(taches.map(tache => tache.nom));

console.log('\n2.');
console.log(taches.filter(tache => tache.priorite === 1));

console.log('\n2b.');
let prio1 = (res, tache) => {
	if(tache.priorite === 1)
		res.push(tache);
	return res;
};
console.log(taches.reduce(prio1, []));

console.log('\n3.');
let sommeDurees = (somme, tache) => somme + tache.duree;
console.log(taches.reduce(sommeDurees, 0));