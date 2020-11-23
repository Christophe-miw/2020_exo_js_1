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


let arrayNom = [];
taches.forEach(tache => {
	arrayNom.push(tache.nom);
	
});

console.log(arrayNom);

let arrayPrio = [];
taches.forEach(tache => {
	if(tache.priorite == 1)
	{
		arrayPrio.push(tache)
	}
});

console.log(arrayPrio);

let dureeTotale = 0;

taches.forEach(tache => {
	dureeTotale += tache.duree*1;
	
});
console.log(dureeTotale);