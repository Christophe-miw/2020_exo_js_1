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

//option 1:

var noms = [];
for (var i = 0; i < taches.length; i++) {
   noms.push(taches[i].nom);
}
var priorites = [];
for (var i = 0; i < taches.length; i++) {
   if (taches[i].priorite == 1) {
      priorites.push(taches[i].priorite);
   }
}
var totalDur = 0;
for (var i = 0; i < taches.length; i++) {
   totalDur += taches[i].duree;
}

//option 2:

var noms = taches.map(tache => tache.nom);

var priorites = taches.filter(tache => tache.priorite === 1);
priorites = priorites.map(tache => tache.priorite);

var totalDur = taches.reduce((total, tache) => total + tache.duree, 0);

console.log(noms);
console.log(priorites);
console.log(totalDur);
