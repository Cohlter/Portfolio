const poke_name = document.getElementById("pokemon_name")
const button = document.querySelector("button")
const pokedex = document.getElementById("pokedex")

var all_pokemon = []

// function to get pokemon data
async function fetch_pokemon(){
    // runs this code
    try{
        // finds the api link
        const result = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=1008`)
        // if not okay, then it throws error
        if(!result.ok){
            throw new Error("No podia encontrarlo")
        }
        // turns response (the link data) into a json
        const data = await result.json()
        // makes a promise for to get each pokemon at the same time
        all_pokemon = await Promise.all(
            data.results.map(async (pokemon) => {
                const details = await fetch(pokemon.url).then(res => res.json())

                return{
                    id: details.id,
                    name: details.name,
                    sprite: details.sprites.front_default,
                    types: details.types.map(t => t.type.name).join(", ")
                }
            })
        )
        
        
    }
    // if error, it puts in console error
    catch(error){
        console.log(error)
    }
    
    display_pokemon(all_pokemon)
}

function display_pokemon(pokemon_list){
    pokedex.innerHTML = ""
    pokemon_list.forEach(pokemon => {
        pokedex.innerHTML += `
        <div id="poke_ball">
            <p>${pokemon.id}</p>
            <p>${pokemon.name}</p>
            <img src=${pokemon.sprite}>
            <p>${pokemon.types}</p>
        </div>`
    });
}


// adds event listener and calls function for every input
poke_name.addEventListener("input", function(){
    // sets search text to value of element to lower case
    var search_text = poke_name.value.toLowerCase()
    // filters by the search text name
    var filtered_pokemon = all_pokemon.filter((pokemon) => pokemon.name.includes(search_text))
    // calls display
    display_pokemon(filtered_pokemon)
})

// adds event listener to button to reset everything
button.addEventListener("click", function(){
    // clear input
    poke_name.value = ""
    //calls function
    display_pokemon(all_pokemon)
})

        
// runs code
fetch_pokemon()