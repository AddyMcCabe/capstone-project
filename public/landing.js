

const searchBtn = document.querySelector('#search-btn');
const hero = document.querySelector('#char-search');




function searchCharacter(event) {
    axios.get(`https://gateway.marvel.com/v1/public/characters?name=${hero.value}&ts=1&apikey=b6b72ca54e82d39459344ac31c187566&hash=aea080d9b15055a44c83d8469af5da70`)
    .then((res) => {
        let characterName = res.data.data.results[0].name;
        let characterDescription = res.data.data.results[0].description;
        let characterImage = res.data.data.results[0].thumbnail.path;
        
         window.localStorage.setItem('name', characterName);
         window.localStorage.setItem('dscrpt', characterDescription);
         window.localStorage.setItem('img', characterImage);
         window.location.href = 'https://marvel-capstone-f22.herokuapp.com/characters'
        
        hero.value = '';   
    })
    .catch((err) => {
        hero.value = '';
        alert('character not found')
    })
} 


searchBtn.addEventListener('click', searchCharacter)