
for(var i = 1; i <= 206; i++)
{
    let pokemon = document.createElement("img")

    pokemon.setAttribute('src', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'+ i +'.png')

    document.body.appendChild(pokemon)
    // console.log(pokemon.src)
}











// let pokemon = document.querySelector('my-pokes')
// pokemon.innerHTML = ''

// for (var i = 1; i < 35; i++)
// {
//     var image = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/\i.png'
//     console.log(image)
// }