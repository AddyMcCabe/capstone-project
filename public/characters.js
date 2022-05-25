backBtn = document.getElementById('back-btn');


function backPage() {
   location.href = 'http://127.0.0.1:5500/public/landing.html'
}

function displayCharacter() {
    const getCharacter = localStorage.getItem('charObj')
    console.log(getCharacter)
    let characterCard = document.createElement('form');
 getCharacter.name = document.createElement('p');
 getCharacter.description = document.createElement('p')
 getCharacter.image = document.createElement('img')

characterCard.appendChild(getCharacter.name, getCharacter.description, getCharacter.image);

}

backBtn.addEventListener('click', backPage)
displayCharacter();
