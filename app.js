
function addTodo() {
    var input = document.getElementById("todo_item");

    var list = document.getElementById('list');

    // creating li and text
    var li = document.createElement('li')
    var litext = document.createTextNode(input.value)
    li.appendChild(litext)

    // creating delete button

    var dltBtn = document.createElement('button')
    var dltText = document.createTextNode("DELETE")
    dltBtn.setAttribute("onclick", "dltbtn(this)")
    dltBtn.setAttribute("class","DltBtn")
    dltBtn.appendChild(dltText)
    li.appendChild(dltBtn)

    // creating Edit Button
    var editBtn = document.createElement("button")
    var editText = document.createTextNode("EDIT")
    editBtn.appendChild(editText)
    editBtn.setAttribute("onclick", "editvalue(this)")
    editBtn.setAttribute("class","EditBtn")
    li.appendChild(editBtn)


    list.appendChild(li)

    input.value = ""
    console.log(li)

};
// delete button.
function dltbtn(e) {
    e.parentNode.remove()
};

// delete all button
function dltall() {
    list.innerHTML = ""
};

// edit Button
function editvalue(e) {
    var val = prompt("Enter the Updated Value", e.parentNode.firstChild.nodeValue)
    e.parentNode.firstChild.nodeValue = val;
};
