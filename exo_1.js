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

// Array des nom :
console.log("Array des noms : ")

for (let property in taches){

	console.log(`${taches[property].nom}`)
}


// Autre moyen : (map)

const Tnoms = taches.map((taches)=>taches.nom);
console.log('array des noms : ');
console.log(Tnoms);


// Affichages des taches avec priorité = 1
console.log("---------------------")
console.log("Taches avec priorité = 1 ")
const result = taches.filter(taches => taches.priorite ===1)

console.log(result)



/*		AVEC REDUCE TEST
const ResultReduce = taches.reduce((accumulator, taches) =>{
	let tab = accumulator.push[taches.nom];
	return tab;
}, []);


console.log(ResultReduce)*/


// Durée total :
console.log("---------------------")
console.log("durée total : ")

const reducer = (accmulator, currentValue) => accmulator + currentValue;


for (let property in taches){

	const resultat =[`${taches[property].duree}`].reduce(reducer)


	console.log(resultat)

}

// Correction :

console.log(' Correction duree total : ')

let init = 0;
const Duree = taches.reduce((total, taches) => {
	return total + taches.duree;
},init);

console.log(Duree)







