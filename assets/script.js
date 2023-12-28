document.addEventListener("DOMContentLoaded", function () {
  const pop_up_overlay = document.querySelector(".pop-up-overlay");
  const pop_up = document.querySelector(".pop-up");
  const btn_add = document.querySelector("#btn-add");
  const cancel_book = document.querySelector("#cancel-book");
  const container = document.querySelector(".container");

  btn_add.addEventListener("click", function () {
    pop_up_overlay.style.display = "block";
    pop_up.style.display = "block";
  });

  cancel_book.addEventListener("click", function (event) {
    event.preventDefault();
    pop_up_overlay.style.display = "none";
    pop_up.style.display = "none";
  });

  const add_btn = document.getElementById("add-book");

  add_btn.addEventListener("click", function (event) {
    event.preventDefault();

    // Get the values from the form
    const bname = document.getElementById("book-name").value;
    const aname = document.getElementById("author-name").value;
    const bd = document.getElementById("book-description").value;

    // Create a new book container
    const div = document.createElement("div");
    div.setAttribute("class", "book-container");
    div.innerHTML = 
      `<h1>${bname}</h1>
      <h2>${aname}</h2>
      <p>${bd}</p>
      <button class="delete-btn">Delete</button>`;

    // Append the new book container to the container element
    container.appendChild(div);

    // Hide the pop-up
    pop_up_overlay.style.display = "none";
    pop_up.style.display = "none";

    // Clear the form values
    document.getElementById("book-name").value = "";
    document.getElementById("author-name").value = "";
    document.getElementById("book-description").value = "";
  });

  container.addEventListener("click", function (event) {
    if (event.target.classList.contains("delete-btn")) {
      // Remove the parent element (the book container) when the "Delete" button is clicked
      event.target.parentElement.remove();
    }
  });
});
