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

let dureeTotal = 0;

for (let i = 0; i < taches.length; i++) {
	console.log("Noms: " + taches[i].nom);
}

for (let i = 0; i < taches.length; i++) {
	if (taches[i].priorite == 1){
		console.log("Priorité: " + taches[i].priorite);
	}
	dureeTotal += taches[i].duree;
}

console.log("Durée total " + dureeTotal);
