function loadPhotos(){
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then(response => response.json())
      .then(data => photo(data))
}

function photo(photos){
    const photoContainer = document.getElementById('photo-container');
    for(const photo of photos){
        console.log(photo);

        const li = document.createElement('div');
        li.classList.add("Photos")
        li.innerHTML = `
            <h3>Album : ${photo.albumId}</h3>
            <h4>ID : ${photo.id}</h4>
            <h5>Description: ${photo.title}</h5>
            <img src="${photo.thumbnailUrl}"  alt="">
            <img src="${photo.url}" alt="">
            



        `;
        photoContainer.appendChild(li);

    }
}
