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

// Exercice 1
console.log(taches.map(obj => obj.nom));

// EXercice 2
console.log(taches.filter(obj => obj.priorite == 1));

console.log(taches.reduce((r, obj) => {
	if (obj.priorite === 1) {
		r.push(obj);
	}
	return r;
}, []));

// Exercice 3
console.log(taches.reduce((somme, tache) => somme + tache.duree, 0));