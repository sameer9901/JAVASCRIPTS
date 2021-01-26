
// selects the form
const form = document.querySelector('.form');
// selects the input box
const input = document.querySelector('.input');
// selects the <ul> 
const itemsList = document.querySelector('.items');

// array which stores every Bloglists
let arr = [];

// add an eventListener on form, and listen for submit event
form.addEventListener('submit', function (event) {
  // prevent the page from reloading when submitting the form
  event.preventDefault();

  if(input.value == " ")
  {
    // console.log("inside submit")
    alert("please type an article");
  }
  else
  {

  addTodo(input.value);   // call addTodo function with input box current value

  }

});

// function to add todo
function addTodo(item) {
  // if item is not empty
 

  if (item !== '') {
    // creating object to store in database(local storage)
    const todo = {
      id: Date.now(),
      name: item

    };

    // then add it to  array

    arr.push(todo);
    addToLocalStorage(arr); // then store it in localStorage

    // finally clear the input box value
    input.value = '';
  }
}

// function to render given todos to screen
function renderTodos(arr) {
  // clear everything inside <ul> with class=todo-items
  itemsList.innerHTML = '';

  // run through each item inside todos
  arr.forEach(function (item) {

    const li = document.createElement('li');
    // <li class="item"> </li>
    li.setAttribute('class', 'item');
    // <li class="item" data-key="20200708"> </li>
    li.setAttribute('data-key', item.id);
    /*  <!-- <li class="item" data-key="1594003133171">
       <span class="article">have fun</span>
        <button class="viewBtn">view</button>
      </li> -->*/




    const articleText = document.createElement('span');
    articleText.textContent = item.name;
    articleText.classList.add('article');
    li.append(articleText);


    const btn = document.createElement('button');
    btn.textContent = 'view';
    btn.classList.add('viewBtn');
    li.append(btn);


    btn.addEventListener('click', (e) => {
      console.log("hii");

      /* gets the target button Node */

      const targetNode = e.target;

      /* gets the parent node of button i.e list */

      const parentNode = targetNode.parentNode;


      /* gets the parent nodes data-key value i.e list(data-key value)  */

      const dataKeyValue = parentNode.getAttribute('data-key');

      console.log(dataKeyValue);

      var article;


      arr.forEach(function (item) {
        if (dataKeyValue == item.id) {
          console.log("hurray")
          console.log(dataKeyValue)
          console.log(item.id)
          console.log("inside " + item.name)

          article = item.name;

        }
      }
      )

      console.log("this is the value of article " + article)


      valueSender();

      function valueSender() {
        console.log("inside function article value is " + article);

        localStorage.setItem("value", article);

        localStorage.setItem("id", dataKeyValue);

        console.log("inside function key value is " + dataKeyValue);

        // localStorage.setItem("array",arr)


        window.location = "viewmore.html"

      }




    });





    // finally add the <li> to the <ul>
    itemsList.append(li);
  });



}

// function to add arr to local storage
function addToLocalStorage(arr) {
  // conver the array to string then store it.
  localStorage.setItem('arr', JSON.stringify(arr));
  // render them to screen
  renderTodos(arr);
}

// function helps to get everything from local storage
function getFromLocalStorage() {
  const reference = localStorage.getItem('arr');
  // if reference exists
  if (reference) {
    // converts back to array and store it in  array
    arr = JSON.parse(reference);
    renderTodos(arr);
  }
}



// initially get everything from localStorage
getFromLocalStorage();

