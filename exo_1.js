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


let Noms = taches.map(x => x.nom)

let priorite = taches.filter(x => x.priorite == 1)

const reducer = (taches, ) => taches.duree
    /* resultat = taches.reduce((x, y) => x + y.duree, 0) */

let resultat = []
taches.reduce((x, tache) => {
    if (tache.priorite === 1) resultat.push(tache)
}, resultat)


/* taches.forEach((element) => Noms.push(element.nom))
    taches.forEach((element) => {
        if (element.priorite == 1)
            priorite.push(element.priorite)


    })
    let resultat = 0
	taches.forEach((element) => resultat += element.duree) */

console.log(resultat)
console.log(Noms)
console.log(priorite)