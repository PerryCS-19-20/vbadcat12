function buildMap(id){
    var div = document.getElementById(id);
    var ul = document.createElement("ul");
    div.appendChild(ul);
    var li = document.createElement("li");
        li.textContent = "home page" + s;
        div.appendChild(li);
        li.textContent = "404" + s;
        div.appendChild(li);
        li.textContent = "alert" + s;
        div.appendChild(li);
        li.textContent = "pop-up" + s;
        div.appendChild(li);
        li.textContent = "home page" + s;
        div.appendChild(li);
}