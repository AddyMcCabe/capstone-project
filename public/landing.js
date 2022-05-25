const searchBtn = document.querySelector('#search-btn');
const hero = document.querySelector('#char-search');




function searchCharacter(event) {
    axios.get(`http://gateway.marvel.com/v1/public/characters?name=${hero.value}&ts=1&apikey=b6b72ca54e82d39459344ac31c187566&hash=aea080d9b15055a44c83d8469af5da70`)
    .then((res) => {
        let character = res.data
        // let characterArr = [];
        // character.forEach(element => {
        //     characterArr.push({
        //         name: character.results.name,
        //         decription: character.results.description,
        //         thumbnail: character.results.thumbnail
        //     })
        // });
        console.log(character)

    })
} 


searchBtn.addEventListener('click', searchCharacter)