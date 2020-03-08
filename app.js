document.getElementById('get-jokes').addEventListener('click', getJokes);

function getJokes(e) {

  const number = document.getElementById('number-of-jokes').value;
  
  const url = `http://api.icndb.com/jokes/random/${number}`;
  
  const xhr = new XMLHttpRequest();
  xhr.open('GET', url, true);

  xhr.onload = function() {
    if(this.status === 200){
      const jokes = JSON.parse(this.responseText);
      console.log(jokes);
      let output = '';

      if(jokes.type === 'success') {
        jokes.value.forEach(function(joke) {
          output += `
            <li class="pb-3">${joke.joke}</li>
            
          `
        });        
      } else {
        `<li>Something went wrong!</li>`
      }
      document.querySelector('.output').innerHTML = output;
    }
  }

  xhr.send();

  e.preventDefault();
}