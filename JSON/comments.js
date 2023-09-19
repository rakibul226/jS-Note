function loadComments(){
    fetch('https://jsonplaceholder.typicode.com/comments')
      .then(response => response.json())
      .then(data => comments(data))
}

function comments(datas){
    const commentDiv = document.getElementById('comments-container')
    for(const data of datas){
        console.log(data);
        const li = document.createElement('div');
        li.classList.add("comments")
        li.innerHTML = `
            <h3>Name : ${data.name}</h3>
            <h4>Id : ${data.id}</h4>
            <h4>Email : ${data.email}</h4>
            <p>Description : ${data.body}</p>
        `
        commentDiv.appendChild(li)
    }
}