let searchForm = document.querySelector("#search-form");
let searchButton = document.querySelector("#search-button");
let pokemonName = document.querySelector("#pokemon-name");
let pokemonID = document.querySelector("#pokemon-id");
let pokemonWeight = document.querySelector("#weight");
let pokemonHeight = document.querySelector("#height");
let spriteContainer = document.querySelector("#sprite-container");
let types = document.querySelector("#types");
let hp = document.querySelector("#hp");
let defense = document.querySelector("#defense");
let attack = document.querySelector("#attack");
let specialAttack = document.querySelector("#special-attack");
let specialDefense = document.querySelector("#special-defense");
let speed = document.querySelector("#speed");
let searchInput = document.querySelector("#search-input").value;

function getPokemon(){
    let pokemonNameOrId = searchInput.value;
    console.log(pokemonNameOrId);
    fetch(`https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${pokemonNameOrId}`)
        .then(response =>{
            console.log(response);
            return response.json();
        })
        .then(data =>{
            
            console.log(data);
            //debugger
            /* --SET INFO --*/
            pokemonName.textContent = data.name.toUpperCase();
            pokemonID.textContent = `#${data.id}`;
            pokemonWeight.textContent = `Weight: ${data.weight}`;
            pokemonHeight.textContent = `Height: ${data.height}`;

            /* --SET IMAGE --*/
            spriteContainer.innerHTML = `<img id="sprite" src="${data.sprites.front_default}" alt="${data.name} sprite" />`;
            
            /* --SET TYPE --*/
            types.innerHTML = data.types
            .map(type => `<span class="type ${type.type.name}">${type.type.name.toUpperCase()}</span>`)
            .join(' ');
            
            /* --SET STATS --*/
            hp.textContent = data.stats[0].base_stat;
            attack.textContent = data.stats[1].base_stat;
            defense.textContent = data.stats[2].base_stat;
            specialAttack.textContent = data.stats[3].base_stat;
            specialDefense.textContent = data.stats[4].base_stat;
            speed.textContent = data.stats[5].base_stat;

            

        })
        .catch(error =>{
            
            alert('Pokémon not found');
            console.log(`Pokémon not found: ${err}`);
        })
} 





searchForm.addEventListener("submit", e => {
    e.preventDefault();
    getPokemon();
});