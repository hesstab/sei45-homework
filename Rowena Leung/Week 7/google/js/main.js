// declare function
const getBook = function(){
  event.preventDefault(); //don't leave the page
  const title = document.getElementById('search').value;
  const xhr = new XMLHttpRequest();
  xhr.open('GET', `https://www.googleapis.com/books/v1/volumes?q=title:${title}`);
  xhr.send();

  xhr.onreadystatechange = function(){
      if (xhr.readyState !== 4){
        return; //not ready yet so exit the function
      }
      //AJAJ
      const data = JSON.parse(xhr.responseText);  //convert to readable text aka JSON
        //get information from google's objects
        //manipulate DOM to create element
        //make book information appear on page
      const bookCover = data.items[0].volumeInfo.imageLinks.thumbnail;
      const img = document.createElement('IMG');
      img.src = bookCover;
      document.getElementById('book-info').appendChild(img);

      const bookTitle = data.items[0].volumeInfo.title;
      const title = document.createElement('h3');
      // console.log(bookTitle);
      title.innerHTML = `Title: ${bookTitle}`;
      document.getElementById('book-info').appendChild(title);

      const bookSummary = data.items[0].volumeInfo.description;
      const p = document.createElement('p');
      // console.log(bookSummary);
      p.innerHTML = `Summary: ${bookSummary}`;
      document.getElementById('book-info').appendChild(p);
  };
};

//attach function to button
//my way
// document.getElementById('submit').addEventListener('click', getBook);
//joel's way - wrap the input in a form tag and then add event.preventDefault to not leave the page
document.querySelector('form').addEventListener('submit', getBook)
//display on page
