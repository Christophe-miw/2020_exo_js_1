let taches = [{
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


let Noms = []
let priorite = []
taches.forEach((element) => Noms.push(element.nom))
taches.forEach((element) => {
    if (element.priorite == 1)
        priorite.push(element.priorite)


})
let resultat = 0
taches.forEach((element) => resultat += element.duree)
console.log(resultat)
console.log(Noms)
console.log(priorite)