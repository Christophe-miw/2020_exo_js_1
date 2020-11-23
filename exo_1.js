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
let somme = 0; 
for( let i = 0; i < taches.length; i++){
	console.log(taches[i].nom);
	console.log(taches[i].priorite); 
	
	somme += taches[i].duree; 
}
console.log("total des durees : "+ somme);
