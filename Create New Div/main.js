const btnAdd = document.querySelector(".btn-add")
const divContainer = document.getElementById('div-container')

btnAdd.addEventListener("click", addNew)

function addNew() {
    const newDiv = document.createElement('div')
    newDiv.classList.add('div-shadow')
    divContainer.appendChild(newDiv)
}
