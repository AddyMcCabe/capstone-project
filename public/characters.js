const backBtn = document.getElementById('back-btn');
const storedName = localStorage.getItem('name');
const storedDscrpt = localStorage.getItem('dscrpt');
const storedImage = localStorage.getItem('img');




function backPage() {
   location.href = 'http://127.0.0.1:5500/public/landing.html'
}

function displayCharacter() {
   document.querySelector('#name').textContent = storedName;
   document.querySelector('.character-img').src = storedImage;
   document.querySelector('.dscrpt').textContent = storedDscrpt;
      
}

backBtn.addEventListener('click', backPage)
displayCharacter();
