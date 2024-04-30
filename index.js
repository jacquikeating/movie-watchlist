const searchInput = document.querySelector(".search-input")
const searchBtn = document.querySelector(".search-btn")
const dataSection = document.querySelector(".data-section")
let searchQuery = ''

searchBtn.addEventListener("click", function() {
    searchQuery = searchInput.value
    searchInput.value = ''
    localStorage.setItem("query", searchQuery)
    searchDB()
})

async function searchDB() {
    const searchKeywords = localStorage.getItem("query")
    const res = await fetch("https://www.omdbapi.com/?apikey=58fcd6bb&s=blade")
    const data = await res.json()
    renderResults(data)
}

function getResultsInfo(searchData) {
    for (let i = 0; i < data.Search[i]; i++) {
        fetch(`https://www.omdbapi.com/?apikey=58fcd6bb&i=${movieID}`)
            .then(res => res.json())
            .then(data => {
                movieDetails = data
            })
    }

}

function renderResults(searchData) {
    try {
        let resultsHTML = ''
        for (let i = 0; i < searchData.Search.length; i++) {
            let movieID = searchData.Search[i].imdbID 
            let movieDetails = ''          

            // fetch(`https://www.omdbapi.com/?apikey=58fcd6bb&i=${movieID}`)
            // .then(res => res.json())
            // .then(data => {
            //     movieDetails = data
            // })

            resultsHTML += `
                <div class="movie-details">
                    <img src="${searchData.Search[i].Poster}" class="movie-poster">
                    <div class="movie-details-text">
                        <div class="movie-details-text-top">
                            <h2>${searchData.Search[i].Title}</h2>
                            <img src="/images/star.svg">
                            <p>${movieID}</p>
                        </div>
                        <div class="movie-details-text-mid">
                            <p class="details-text">117 min</p>
                            <p class="details-text">Action, Drama, Sci-Fi</p>
                            <button class="watchlist-btn">
                                <img src="/images/plus.svg">
                                <p class="details-text">Watchlist</p>
                            </button>
                        </div>
                        <p class="movie-synopsis">
                            hi
                        </p>
                    </div>
                </div>`
        }
        dataSection.innerHTML = resultsHTML
    } 
    
    catch {
        dataSection.innerHTML = `<p class="error-text">Unable to find what you’re looking for.<br>Please try another search.</p>`
    }
    
}

/*
Title: "Blade Runner",
      Year: "1982",
      imdbID: "tt0083658",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNzQzMzJhZTEtOWM4NS00MTdhLTg0YjgtMjM4MDRkZjUwZDBlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
    },
*/