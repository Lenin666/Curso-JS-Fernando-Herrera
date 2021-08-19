
const jokeURL = 'https://api.chucknorris.io/jokes/random'

// fetch(jokeURL).then( resp => {
//     resp.json().then(data => {
//         console.log(data.id)
//         console.log(data.value)
//     })
//     console.log(resp)
// })

fetch( jokeURL )
.then(resp => resp.json())
.then(({id,value}) =>{
    console.log(id,value)
})