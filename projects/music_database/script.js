// Cohl Dickerson 12/05/24

var music = [
    {
        album: "all killer, no filler",
        artist: "home alone.",
        genre: "Lo-Fi",
        image: "all killer, no filler.png",
        rating: "9/10"
    },
    {
        album: "Before the Night",
        artist: "HOME",
        genre: "Synthwave",
        image: "Before the Night.jpeg",
        rating: "9/10"
    },
    {
        album: "BRAINDEAD",
        artist: "Kill Dyll",
        genre: "Trap Metal",
        image: "BRAINDEAD.jpg",
        rating: "9/10"
    },
    {
        album: "DAMN.",
        artist: "Kendrick Lamar",
        genre: "Hip-Hop",
        image: "DAMN.jpg",
        rating: "10/10"
    },
    {
        album: "Falling into Place",
        artist: "HOME",
        genre: "Synthwave",
        image: "Falling into Place.jpeg",
        rating: "7/10"
    },
    {
        album: "Floating",
        artist: "Mikel",
        genre: "Lo-Fi",
        image: "Floating.jpeg",
        rating: "8/10"
    },
    {
        album: "Flower Boy",
        artist: "Tyler, The Creator",
        genre: "Hip-Hop",
        image: "Flower Boy.jpg",
        rating: "7/10"
    },
    {
        album: "GNX",
        artist: "Kendrick Lamar",
        genre: "Hip-Hop",
        image: "GNX.jpg",
        rating: "9/10"
    },
    {
        album: "GUTS",
        artist: "Olivia Rodrigo",
        genre: "Pop",
        image: "GUTS.jpeg",
        rating: "7/10"
    },
    {
        album: "HOPE",
        artist: "NF",
        genre: "Hip-Hop",
        image: "HOPE.jpeg",
        rating: "9/10"
    },
    {
        album: "LCMSMiP",
        artist: "C418",
        genre: "Ambient",
        image: "Life Changing Moments Seem Minor in Pictures.jpg",
        rating: "7/10"
    },
    {
        album: "lotus root",
        artist: "Blvk",
        genre: "Lo-Fi",
        image: "lotus root.jpg",
        rating: "6/10"
    },
    {
        album: "Man On The Moon",
        artist: "Kid Cudi",
        genre: "Hip-Hop",
        image: "Man On The Moon; The End Of Day.jpeg",
        rating: "8/10"
    },
    {
        album: "Mario & Sleep",
        artist: "Super Piano 64",
        genre: "Lo-Fi",
        image: "Mario & Sleep.jpg",
        rating: "7/10"
    },
    {
        album: "Odyssey",
        artist: "HOME",
        genre: "Synthwave",
        image: "Odyssey.jpeg",
        rating: "9/10"
    },
    {
        album: "Resting State",
        artist: "HOME",
        genre: "Synthwave",
        image: "Resting State.jpeg",
        rating: "7/10"
    },
    {
        album: "SMITHEREENS",
        artist: "Joji",
        genre: "R&B",
        image: "SMITHEREENS.jpg",
        rating: "7/10"
    },
    {
        album: "The Death of Slim Shady",
        artist: "Eminem",
        genre: "Hip-Hop",
        image: "The Death of Slim Shady.png",
        rating: "7/10"
    },
    {
        album: "The Search",
        artist: "NF",
        genre: "Hip-Hop",
        image: "The Search.jpeg",
        rating: "8/10"
    },
    {
        album: "Zelda & Chill",
        artist: "Mikel",
        genre: "Lo-Fi",
        image: "Zelda & Chill.jpg",
        rating: "8/10"
    }
]

var container = document.querySelector(".music_container")

function reset(){
    container.innerHTML = ""
    music.forEach(function(album){
        var code = `
        <div id="card">
            <h1 class="text">${album.album}</h1>
            <h2 class="text">${album.artist}</h2>
            <h4 class="text">${album.genre}</h4>
            <img src="assets folder/${album.image}">
            <p class="text">${album.rating}</p>
        </div>
        `
        container.innerHTML += code
    })
}

reset()

function filter(genre){
    container.innerHTML = ""
    music.forEach(function(album){
        if (album.genre == genre){
            var code = `
            <div id="card">
                <h1 class="text">${album.album}</h1>
                <h2 class="text">${album.artist}</h2>
                <h4 class="text">${album.genre}</h4>
                <img src="assets folder/${album.image}">
                <p class="text">${album.rating}</p>
            </div>
            `
            container.innerHTML += code
        }
        
    })
}