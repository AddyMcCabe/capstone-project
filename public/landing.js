const form = document.querySelector('.search-bar');



function searchCharacter(event) {
    axios.get(`http://gateway.marvel.com/v1/public/characters?ts=1&apikey=b6b72ca54e82d39459344ac31c187566&hash=aea080d9b15055a44c83d8469af5da70`)
    .then((res) => {
        console.log(res.data)
    })
} 


form.addEventListener('submit', searchCharacter)