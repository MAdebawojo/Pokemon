
const container = document.querySelector('#myPokes')
const baseURL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'
for(var i = 1; i <= 225; i++)
{
    const pokemon = document.createElement("img")
    
    pokemon.setAttribute('src', `${baseURL}${i}.png`)

    document.body.appendChild(pokemon)
    // console.log(pokemon.src)
}








