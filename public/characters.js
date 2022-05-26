const backBtn = document.getElementById('back-btn');
const storedName = localStorage.getItem('name');
const storedDscrpt = localStorage.getItem('dscrpt');
const storedImage = localStorage.getItem('img');




function backPage() {
   location.href = 'http://localhost:4005'
}

function displayCharacter() {
   document.querySelector('#name').textContent = storedName;
   document.querySelector('.character-img').src = storedImage + '.jpg';
   document.querySelector('.dscrpt').textContent = storedDscrpt;
      
}

backBtn.addEventListener('click', backPage)
displayCharacter();
