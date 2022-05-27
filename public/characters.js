const backBtn = document.getElementById('back-btn');
const storedName = localStorage.getItem('name');
const storedDscrpt = localStorage.getItem('dscrpt');
const storedImage = localStorage.getItem('img');
const getComicsBtn = document.getElementById('comics-btn');




function backPage() {
   location.href = 'http://localhost:4005'
}

function displayCharacter() {
   document.querySelector('#name').textContent = storedName;
   document.querySelector('.character-img').src = storedImage + '.jpg';
   document.querySelector('.dscrpt').textContent = storedDscrpt;
      
}

function getComics() {
   axios.get(`https://gateway.marvel.com/v1/public/characters?name=${storedName}&ts=1&apikey=b6b72ca54e82d39459344ac31c187566&hash=aea080d9b15055a44c83d8469af5da70`)
   .then((res) => {
      console.log(res.data)
      let comics = res.data.data.results[0].comics.items[0].resourceURI;
      let comicName = res.data.data.results[0].comics.items[1].name;
      let comicName2 = res.data.data.results[0].comics.items[5].name;
      let comicName3 = res.data.data.results[0].comics.items[10].name;
      
      document.querySelector('#title').textContent = comicName;
      document.querySelector('#title2').textContent = comicName2;
      document.querySelector('#title3').textContent = comicName3;
      })
}


backBtn.addEventListener('click', backPage);
getComicsBtn.addEventListener('click', getComics);
displayCharacter();
