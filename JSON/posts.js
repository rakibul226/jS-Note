function loadPosts(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(posts => displayPosts(posts))
}

function displayPosts(posts){
    const postContainer = document.getElementById('posts-container');
    for(const post of posts){
        const postDiv = document.createElement('div');
        // console.log(post);
        postDiv.classList.add('post');
        postDiv.innerHTML = `
            <h4>User -${post.id}</h4>
            <h5>Post -${post.title}</h5>
            <p>sDescription-${post.body}</p>        
        `;
        postContainer.appendChild(postDiv)
    }
}

