console.log("Welcome to the Notes Site");
showNotes();  // to show notes when page is relod

let addBtn = document.getElementById("addBtn");

addBtn.addEventListener("click", function (e) {
  let addTxt = document.getElementById("addTxt");
  let notes = localStorage.getItem("notes");
  let addTitle = document.getElementById('addTitle');

  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }

  let myObj = {
    Text:addTxt.value,
    Title:addTitle.value,
  }


  // Previously notes is Array of String now it is Array of Object
  notesObj.push(myObj);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  addTxt.value = "";
  addTitle.value = "";
  // console.log(notesObj);
  showNotes();
});

// to show notes

function showNotes(e) {
  let notes = localStorage.getItem('notes');

  if (notes == null) {
    notesObj = [];
  }
  else {
    notesObj = JSON.parse(notes);
  }
  let html = "";
  notesObj.forEach(function (element, index) {

    // this.id gives the id of current ele and id is index here it will gives the index number from notesObj to perform action (in button)
    // element.title,element.text gives both field data because notesObj is Array of object
    html += `
        <div class="noteCard my-2 mx-2 card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">${element.Title}</h5> 
                <p class="card-text"> ${element.Text}</p>
                <button id="${index}"onclick="deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
            </div>
        </div>`;
  });
  let notesElm = document.getElementById("notes");
  if (notesObj.length != 0) {
    notesElm.innerHTML = html;
  } else {
    notesElm.innerHTML = `Nothing to show! Use "Add a Note" section above to add notes.`;
  }
}

// to delete notes

function deleteNote(index) {
  let notes = localStorage.getItem('notes');

  if (notes == null) {
    notesObj = [];
  }
  else {
    notesObj = JSON.parse(notes);
  }
  /*
    What is the use of splice in JavaScript?
    splice() JS Array Method. The splice() 
    method is a built-in method for JavaScript Array objects. 
    It lets you change the content of your array by removing or
    replacing existing elements with new ones

    splice(start index,number of ele want to remove)
  */

  notesObj.splice(index, 1);
  // after removing from local storage update local storage
  localStorage.setItem("notes", JSON.stringify(notesObj));
  showNotes();
}

// To search the notes

let search = document.getElementById('searchTxt');

search.addEventListener('input', function (e) {
  let inputVal = search.value.toLowerCase();

  let noteCards = document.getElementsByClassName('noteCard');

  // make array of all the div presnt
  Array.from(noteCards).forEach(function (element) {
    // first Text of p
    let cardTxt = element.getElementsByTagName('p')[0].innerText.toLowerCase();
    if (cardTxt.includes(inputVal)) {
      element.style.display = "block";
    }
    else {
      element.style.display = "none";
    }
  });
});