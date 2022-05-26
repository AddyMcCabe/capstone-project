const backBtn = document.getElementById('back-btn');
const storedName = localStorage.getItem('name');
const storedDscrpt = localStorage.getItem('dscrpt');
const storedImage = localStorage.getItem('img');




function backPage() {
   location.href = 'http://127.0.0.1:5500/public/landing.html'
}

function displayCharacter() {
   // for(let i = 0; i < localStorage.length; i++) {
   //    const key = localStorage.key(i);
   //    const value = localStorage.getItem(key);
   document.querySelector('#name').textContent = storedName;
   document.querySelector('.character-img').src = storedImage;
   document.querySelector('.dscrpt').textContent = storedDscrpt;
      console.log(storedDscrpt)
      
    
    
    
  



}

backBtn.addEventListener('click', backPage)
displayCharacter();
