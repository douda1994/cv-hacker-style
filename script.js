// Script JavaScript pour ajouter un effet de machine à écrire au texte du CV
const text = document.querySelector('.cv-output');
const strText = text.textContent;
let i = 0;

text.textContent = '';

function type() {
    if (i < strText.length) {
        text.textContent += strText.charAt(i);
        i++;
        setTimeout(type, 30);
    }
}

type();
