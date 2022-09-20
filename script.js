let jokeEl = document.getElementById("joke");
let jokeBtn = document.getElementById("new-joke");

jokeBtn.addEventListener('click', generateJoke)
generateJoke();

async function generateJoke() {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos")

    const data = await res.json()
    
    let num = Math.ceil(Math.random() * 100)
    jokeEl.innerHTML = data[num].title
}

// function generateJoke() {
//     const config = {
//         mode: "no-cors",
//         headers: {
//             Accept: "application/json",
//         },
//     };
//     fetch("https://jsonplaceholder.typicode.com/todos")
//         .then((res) => res.json())
//         .then((data) => {
//             let num = Math.random() * 100
//             num = Math.ceil(num)
//             jokeEl.innerHTML = data[num].title
//         });
// }
