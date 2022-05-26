backBtn = document.getElementById('back-btn');


function backPage() {
   location.href = 'http://127.0.0.1:5500/public/landing.html'
}

function displayCharacter() {
   for(let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      const value = localStorage.getItem(key);
      console.log(value)
    }
    
    
  



}

backBtn.addEventListener('click', backPage)
displayCharacter();
