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

taches.map(obj => {
	console.log(obj.nom);
});

taches.filter(obj => {
	console.log(obj.priorite);
});



let duree = taches.map(obj => obj.duree).reduce((total, duree)=>{
 return (total || 0) + parseInt(duree);
}, 0);
console.log(duree);

// partie filter en utilisant reduce  

let priorites = taches.reduce((prev, curr)=>{
	return [prev, curr.priorite];
}, 0)
console.log(priorites.join(','));



/*for( let i = 0; i < taches.length; i++){
	console.log(taches[i].nom);
	console.log(taches[i].priorite); 
	
	somme += taches[i].duree; 
}
console.log("total des durees : "+ somme);*/
