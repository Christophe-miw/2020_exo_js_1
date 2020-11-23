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



//console.log(taches.map(object => object.nom));

//console.log(taches.filter(object => object.priorite === 1));

//console.log(taches.reduce((addition, tache) => addition + tache.duree, 0));

let total = []
taches.reduce((x, object) => {
	if(object.priorite === 1) total.push(object)
}, total)

console.log(total)