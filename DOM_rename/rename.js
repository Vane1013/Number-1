function rename(){
    console.log(secondName_node.innerText)
    secondName_node.innerHTML="<b>Efimova</b>"
    console.log()

     console.log(name_node.innerText)
    name_node.innerHTML="<b>Veronika</b>"
    console.log()
}

const secondName_node = document.getElementById("secondName")
secondName_node.addEventListener("click",rename)

const name_node = document.getElementById("name")
name_node.addEventListener("click",rename)

const year_node = document.getElementById("year")
year_node.addEventListener("click",rename)

const for_click = document.getElementById("for_click")
for_click.addEventListener("click",rename)