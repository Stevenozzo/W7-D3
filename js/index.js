const libraryUrl = "https://striveschool-api.herokuapp.com/books";

const getBooks = function () {
  fetch(libraryUrl)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Errore nella response dal server!");
      }
    })
    .then((booksArray) => {
      const booksContainer = document.getElementById("books-container");

      booksContainer.innerHTML = "";

      booksArray.forEach((book) => {
        const cardDiv = document.createElement("div");
        cardDiv.classList.add("card", "m-3");
        cardDiv.style.width = "18rem";

        const cardImg = document.createElement("img");
        cardImg.classList.add("card-img-top");
        cardImg.src = book.img;
        cardImg.alt = "Book cover";

        const cardBody = document.createElement("div");
        cardBody.classList.add("card-body", "d-flex", "flex-column");

        const cardTitle = document.createElement("h5");
        cardTitle.classList.add("card-title");
        cardTitle.innerText = book.title;

        const cardText = document.createElement("p");
        cardText.classList.add("card-text");
        cardText.innerText = book.price + " €";

        const cardLink = document.createElement("a");
        cardLink.classList.add("btn", "btn-primary", "mt-auto");
        cardLink.href = "#";
        cardLink.innerText = "Buy It";

        cardBody.appendChild(cardTitle);
        cardBody.appendChild(cardText);
        cardBody.appendChild(cardLink);

        cardDiv.appendChild(cardImg);
        cardDiv.appendChild(cardBody);

        booksContainer.appendChild(cardDiv);
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

getBooks();
