const movieData = {
  highlights: [
    {
      id: 1,
      title: "Avatar: O Caminho da Água",
      genre: "Ficção",
      dur: "3h 12m",
      rate: "12 anos",
      img: "10",
    },
    {
      id: 2,
      title: "Batman",
      genre: "Ação",
      dur: "2h 56m",
      rate: "14 anos",
      img: "20",
    },
    {
      id: 3,
      title: "Duna: Parte 2",
      genre: "Sci-Fi",
      dur: "2h 46m",
      rate: "14 anos",
      img: "30",
    },
    {
      id: 4,
      title: "Duna: Parte 2",
      genre: "Sci-Fi",
      dur: "2h 46m",
      rate: "14 anos",
      img: "30",
    },
    {
      id: 5,
      title: "Duna: Parte 2",
      genre: "Sci-Fi",
      dur: "2h 46m",
      rate: "14 anos",
      img: "30",
    },
    {
      id: 6,
      title: "Duna: Parte 2",
      genre: "Sci-Fi",
      dur: "2h 46m",
      rate: "14 anos",
      img: "30",
    },
  ],
  foryou: [
    {
      id: 7,
      title: "John Wick 4",
      genre: "Ação",
      dur: "2h 49m",
      rate: "16 anos",
      img: "12",
    },
    {
      id: 8,
      title: "Interestelar",
      genre: "Sci-Fi",
      dur: "2h 49m",
      rate: "L",
      img: "28",
    },
    {
      id: 9,
      title: "O Menu",
      genre: "Suspense",
      dur: "1h 47m",
      rate: "16 anos",
      img: "42",
    },
    {
      id: 10,
      title: "Duna: Parte 2",
      genre: "Sci-Fi",
      dur: "2h 46m",
      rate: "14 anos",
      img: "30",
    },
    {
      id: 11,
      title: "Duna: Parte 2",
      genre: "Sci-Fi",
      dur: "2h 46m",
      rate: "14 anos",
      img: "30",
    },
  ],
  upcoming: [
    { id: 12, title: "Coringa 2", genre: "Drama", img: "14" },
    { id: 13, title: "Mufasa", genre: "Família", img: "15" },
    {
      id: 14,
      title: "Duna: Parte 2",
      genre: "Sci-Fi",
      dur: "2h 46m",
      rate: "14 anos",
      img: "30",
    },
  ],
};

function createMovieCard(movie, isUpcoming = false) {
  const sessions = ["14:00", "17:30", "20:00", "22:45"];

  return `
        <div class="movie-card">
            <div class="poster-box">
                <img src="https://picsum.photos/300/450?random=${
                  movie.id
                }" alt="${movie.title}">
            </div>
            <div class="card-body">
                <div class="card-tags">
                    <span class="tag-y">${movie.genre}</span>
                    ${
                      movie.dur ? `<span class="tag-y">${movie.dur}</span>` : ""
                    }
                    ${
                      movie.rate
                        ? `<span class="tag-y">${movie.rate}</span>`
                        : ""
                    }
                </div>
                <div class="movie-title">${movie.title}</div>
                ${
                  !isUpcoming
                    ? `
                    <div class="sessions-box">
                        ${sessions
                          .map(
                            (time) =>
                              `<button class="btn-time" onclick="selectSession('${movie.title}', '${time}', '${movie.genre}', '${movie.dur}')">${time}</button>`
                          )
                          .join("")}
                    </div>
                `
                    : ""
                }
            </div>
        </div>
    `;
}

function initPage() {
  // Renderiza Destaques
  document.getElementById("grid-highlights").innerHTML = movieData.highlights
    .map((m) => createMovieCard(m))
    .join("");
  // Renderiza Para Você
  document.getElementById("grid-foryou").innerHTML = movieData.foryou
    .map((m) => createMovieCard(m))
    .join("");
  // Renderiza Em Breve
  document.getElementById("grid-upcoming").innerHTML = movieData.upcoming
    .map((m) => createMovieCard(m, true))
    .join("");

  // Configura Hero
  const hero = movieData.highlights[0];
  document.getElementById(
    "heroBanner"
  ).style.backgroundImage = `url('https://picsum.photos/id/${hero.img}/1600/900')`;
  document.getElementById("heroTitle").textContent = hero.title;
}

window.selectSession = (title, time, genre, dur) => {
  const selected = { title, time, genre, dur };
  sessionStorage.setItem("selectedSession", JSON.stringify(selected));
  window.location.href = "cinema.html";
};

function logout() {
  sessionStorage.clear();
  window.location.href = "login.html";
}

initPage();
