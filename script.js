const inputBox = document.querySelector ('.inputBox');
const btn = document.querySelector ('.btn');
const toDoContainer = document.querySelector ('.toDoContainer');

btn.addEventListener ('click',function() {

    const item = document.createElement ('li');
    item.innerText = inputBox.value; 
    item.classList.add('toDoAdd')
    toDoContainer.appendChild(item);
    inputBox.value = '';

    item.addEventListener ('click', function() {
        item.classList.add('toDoCompleted')
    })
    item.addEventListener ('dblclick', function() {
        toDoContainer.removeChild(item);
    })
})