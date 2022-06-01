
const backBtn = document.getElementById('back-btn');
const storedName = localStorage.getItem('name');
const storedDscrpt = localStorage.getItem('dscrpt');
const storedImage = localStorage.getItem('img');
const getComicsBtn = document.getElementById('comics-btn');

function backPage() {
   location.href = 'https://marvel-capstone-f22.herokuapp.com/'
}

function displayCharacter() {
   document.querySelector('#name').textContent = storedName;
   document.querySelector('.character-img').src = storedImage + '.jpg';
   document.querySelector('.dscrpt').textContent = storedDscrpt;
   document.querySelector('#rate-char').textContent = 'Rate ' + storedName;
      
}

function getComics() {
   axios.get(`https://gateway.marvel.com/v1/public/characters?name=${storedName}&ts=1&apikey=b6b72ca54e82d39459344ac31c187566&hash=aea080d9b15055a44c83d8469af5da70`)
   .then((res) => {
      let comics = res.data.data.results[0].comics.items[5].resourceURI;
      let comicName = res.data.data.results[0].comics.items[1].name;
      let comicName2 = res.data.data.results[0].comics.items[5].name;
      let comicName3 = res.data.data.results[0].comics.items[10].name;
      let comicName4 = res.data.data.results[0].comics.items[15].name;
      
      document.querySelector('#title').textContent = comicName;
      document.querySelector('#title2').textContent = comicName2;
      document.querySelector('#title3').textContent = comicName3;
      document.querySelector('#title4').textContent = comicName4;
      })
}

const getRatings = () => {
   axios.get('https://marvel-capstone-f22.herokuapp.com/api/ratings/')
   .then(res => {
   let display = document.createElement('h1')
   display.textContent = res.data
   document.getElementById('rating-display').innerHTML='';
   document.getElementById('rating-display').appendChild(display);
   })
}


function addRating() {
   const getSelectedValue = document.querySelector('input[name="ratings"]:checked');
   
   
   axios.post('https://marvel-capstone-f22.herokuapp.com/api/ratings/', {rating: storedName + "'s rating is " + getSelectedValue.value})
   .then(res => {
       alert(res.data)
   })
}



backBtn.addEventListener('click', backPage);
getComicsBtn.addEventListener('click', getComics);
displayCharacter();

