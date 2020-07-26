var list = document.getElementById("list");
function addTodo() {
    var todo_item = document.getElementById("todo-item");
    var li = document.createElement("li");
    var liText = document.createTextNode(todo_item.value)
    li.appendChild(liText)
    if (todo_item.value == "") {
        alert("Please enter something");
        editBtn.disabled = true;

    }

    //  create dlt button
    var dltBtn = document.createElement("button");
    var dltText = document.createTextNode("");
    dltBtn.setAttribute("class", "fa fa-trash");
    dltBtn.appendChild(dltText);
    dltBtn.setAttribute("onclick", "dltItem(this)");
    li.appendChild(dltBtn)

    // create edit button
    var editBtn = document.createElement("button");
    var editText = document.createTextNode("");
    editBtn.setAttribute("class", " fa fa-pencil ");
    editBtn.appendChild(editText);
    editBtn.setAttribute("onclick", "editItem(this)");
    li.appendChild(editBtn)

    list.appendChild(li)
    todo_item.value = ""
    console.log(li)

}
function dltItem(e) {
    e.parentNode.remove()
}
function editItem(e) {
    var val = prompt("Enter a new value", e.parentNode.firstChild.nodeValue);
    e.parentNode.firstChild.nodeValue = val;
}

function dltAll() {
    list.innerHTML = ""
}





