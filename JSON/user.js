
function loadData(){
        fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => displayUser(data))

}

function displayUser(data){
    const ul = document.getElementById('user-list');
    for(const user of data){
       
        const li = document.createElement('li');
        li.innerText = user.name;
        ul.appendChild(li)
        
    }
}












// function loadData(){
//     fetch('https://jsonplaceholder.typicode.com/todos/1')
//     .then(res => res.json())
//     .then(data => displayUser(data))

// }

// function displayUser(data){
//     // console.log(data);
//     const ul = document.getElementById('user-list');
//     for(const person of data){
//        console.log(person);
//         // const li = document.createElement('li');
//         // li.innerText = user.id;
//         // ul.appendChild(li)
        
//     }
// }