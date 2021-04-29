let srDiv = document.getElementById('searchResultsContainer');
let movieNameEl = document.getElementById('movieName');
let searchButtonEl = document.getElementById('searchButton');

function searchResult(movieObj) {
    let mrDiv = document.createElement('div');
    mrDiv.classList.add('movie-result');
    srDiv.appendChild(mrDiv);

    let moviePosterEl = document.createElement('img');
    moviePosterEl.src = movieObj.Poster;
    moviePosterEl.classList.add('movie-result-img');
    mrDiv.appendChild(moviePosterEl);

    let div = document.createElement('div');
    div.classList.add('movie-result-details')
    mrDiv.appendChild(div);

    let movieTitleEl = document.createElement('h1');
    movieTitleEl.textContent = movieObj.Title;
    movieTitleEl.classList.add('movie-result-h');
    div.appendChild(movieTitleEl);

    let p1 = document.createElement('p');
    p1.textContent = 'Released : ' + movieObj.Released;
    div.appendChild(p1);

    let p2 = document.createElement('p');
    p2.textContent = 'Runtime : ' + movieObj.Runtime;
    div.appendChild(p2);

    let p3 = document.createElement('p');
    p3.textContent = 'Language : ' + movieObj.Language;
    div.appendChild(p3);

    let btnDiv = document.createElement('div');
    btnDiv.classList.add('movie-result-btn-container');
    div.appendChild(btnDiv);

    let movieBtnEl = document.createElement('button');
    movieBtnEl.textContent = 'Learn More';
    movieBtnEl.classList.add('movie-result-btn');
    btnDiv.appendChild(movieBtnEl);
}

searchButtonEl.onclick = function() {
    srDiv.textContent = '';
    if (movieNameEl.value === '') {
        alert('Please enter a movie!');
        return;
    }
    let url = "https://www.omdbapi.com/?i=tt3896198&apikey=74cb1b0&t=" + movieNameEl.value;

    let httpRequest = new XMLHttpRequest();

    httpRequest.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            let data = JSON.parse(this.responseText);
            console.log(data);
            if (data.Title) {
                searchResult(data);
            } else {
                alert('not found');
                return;
            }
        }
    };

    httpRequest.open("GET", url, true);
    httpRequest.send();


    movieNameEl.value = '';

};