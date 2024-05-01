document.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  const navbarHeight = 100;

  const distanceFromTop = Math.abs(
    document.body.getBoundingClientRect().top
  );

  if (distanceFromTop >= navbarHeight) navbar.classList.add("fixed-top");
  else navbar.classList.remove("fixed-top");
});

const dropArea = document.querySelector(".drop_box"),
  button = dropArea.querySelector("button"),
  dragText = dropArea.querySelector("header"),
  input = dropArea.querySelector("input");
let file;
var filename;

button.onclick = () => {
  input.click();
};
input.addEventListener("change", function (e) {
  var fileName = e.target.files[0].name;
  let filedata = string; `
    <form action="" method="post">
    <div class="form">
    <h4>${fileName}</h4>
    <input type="file" placeholder="Upload file">
    <button class="btn">Upload</button>
    </div>
    </form>`;
  dropArea.innerHTML = filedata;
});

// Add event listener to dropdown toggle buttons
document.querySelectorAll('.dropdown-toggle').forEach(function (toggle) {
  toggle.addEventListener('click', function (event) {
    // Close all other dropdowns
    document.querySelectorAll('.dropdown-menu').forEach(function (dropdown) {
      if (dropdown !== toggle.nextElementSibling) {
        dropdown.classList.remove('show');
      }
    });

    // Toggle the current dropdown
    toggle.nextElementSibling.classList.toggle('show');

    // Prevent default link behavior
    event.preventDefault();
  });
});

// Close dropdowns when clicking outside
document.addEventListener('click', function (event) {
  if (!event.target.matches('.dropdown-toggle')) {
    document.querySelectorAll('.dropdown-menu').forEach(function (dropdown) {
      dropdown.classList.remove('show');
    });
  }
});

document.addEventListener("DOMContentLoaded", function () {
  // Function to handle the search action
  function searchNotes(query) {
    query = query.toLowerCase(); // Convert the query to lowercase for case-insensitive search
    const notes = document.querySelectorAll('.note-title'); // Assuming '.note-title' is the class for your note titles
    notes.forEach(function (note) {
      const title = note.textContent.toLowerCase();
      if (title.includes(query)) {
        note.style.display = "block"; // Show the note if it contains the search query
      } else {
        note.style.display = "none"; // Hide the note if it doesn't match the search query
      }
    });
  }

  // Event listener for the search button click
  document.getElementById("searchButton").addEventListener("click", function () {
    const query = document.getElementById("searchInput").value.trim();
    searchNotes(query);
  });

  // Event listener for the search input field
  document.getElementById("searchInput").addEventListener("input", function () {
    const query = this.value.trim();
    searchNotes(query);
  });
});

