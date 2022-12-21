/*
Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.

MILESTONE 0:
Creare l’array di oggetti con le informazioni fornite.

MILESTONE 1:
Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto.

MILESTONE 2:
Stampare le stesse informazioni su DOM sottoforma di stringhe.

BONUS 1:
Trasformare la stringa foto in una immagine effettiva.

BONUS 2:
Organizzare i singoli membri in card/schede e rendere la pagina gradevole (potete usare lo screen in allegato come spunto.
    
Consigli del giorno:
Ragioniamo come sempre a step.
Prima la logica in italiano e poi traduciamo in codice.
*/


//!array
const team = [
    {
        name: "Wayne Barnett",
        role: "Founder & CEO",
        img: "wayne-barnett-founder-ceo.jpg",
    },
    {
        name: "Angela Caroll",
        role: "Chief Editor",
        img: "angela-caroll-chief-editor.jpg",
    },
    {
        name: "Walter Gordon",
        role: "Office Manager",
        img: "walter-gordon-office-manager.jpg",
    },
    {
        name: "Angela Lopez",
        role: "Social Media Manager",
        img: "angela-lopez-social-media-manager.jpg",
    },
    {
        name: "Scott Estrada",
        role: "Developer",
        img: "scott-estrada-developer.jpg",
    },
    {
        name: "Barbara Ramos",
        role: "Graphic Designer",
        img: "barbara-ramos-graphic-designer.jpg",
    },
];


//! prendo elementi dal dom
const row = document.getElementById("row");

//!preparo variabile vuota nella quale scrivero l'HTML
let htmlCode = ``;

//!ciclo for con il quale prendero manmano ogni oggetto
for (let i = 0; i < team.length; i++) {
    //!costante che mi da l'oggetto attuale
    const currentI = team[i];

    //!monto ogni elemento
    htmlCode +=
        `
            <div class="col px-2 d-flex justify-content-center">
                <div class="card rounded-0">
                    <img src="${"img/img/" + currentI.img}">
                    <div class="card-body">
                      <h5  class="card-title">${currentI.name}</h5>
                      <p id="position" class="card-text">${currentI.role}</p>
                    </div>
                </div>
            </div>
`;


};

//!stampo in pagina
row.innerHTML = htmlCode;
