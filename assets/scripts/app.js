const addMovieMode = document.getElementById("add-modal");
const backdrop = document.getElementById("backdrop");
const startMovieButton = document.querySelector("header button");
const cancelButton = document.querySelector(".btn--passive");
const addButton = document.querySelector(".btn--success");
const list = document.getElementsByTagName("ul");
/*const backdrop = document.body.firstElementChild;*/

class Movie {
  constructor(title, imageURL,rating) {
    this.title = title;
    this.imageURL = imageURL;
    this.rating = rating;
  }
}

const toggleMovieModel = () => {
  addMovieMode.classList.toggle("visible");
  backdrop.classList.toggle("visible");
};
const getFieldsData = () => {
  const movieTitle = document.getElementById("title").value;
  const movieImageURL = document.getElementById("image-url").value;
  const movieRating = document.getElementById("rating").value;
  addItem(new Movie(movieTitle, movieImageURL,movieRating));
};
const addItem = (movie)=> {
  const ul = document.getElementById("movie-list");
  const li = document.createElement("li");
  const div = document.createElement("div");
  const img = document.createElement("img");
  const h2 = document.createElement("h2");
  const p = document.createElement("p");

  li.setAttribute("class", "movie-element");
  img.setAttribute("class","movie-element__image");
  div.setAttribute("class","movie-element__info");

  ul.appendChild(li);
  li.append(img);
  li.append(div);
  div.append(h2);
  div.append(p);

  h2.appendChild(document.createTextNode(movie.title));
  p.appendChild(document.createTextNode(movie.rating));
  img.setAttribute("src",movie.imageURL);
}

startMovieButton.addEventListener("click", toggleMovieModel);
cancelButton.addEventListener("click", toggleMovieModel);
backdrop.addEventListener("click",toggleMovieModel);
addButton.addEventListener("click", getFieldsData);

