
var form= document.getElementById("addform")
var ul = document.getElementById("items")
var li = document.querySelectorAll(".list-group-item")
var filter = document.getElementById("filter")
form.addEventListener("submit",Additem )
function Additem(e){
    e.preventDefault();//off submit
    var newitem = document.getElementById("enter").value
    var li = document.createElement("li")
    li.className = "list-group-item";
    li.innerText = newitem//adding value from input to ul list
    ul.appendChild(li)// adding item
    var newbutton = document.createElement("button")
    newbutton.className = "btn btn-danger btn-sm float-right delete"
    newbutton.textContent = 'X'
    li.appendChild(newbutton)//adding delete button to li
}

function deleteItem(e){
    if(e.target.classList.contains("delete")){
        if(confirm("are you sure")){
            var li = e.target.parentElement
            ul.removeChild(li)}
        
    }
}
ul.addEventListener("click",deleteItem)
filter.addEventListener("keyup",filterItems)
function filterItems(e){
    //convert text to  lowercase
var text  = e.target.value.toLowerCase()
var listimes = ul.getElementsByTagName("li")
Array.from(listimes).forEach((item)=>{
    var itemName = item.lastChild.textContent
    if(itemName.toLowerCase().indexOf(text) != -1){
        item.style.backgroundColor = "yellow"
    }else {
        item.style.display = "none"
    }
})
}
