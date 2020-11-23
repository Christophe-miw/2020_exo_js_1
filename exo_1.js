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

// console.log(taches.map(tache => tache.nom))

// console.log(taches.filter(tache => tache.priorite === 1))

total = []
taches.reduce((x, tache) => {
	if (tache.priorite === 1) total.push(tache)
}, total)

console.log(total)

// console.log(taches.reduce((total, {duree}) => total + duree, 0))
