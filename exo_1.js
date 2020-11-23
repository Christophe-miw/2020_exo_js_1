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

// Array des nom : (map)
console.log("Array des noms : ")

for (let property in taches){

	console.log(`${taches[property].nom}`)
}



// Affichages des taches avec priorité = 1
console.log("---------------------")
console.log("Taches avec priorité = 1 ")
const result = taches.filter(taches => taches.priorite ===1)

console.log(result)



// Durée total :
console.log("---------------------")
console.log("durée total : ")
const reducer = (accmulator, currentValue) => accmulator + currentValue;

for (let property in taches){

	const resultat =[`${taches[property].duree}`].reduce(reducer)

	console.log(resultat)

}




