let menu = document.getElementsByClassName("menu")[0];

document.getElementsByClassName("button")[0].addEventListener("click", function(){  
    let element = document.createElement("li");
    element.innerHTML = `Element ${menu.children.length+1} - w chwili dodania było ${menu.children.length} elementów`;
    menu.append(element);
})