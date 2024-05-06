
for(var i = 1; i <= 206; i++)
{
    let pokemon = document.createElement("img")

    pokemon.setAttribute('src', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'+ i +'.png')

    document.body.appendChild(pokemon)
    // console.log(pokemon.src)
}








