const libraryUrl = "https://striveschool-api.herokuapp.com/books";

const getBooks = function () {
  fetch(libraryUrl)
    .then((response) => {
      console.log("RESPONSE", response);
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Errore nella response dal server!");
      }
    })
    .then((booksObject) => {
      console.log(booksObject);
      const cardImg = document.getElementById("card-img-top");
      cardImg.inne;
      const cardTitle = document.getElementById("card-title");
      cardTitle.innerText = booksObject.title;
    })
    .catch((err) => {
      console.log(err);
    });
};

getBooks();
