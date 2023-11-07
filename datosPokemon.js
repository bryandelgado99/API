
//Access tu API
const consultar_Pokemon = (id, number) => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`) //Call the API

    .then(response =>{
        return response.json(); //Obtain the data into a JSON form
    })

    .then(data =>{
        pintarPokemon(data, number); //Print the data into the console
    })
    .catch(error => {
        console.log(error);
    })

}

//Generate Random Pokemons
const select_Button = () => {
    let primerPokemon = Math.round(Math.random()*150);
    let segunndoPokemon = Math.round(Math.random()*150);
    consultar_Pokemon(primerPokemon, 1);
    consultar_Pokemon(segunndoPokemon, 2);
}

//Call the function to access de data
select_Button()

//Get the Pokemon and put them into a list
const Pokemon_list = document.getElementById("listarpokemon");

//Show the Pokemon Information on web
const pintarPokemon = (data, id) => {
    let item = Pokemon_list.querySelector(`#pok-${id}`);
    item.getElementsByTagName("img")[0].setAttribute("src", data.sprites.front_default);
    item.getElementsByTagName("p")[0].innerHTML = data.name;
}
