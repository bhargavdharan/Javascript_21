/**
 * In this demo application, we will create a basic webpage that will display a list of movies.
 */


document.addEventListener(('DOMContentLoaded'),function(){

    // setTimeout(glpContexts.sendContexts, 500)

    const list = document.querySelector('#movie-list ul');
    const forms = document.forms;

    //delete movie
    list.addEventListener('click',function(e){
        if(e.target.className == 'delete'){
            const li = e.target.parentElement;
            li.parentNode.removeChild(li);
        }
    });

    //Add movie
    const addForm = forms['add-movie'];
    addForm.addEventListener('submit',function(e){
        e.preventDefault(); // it cancels the event to not occur repeats


    //creating elements
    const value = addForm.querySelector('input[text="text"]').value;
    const li = document.createElement('li');
    const movieName = document.createElement('span');
    const deleteBtn = document.createElement('span');

    //add text content
     movieName.textContent = value;
     deleteBtn.textContent = 'delete';


    //add classes
     movieName.classList.add('name');
     deleteBtn.classList.add('delete');

    //append to DOM
      li.appendChild(movieName);
      li.appendChild(deleteBtn);
      list.appendChild(li);
    });


})
